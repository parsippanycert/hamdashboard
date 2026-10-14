// CUT START
var disableSetup = true; // Manually set to true to disable setup page menu option
var disableLdCfg = true;
var topBarCenterText = "K2PTH Dashboard";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    [
      "Radar CONUS",
      "Radar Small"
    ],
    "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "LOCAL RADAR (inverted)",
    "invert|https://radar.weather.gov/ridge/standard/KDIX_loop.gif"
  ],
  [
    "NOAA D-RAP (inverted)",
    "invert|https://s.w-x.co/staticmaps/wu/wxtype/county_loc/bgm/animate.png"
  ],
  [
    "National Weather",
    "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
  ],
  [
    "LIGHTNING LOCAL",
    "https://map.blitzortung.org/#9.48/40.7874/-74.5034"
  ],
  [
    "",
    "iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=88652288&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit"
  ],
  [
    "",
    "iframe|cam-beverwyckeast.html",
    "iframe|cam-beverwyckwest.html",
    "iframe|cam-rt10-rt53.html"
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php"
  ],
  [
    "Radio Propagation",
    "https://www.tvcomm.co.uk/g7izu/Autosave/ATL_HF10_AutoSave.JPG"
  ],
  [
    "Grey Line",
    "https://www.timeanddate.com/scripts/sunmap.php?iso=now"
  ],
  [
    "10m Propagation",
    "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  10000,
  10000,
  30000,
  30000,
  10000,
  30000,
  30000,
  30000,
  30000,
  15000,
  30000,
  30000
];

// CUT END
