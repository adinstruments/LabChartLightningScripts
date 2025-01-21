# Custom stimulus waveforms in LabChart Lightning

[LabChart Lightning](https://adi.to/LabChartLightning)
is the next generation data acquisition and analysis application from
ADInstruments. It supports flexible configuration of electrical stimulation
from a PowerLab to a variety of samples and subjects.
[See here](https://adi.to/LCL-Stimulator) for an overview of how to use the
stimulator feature.

As well as the built-in stimulus waveforms, it is possible to define new
waveforms via a JavaScript plugin system. Here, we include the
[`CustomPulseBurst.js`](./CustomPulseBurst.js) script that shows how to define
a simple pulse burst waveform that you can adapt and extend for your own
purposes.

---

To get LabChart Lightning to load a new waveform script, place it in the
provided `LabChart Lightning/Plugins/Stimulator Waveforms/` folder that lives
in your main documents folder. It must be within a folder with the same name
(i.e. `CustomPulseBurst/CustomPulseBurst.js`). An example folder structure is
shown below.

Once the script is in place, LabChart Lightning will load it next time it is
opened. You can verify this using the plugins list popup in the very bottom
right corner of the main window, and it should be possible to select the new
waveform when setting up your stimulus protocols.

```
Documents/LabChart Lightning/
├── Plugins
│   ├── Calculations
│   │   └── ...
│   ├── Devices
│   │   └── ...
│   └── Stimulator Waveforms
│       └── CustomPulseBurst
│           └── CustomPulseBurst.js
└── Projects
    ├── Project1
    └── ...
```

---

<!---
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#specifying-the-theme-an-image-is-shown-to
--->
<a href="https://adi.to/LabChartLightning">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/.images/lightning_logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="/.images/lightning_logo-light.png">
    <img src="/.images/lightning_logo-light.png">
  </picture>
</a>

[![LabChart Lightning](/.images/lightning_application.png)](https://adi.to/LabChartLightning)
