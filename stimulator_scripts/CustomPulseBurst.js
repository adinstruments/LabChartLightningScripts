/**
 * This file defines a custom variant of the pulse burst waveforms built into
 * LabChart Lightning. It provides an alternative parameterisation in terms of
 * pauses and delays rather than frequencies. The idea is that this code is
 * illustrative of what is possible with the support for stimulator plugins.
 *
 * Please contact your ADInstruments support representative if you have further
 * questions: https://www.adinstruments.com/contact
 */

// ----------------------------------------------------------------------------

/**
 * See `enum UnitPrefix` defined in `public/device-api.ts`.
 *
 * https://github.com/adinstruments/LightningDeviceSDK
 */
const kMilliPrefix = 7;

// ----------------------------------------------------------------------------
// Define all the parameters we want the user to be able to edit via the UI.

//  _____|___|___|____________|___|___|__
//  <--->                                  Start delay
//        <->                              Interval
//                <---------->             Pause
//       ^   ^   ^                         Pulses per burst
//       ^--------            ^--------    Repeats

const kStartDelayInput = {
  name: "commonStartDelay",
  description: "Start delay",
  type: "number",
  unit: "s",
  unitPrefix: kMilliPrefix,
  default: 0.0, // In unprefixed units
  range: { rangeMin: 0, rangeMax: 1e4 },
};

const kPulseHeightInput = {
  name: "pulseHeight",
  description: "Height",
  type: "number",
  default: 5,
  unit: "V",
  properties: ["stimulatorAmplitude", "legacyIsoStimCurrent"],
};

const kPulseWidthInput = {
  name: "pulseWidth",
  description: "Width",
  type: "number",
  unit: "s",
  unitPrefix: kMilliPrefix,
  default: 0.002, // In unprefixed units
  range: { rangeMin: 1e-3, rangeMax: 1e4 },
  properties: ["stimulatorPulseWidth", "legacyIsoStimPulseWidth"],
};

const kPulseIntervalInput = {
  name: "pulseInterval",
  description: "Interval",
  type: "number",
  unit: "s",
  unitPrefix: kMilliPrefix,
  default: 0.1, // In unprefixed units
  range: { rangeMin: 0, rangeMax: 1e4 },
};

const kPulsesPerBurstInput = {
  name: "pulsesPerBurst",
  description: "Pulses per burst",
  type: "number",
  default: 5,
  range: { rangeMin: 1, rangeMax: 1e4 },
};

const kPauseInput = {
  name: "pause",
  description: "Pause",
  type: "number",
  unit: "s",
  unitPrefix: kMilliPrefix,
  default: 1.0, // In unprefixed units
  range: { rangeMin: 1e-3, rangeMax: 1e4 },
};

const kRepeatsInput = {
  name: "commonRepeats",
  description: "Repeats",
  type: "number",
  default: -1,
  range: { rangeMin: -1, rangeMax: 1e4 },
};

// ----------------------------------------------------------------------------
// The waveform itself is a custom class defining the key metadata about the
// waveform as well as an `apply()` function describing how to generate the
// output.

class CustomPulseBurst {
  name = "CustomPulseBurst";
  type = ["Stimulator Waveform", "Channel Calculation Function"];
  categories = ["Waveform", "Stimulator"];

  displayName = "Pulse Burst (Custom)";
  description = "Generates a pulse burst waveform.";

  inputs = [
    kStartDelayInput,
    kPulseHeightInput,
    kPulseWidthInput,
    kPulseIntervalInput,
    kPulsesPerBurstInput,
    kPauseInput,
    kRepeatsInput,
  ];

  apply(params, Calculations) {
    const [
      startDelay,
      pulseHeight,
      pulseWidth,
      pulseInterval,
      pulsesPerBurst,
      pause,
      repeats,
    ] = params;

    // Define each individual burst
    // Pulse(height, width, startDelay, endDelay, repeat)
    const pulses = Calculations.Pulse(
      pulseHeight,
      pulseWidth,
      0.0,
      pulseInterval,
      pulsesPerBurst
    );

    // Wrap these in a `Train` such that the bursts are repeated
    const period = Calculations.Add(
      Calculations.Add(
        Calculations.Multiply(pulseWidth, pulsesPerBurst),
        Calculations.Multiply(
          pulseInterval,
          Calculations.Add(pulsesPerBurst, -1)
        )
      ),
      pause
    );
    const segmentFlags = 0 | 0;
    const kSegmentLengthFromSource = -2 | 0;
    const scale = 1.0;
    const offset = 0.0;
    const repeatLoopStartSegment = 1;

    // Train(name1, source1, duration1, flags1, name2, ..., repeats, scale, preScaleOffset, minPeriodSecs, repeatLoopStartSegment)
    const stimulus = Calculations.Train(
      "StartDelay",
      0,
      startDelay,
      segmentFlags,
      "PulseBurst",
      pulses,
      kSegmentLengthFromSource,
      segmentFlags,
      // Train params
      repeats,
      scale,
      offset,
      period,
      repeatLoopStartSegment
    );

    return { stimulus };
  }
}

// -----------------------------------------------------------------------------
// Export in the format Lightning expects for its plugin system

module.exports = {
  features() {
    return [new CustomPulseBurst()];
  },
};

// -----------------------------------------------------------------------------
