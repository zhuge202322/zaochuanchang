export type Category = {
  slug: string;
  label: string;
  shortLabel: string;
  eyebrow: string;
  intro: string;
  icon: "gauge" | "level" | "valve" | "safety" | "control";
  image: string;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  model: string;
  image: string;
  gallery?: string[];
  summary: string;
  tags: string[];
  applications: string[];
  specs: Array<{ label: string; value: string }>;
};

export type Solution = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  checkpoints: string[];
  productSlugs: string[];
};

export const categories: Category[] = [
  {
    slug: "pressure-temperature",
    label: "Pressure & Temperature Instruments",
    shortLabel: "Pressure / Temperature",
    eyebrow: "Pump room, engine room, hydraulic lines",
    intro:
      "Dial gauges, transmitters, controllers and thermometers for pressure and temperature points across marine machinery spaces.",
    icon: "gauge",
    image: "/images/products/product-01.jpg",
  },
  {
    slug: "level-measurement",
    label: "Level Measurement & Control",
    shortLabel: "Level Control",
    eyebrow: "Tank, ballast, fuel and service water systems",
    intro:
      "Visual gauges, magnetic float gauges, float controllers and level transmitters built around vessel tank monitoring work.",
    icon: "level",
    image: "/images/products/product-24-a.jpg",
  },
  {
    slug: "valves-actuators",
    label: "Valves & Actuators",
    shortLabel: "Valves",
    eyebrow: "Deck, pipeline and remote valve stations",
    intro:
      "Electric, pneumatic and hydraulic valve products for shipboard pipeline control and remote operation assemblies.",
    icon: "valve",
    image: "/images/products/product-34-a.jpg",
  },
  {
    slug: "detection-safety",
    label: "Detection, Flow & Safety",
    shortLabel: "Detection",
    eyebrow: "Flow, door state, oil pollution and field junctions",
    intro:
      "Specialized sensors and safety accessories used around pipe routes, equipment rooms and protected control points.",
    icon: "safety",
    image: "/images/products/product-44.jpg",
  },
  {
    slug: "control-alarm",
    label: "Control & Alarm Systems",
    shortLabel: "Control Systems",
    eyebrow: "Cabinets, panels and alarm monitoring",
    intro:
      "Integrated valve remote control, level telemetry and monitoring alarm cabinets for project based marine automation.",
    icon: "control",
    image: "/images/products/product-46-a.jpg",
  },
];

const sharedMarineSpecs = [
  { label: "Service", value: "Marine machinery, tank or pipeline duty" },
  { label: "Build", value: "Project configured body, wetted part and connection" },
  { label: "Documentation", value: "Catalog model, photo confirmation and RFQ checklist" },
];

export const products: Product[] = [
  {
    slug: "vibration-proof-pressure-gauge",
    category: "pressure-temperature",
    name: "Vibration Proof Pressure Gauge",
    model: "YC-100-N radial, rimless",
    image: "/images/products/product-01.jpg",
    summary:
      "A marine pressure gauge for local visual pressure reading on pumps, filters, lubricating oil and cooling water lines.",
    tags: ["Dial reading", "Radial mount", "Marine pressure"],
    applications: ["Pump discharge", "Fuel and lube oil service", "Cooling water branch lines"],
    specs: [
      { label: "Display", value: "Analog dial with dual scale face" },
      { label: "Mounting", value: "Radial bottom connection" },
      { label: "Use case", value: "Local inspection point where vibration resistance matters" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "radial-bimetal-thermometer",
    category: "pressure-temperature",
    name: "Radial Bimetal Thermometer",
    model: "WSS-411-C",
    image: "/images/products/product-03.jpg",
    summary:
      "A radial temperature indicator for pipe mounted temperature points where direct mechanical display is preferred.",
    tags: ["Bimetal", "Radial stem", "Local display"],
    applications: ["Cooling water lines", "Oil temperature points", "Auxiliary equipment"],
    specs: [
      { label: "Display", value: "Local analog temperature dial" },
      { label: "Installation", value: "Radial stem installation" },
      { label: "Selection", value: "Stem length and connection confirmed by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "axial-bimetal-thermometer",
    category: "pressure-temperature",
    name: "Axial Bimetal Thermometer",
    model: "WSS-301-C",
    image: "/images/products/product-04.jpg",
    summary:
      "An axial bimetal thermometer for compact sight lines and equipment panels with straight insertion geometry.",
    tags: ["Bimetal", "Axial stem", "Compact panel"],
    applications: ["Equipment skids", "Pipe branches", "Thermal inspection points"],
    specs: [
      { label: "Display", value: "Analog dial with axial probe" },
      { label: "Installation", value: "Straight insertion mount" },
      { label: "Selection", value: "Probe length, thread and range by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "remote-pressure-thermometer",
    category: "pressure-temperature",
    name: "Pressure Type Remote Thermometer",
    model: "WTY-421-C remote type",
    image: "/images/products/product-05.jpg",
    summary:
      "A remote reading thermometer assembly for temperature points that need separated sensing and indication positions.",
    tags: ["Remote readout", "Capillary type", "Temperature"],
    applications: ["Engine room panels", "Restricted access pipes", "Auxiliary machinery"],
    specs: [
      { label: "Reading", value: "Remote mechanical indication" },
      { label: "Interface", value: "Capillary sensing assembly" },
      { label: "Fit", value: "Good for separated sensor and operator sight line" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "metal-case-thermometer-wlg-11",
    category: "pressure-temperature",
    name: "Metal Case Thermometer",
    model: "WLG-11-C",
    image: "/images/products/product-06.jpg",
    summary:
      "A protected metal case thermometer for basic marine temperature monitoring points.",
    tags: ["Metal case", "Rugged display", "Temperature"],
    applications: ["General pipe temperature", "Service water systems", "Inspection stations"],
    specs: [
      { label: "Housing", value: "Metal protected body" },
      { label: "Reading", value: "Direct local indication" },
      { label: "Selection", value: "Range and connection matched to vessel position" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "metal-case-thermometer-wlg-421",
    category: "pressure-temperature",
    name: "Metal Case Thermometer",
    model: "WLG-421-C",
    image: "/images/products/product-07.jpg",
    summary:
      "A marine thermometer variant for project positions that need a protected visual temperature device.",
    tags: ["Metal case", "Pipe mount", "Marine spare"],
    applications: ["Ship repair", "Newbuild installation", "Thermal monitoring"],
    specs: [
      { label: "Body", value: "Project configured metal case" },
      { label: "Reading", value: "Local temperature display" },
      { label: "Supply", value: "Matched by model, range and connection photo" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "metal-case-thermometer-wlg-422",
    category: "pressure-temperature",
    name: "Metal Case Thermometer",
    model: "WLG-422-C",
    image: "/images/products/product-08.jpg",
    summary:
      "A companion WLG series thermometer for consistent replacement or batch supply across vessel systems.",
    tags: ["WLG series", "Replacement", "Temperature"],
    applications: ["Retrofit projects", "Batch spare supply", "Pipe temperature points"],
    specs: [
      { label: "Series", value: "WLG marine thermometer family" },
      { label: "Confirmation", value: "Old part photo, model and range recommended" },
      { label: "Use", value: "Panel or pipe local reading by configuration" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "digital-pressure-transmitter-yszk-01g-c-d",
    category: "pressure-temperature",
    name: "Pressure Transmitter With Display",
    model: "YSZK-01G-C-D",
    image: "/images/products/product-12.jpg",
    summary:
      "A pressure transmitter with local display for control panels and field points that need signal output plus quick visual verification.",
    tags: ["Display", "Transmitter", "Signal output"],
    applications: ["Hydraulic circuits", "Pump monitoring", "Cabinet feedback loops"],
    specs: [
      { label: "Output", value: "Electrical pressure signal configured by order" },
      { label: "Display", value: "Integrated local readout" },
      { label: "Connection", value: "Thread and wiring connection confirmed by RFQ" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "compact-pressure-transmitter-yszk-01g-c",
    category: "pressure-temperature",
    name: "Compact Pressure Transmitter",
    model: "YSZK-01G-C",
    image: "/images/products/product-13-a.jpg",
    gallery: [
      "/images/products/product-13-a.jpg",
      "/images/products/product-13-b.jpg",
      "/images/products/product-13-c.jpg",
      "/images/products/product-13-d.jpg",
    ],
    summary:
      "A compact pressure transmitter series for shipboard pressure monitoring and automation signal collection.",
    tags: ["Compact body", "Pressure signal", "Stainless interface"],
    applications: ["Remote pressure monitoring", "Alarm systems", "Hydraulic units"],
    specs: [
      { label: "Series", value: "YSZK pressure transmitter family" },
      { label: "Signal", value: "Analog or project specified output" },
      { label: "Fit check", value: "Confirm range, thread, cable and working medium" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "high-temperature-pressure-transmitter",
    category: "pressure-temperature",
    name: "High Temperature Pressure Transmitter",
    model: "YSZK-01G-C high temperature type",
    image: "/images/products/product-14.jpg",
    summary:
      "A high temperature variant for pressure measurement points where the medium or environment runs hotter than standard positions.",
    tags: ["High temperature", "Pressure signal", "Project fit"],
    applications: ["Hot oil lines", "Engine room equipment", "Special process branches"],
    specs: [
      { label: "Variant", value: "High temperature pressure transmitter" },
      { label: "Selection", value: "Temperature, pressure range and media confirmed before supply" },
      { label: "Output", value: "Configured signal for monitoring or alarm system" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "differential-pressure-transmitter",
    category: "pressure-temperature",
    name: "Differential Pressure Transmitter",
    model: "Project configured",
    image: "/images/products/product-17.jpg",
    summary:
      "A differential pressure transmitter for monitoring filters, pipelines and equipment states through pressure difference.",
    tags: ["Differential pressure", "Filter monitoring", "Signal"],
    applications: ["Filter clogging indication", "Pump line diagnostics", "Process monitoring"],
    specs: [
      { label: "Measurement", value: "Pressure difference between two points" },
      { label: "Connection", value: "Dual pressure interfaces by installation" },
      { label: "Output", value: "Control or alarm signal by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "pressure-controller-ywk-50-c",
    category: "pressure-temperature",
    name: "Pressure Controller",
    model: "YWK-50-C",
    image: "/images/products/product-18.jpg",
    summary:
      "A pressure controller for switching and threshold based control in shipboard machinery and auxiliary systems.",
    tags: ["Pressure switch", "Control point", "Threshold"],
    applications: ["Pump protection", "Alarm interlock", "Hydraulic control"],
    specs: [
      { label: "Function", value: "Pressure threshold control" },
      { label: "Integration", value: "Wired into alarm, pump or cabinet circuit" },
      { label: "Set point", value: "Confirmed by application requirement" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "temperature-sensor-wzpk-23r-c",
    category: "pressure-temperature",
    name: "Temperature Sensor",
    model: "WZPK-23R-C",
    image: "/images/products/product-19.jpg",
    summary:
      "A temperature sensor assembly for electrical temperature feedback in marine monitoring and control systems.",
    tags: ["Electrical sensor", "Temperature feedback", "Probe"],
    applications: ["Engine room automation", "Tank heating control", "Equipment protection"],
    specs: [
      { label: "Sensing", value: "Electrical temperature sensing assembly" },
      { label: "Mounting", value: "Probe length and process connection by project" },
      { label: "Signal", value: "Matched to cabinet or monitoring device requirement" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "pressure-type-level-transmitter",
    category: "level-measurement",
    name: "Pressure Type Level Transmitter",
    model: "YSZK-01L",
    image: "/images/products/product-15.jpg",
    summary:
      "A pressure based level transmitter for tank level signal collection in ballast, fuel, water and service tanks.",
    tags: ["Tank level", "Pressure type", "Telemetry"],
    applications: ["Ballast tanks", "Fuel oil tanks", "Fresh water tanks"],
    specs: [
      { label: "Measurement", value: "Hydrostatic pressure based tank level" },
      { label: "Signal", value: "Electrical output for display or remote telemetry" },
      { label: "Selection", value: "Tank height, medium and installation point confirmed" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "side-mounted-level-transmitter",
    category: "level-measurement",
    name: "Side Mounted Level Transmitter",
    model: "YSZK-01L side mounted",
    image: "/images/products/product-16.jpg",
    summary:
      "A side mounted pressure type level transmitter for tanks where access or installation geometry favors side entry.",
    tags: ["Side mount", "Tank level", "Signal"],
    applications: ["Service tanks", "Retrofit tanks", "Compact machinery spaces"],
    specs: [
      { label: "Installation", value: "Side mounted tank connection" },
      { label: "Measurement", value: "Pressure based level feedback" },
      { label: "Fit check", value: "Nozzle position, medium and range confirmed with drawing" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "glass-plate-level-gauge",
    category: "level-measurement",
    name: "Glass Plate Level Gauge",
    model: "ULB-3A",
    image: "/images/products/product-22.jpg",
    summary:
      "A direct visual glass plate level gauge for robust local tank level observation on marine equipment.",
    tags: ["Visual level", "Glass plate", "Tank side"],
    applications: ["Fuel service tanks", "Oil tanks", "Water tanks"],
    specs: [
      { label: "Reading", value: "Direct visual tank level indication" },
      { label: "Mounting", value: "Side mounted gauge assembly" },
      { label: "Selection", value: "Center distance and connection standard by tank" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "welded-glass-tube-level-gauge",
    category: "level-measurement",
    name: "Welded Glass Tube Level Gauge",
    model: "ULG welded type",
    image: "/images/products/product-23.jpg",
    summary:
      "A welded type glass tube level gauge for simple direct level viewing on suitable marine tanks and equipment.",
    tags: ["Glass tube", "Welded type", "Visual level"],
    applications: ["Small tanks", "Service equipment", "Local inspection points"],
    specs: [
      { label: "Reading", value: "Direct glass tube visual indication" },
      { label: "Mounting", value: "Welded type connection arrangement" },
      { label: "Confirmation", value: "Medium, pressure and visible range checked before order" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "magnetic-float-level-gauge",
    category: "level-measurement",
    name: "Magnetic Float Level Gauge",
    model: "UHZ-511",
    image: "/images/products/product-24-a.jpg",
    gallery: ["/images/products/product-24-a.jpg", "/images/products/product-24-b.jpg"],
    summary:
      "A magnetic float level gauge with external indication for tank level visibility without direct glass exposure to the medium.",
    tags: ["Magnetic float", "Tank level", "External indication"],
    applications: ["Fuel and oil tanks", "Ballast and water tanks", "Remote alarm options"],
    specs: [
      { label: "Indication", value: "Magnetic float driven external scale" },
      { label: "Options", value: "Alarm switch or signal accessories available by project" },
      { label: "Selection", value: "Measuring length, density, connection and medium required" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "magnetic-level-alarm-switch",
    category: "level-measurement",
    name: "Magnetic Level Gauge Alarm Switch",
    model: "Accessory for magnetic float gauges",
    image: "/images/products/product-25-a.jpg",
    gallery: ["/images/products/product-25-a.jpg", "/images/products/product-25-b.jpg"],
    summary:
      "An alarm switch accessory that adds level switching output to magnetic float level gauge assemblies.",
    tags: ["Alarm switch", "Magnetic gauge", "Level signal"],
    applications: ["High level alarm", "Low level alarm", "Tank protection"],
    specs: [
      { label: "Function", value: "Point level switching from magnetic gauge position" },
      { label: "Mounting", value: "Installed on compatible magnetic level gauge rail" },
      { label: "Output", value: "Switch signal configured by control circuit" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "float-level-controller-uqk-01-c",
    category: "level-measurement",
    name: "Float Level Controller",
    model: "UQK-01-C",
    image: "/images/products/product-26.jpg",
    summary:
      "A float level controller for point level control and alarm duties in shipboard tanks.",
    tags: ["Float switch", "Point level", "Tank alarm"],
    applications: ["Bilge systems", "Service tanks", "Pump start stop logic"],
    specs: [
      { label: "Function", value: "Float driven level switch control" },
      { label: "Mounting", value: "Tank side or top arrangement by model" },
      { label: "Set point", value: "Installation height defines switching point" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "bent-rod-float-level-controller",
    category: "level-measurement",
    name: "Bent Rod Float Level Controller",
    model: "UQK-01-C bent rod",
    image: "/images/products/product-27.jpg",
    summary:
      "A bent rod float controller variant for tank geometry where the float travel needs offset positioning.",
    tags: ["Bent rod", "Float switch", "Custom geometry"],
    applications: ["Restricted tanks", "Retrofit nozzles", "Point alarm"],
    specs: [
      { label: "Variant", value: "Bent rod float arm configuration" },
      { label: "Use", value: "Offset switching point within constrained tank space" },
      { label: "Confirmation", value: "Tank drawing or sample photo recommended" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "float-level-controller-uqk-02-c",
    category: "level-measurement",
    name: "Float Level Controller",
    model: "UQK-02-C",
    image: "/images/products/product-28.jpg",
    summary:
      "A UQK-02-C float controller variant for level switching requirements across vessel tank systems.",
    tags: ["UQK series", "Level control", "Switch"],
    applications: ["Tank alarm", "Pump protection", "Liquid level interlock"],
    specs: [
      { label: "Function", value: "Float operated switch control" },
      { label: "Circuit", value: "Matched to alarm or pump control circuit" },
      { label: "Selection", value: "Medium, set point and mounting position by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "float-level-controller-uqk-652-c",
    category: "level-measurement",
    name: "Float Level Controller",
    model: "UQK-652-C",
    image: "/images/products/product-29.jpg",
    summary:
      "A UQK-652-C float level controller for robust tank level switching and marine replacement demand.",
    tags: ["UQK-652-C", "Marine tank", "Switch control"],
    applications: ["Replacement projects", "Tank level alarm", "Auxiliary systems"],
    specs: [
      { label: "Series", value: "UQK-652-C float controller" },
      { label: "Output", value: "Switch signal for control or alarm point" },
      { label: "Fit check", value: "Existing model plate and installation photo recommended" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "square-level-gauge",
    category: "level-measurement",
    name: "Square Level Gauge",
    model: "Project configured",
    image: "/images/products/product-31.jpg",
    summary:
      "A square body level gauge for visual monitoring positions where the enclosure format suits the equipment layout.",
    tags: ["Visual level", "Square body", "Local gauge"],
    applications: ["Equipment tanks", "Skid packages", "Local monitoring"],
    specs: [
      { label: "Format", value: "Square level gauge body" },
      { label: "Reading", value: "Local visual level indication" },
      { label: "Selection", value: "Connection, range and medium confirmed before order" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "marine-level-measurement-controller",
    category: "level-measurement",
    name: "Marine Level Measurement Controller",
    model: "UHK-01A",
    image: "/images/products/product-32.jpg",
    summary:
      "A marine level measurement controller for collecting, displaying and controlling level data in tank monitoring work.",
    tags: ["Controller", "Tank monitoring", "Level signal"],
    applications: ["Level telemetry", "Cabinet integration", "Alarm system input"],
    specs: [
      { label: "Function", value: "Level measurement and control interface" },
      { label: "Integration", value: "Works with project level sensors and cabinets" },
      { label: "Configuration", value: "Channel count and signal type by system requirement" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "tuning-fork-level-switch",
    category: "level-measurement",
    name: "Tuning Fork Level Switch",
    model: "Project configured",
    image: "/images/products/product-37-a.jpg",
    gallery: [
      "/images/products/product-37-a.jpg",
      "/images/products/product-37-b.jpg",
      "/images/products/product-37-c.jpg",
      "/images/products/product-37-d.jpg",
      "/images/products/product-37-e.jpg",
    ],
    summary:
      "A tuning fork level switch for point level detection where reliable presence or absence sensing is required.",
    tags: ["Point level", "Fork switch", "Alarm"],
    applications: ["Overflow protection", "Dry run protection", "Process level point"],
    specs: [
      { label: "Detection", value: "Point level presence detection" },
      { label: "Output", value: "Switch output for alarm or interlock circuit" },
      { label: "Selection", value: "Medium, temperature, connection and power confirmed" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "electric-flanged-ball-valve",
    category: "valves-actuators",
    name: "Electric Flanged Ball Valve",
    model: "Project configured",
    image: "/images/products/product-33.jpg",
    summary:
      "An electric actuated flanged ball valve for controlled open close service on shipboard pipelines.",
    tags: ["Electric actuator", "Flanged valve", "Pipeline control"],
    applications: ["Remote valve stations", "Fuel and service lines", "Automation cabinets"],
    specs: [
      { label: "Operation", value: "Electric actuator open close control" },
      { label: "Connection", value: "Flanged pipeline interface" },
      { label: "Selection", value: "Valve size, voltage, feedback and medium by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "pneumatic-butterfly-valve",
    category: "valves-actuators",
    name: "Pneumatic Butterfly Valve",
    model: "Project configured",
    image: "/images/products/product-34-a.jpg",
    gallery: ["/images/products/product-34-a.jpg", "/images/products/product-34-b.jpg"],
    summary:
      "A pneumatic butterfly valve assembly for fast remote pipeline control where compressed air actuation is available.",
    tags: ["Pneumatic", "Butterfly valve", "Remote control"],
    applications: ["Ballast pipelines", "Deck service lines", "Tank transfer systems"],
    specs: [
      { label: "Actuation", value: "Pneumatic actuator" },
      { label: "Valve type", value: "Butterfly valve assembly" },
      { label: "Selection", value: "Size, pressure class, actuator type and feedback by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "hydraulic-butterfly-valve",
    category: "valves-actuators",
    name: "Hydraulic Butterfly Valve",
    model: "Project configured",
    image: "/images/products/product-35-a.jpg",
    gallery: [
      "/images/products/product-35-a.jpg",
      "/images/products/product-35-b.jpg",
      "/images/products/product-35-c.jpg",
    ],
    summary:
      "A hydraulic butterfly valve assembly for heavy duty remote valve operation in marine pipeline systems.",
    tags: ["Hydraulic", "Butterfly valve", "Heavy duty"],
    applications: ["Cargo and ballast systems", "Remote valve control", "Large pipeline duty"],
    specs: [
      { label: "Actuation", value: "Hydraulic actuator" },
      { label: "Valve type", value: "Butterfly valve assembly" },
      { label: "Control", value: "Matched to hydraulic power and control cabinet design" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "deck-valve",
    category: "valves-actuators",
    name: "Deck Valve",
    model: "Project configured",
    image: "/images/products/product-39.jpg",
    summary:
      "A deck valve product for exposed marine service where mechanical robustness and correct material selection are important.",
    tags: ["Deck service", "Marine valve", "Pipeline"],
    applications: ["Deck pipelines", "Service outlets", "Replacement supply"],
    specs: [
      { label: "Duty", value: "Deck mounted marine pipeline service" },
      { label: "Selection", value: "Valve type, size, material and connection confirmed" },
      { label: "Supply", value: "Newbuild or replacement order matching" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "door-switch-sensor",
    category: "detection-safety",
    name: "Door Switch Sensor",
    model: "MKC-5",
    image: "/images/products/product-21.jpg",
    summary:
      "A door switch sensor for state detection around access doors, protected rooms and equipment enclosures.",
    tags: ["Door state", "Switch sensor", "Safety input"],
    applications: ["Watertight doors", "Equipment cabinets", "Alarm inputs"],
    specs: [
      { label: "Detection", value: "Door or cover position state" },
      { label: "Output", value: "Switch signal into monitoring system" },
      { label: "Mounting", value: "Matched to door frame or enclosure geometry" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "double-check-detector",
    category: "detection-safety",
    name: "Double Check Detector",
    model: "Project configured",
    image: "/images/products/product-36-a.jpg",
    gallery: [
      "/images/products/product-36-a.jpg",
      "/images/products/product-36-b.jpg",
      "/images/products/product-36-c.jpg",
    ],
    summary:
      "A detection component for shipboard safety and monitoring circuits that require confirmed dual state feedback.",
    tags: ["Detection", "Safety circuit", "Field component"],
    applications: ["Pipeline protection", "Safety interlock", "Monitoring cabinet input"],
    specs: [
      { label: "Function", value: "Dual check detection for field state confirmation" },
      { label: "Integration", value: "Connected to local or central monitoring system" },
      { label: "Selection", value: "Working condition and signal interface confirmed" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "oval-gear-flowmeter",
    category: "detection-safety",
    name: "Oval Gear Flowmeter",
    model: "Project configured",
    image: "/images/products/product-38.jpg",
    summary:
      "An oval gear flowmeter for liquid flow measurement on suitable marine process and service lines.",
    tags: ["Flowmeter", "Oval gear", "Liquid flow"],
    applications: ["Fuel transfer", "Lubrication systems", "Service liquid measurement"],
    specs: [
      { label: "Measurement", value: "Positive displacement oval gear flow measurement" },
      { label: "Medium", value: "Liquid service matched to viscosity and cleanliness" },
      { label: "Selection", value: "Flow range, connection and signal output by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "pipeline-oil-content-detector",
    category: "detection-safety",
    name: "Pipeline Oil Content Detector",
    model: "CP-63A",
    image: "/images/products/product-44.jpg",
    summary:
      "A pipeline oil pollution detection sensor for monitoring oil presence in shipboard pipe systems.",
    tags: ["Oil detection", "Pipeline sensor", "Safety monitoring"],
    applications: ["Bilge and discharge monitoring", "Pipeline safety", "Alarm systems"],
    specs: [
      { label: "Detection", value: "Oil pollution or oil presence monitoring" },
      { label: "Mounting", value: "Pipeline installation by sensor configuration" },
      { label: "Integration", value: "Alarm signal connected to monitoring device" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "explosion-proof-button-junction-box",
    category: "detection-safety",
    name: "Explosion Proof Button Junction Box",
    model: "Project configured",
    image: "/images/products/product-45.jpg",
    summary:
      "A field button junction box for protected control points and hazardous area adjacent marine installations.",
    tags: ["Explosion proof", "Button box", "Field control"],
    applications: ["Local stop start point", "Deck control station", "Protected control circuit"],
    specs: [
      { label: "Function", value: "Local button and wiring termination" },
      { label: "Enclosure", value: "Protected junction box format" },
      { label: "Selection", value: "Button count, marking and cable entry by project" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "valve-remote-level-telemetry-system",
    category: "control-alarm",
    name: "Valve Remote & Level Telemetry System",
    model: "Project configured cabinet",
    image: "/images/products/product-46-a.jpg",
    gallery: [
      "/images/products/product-46-a.jpg",
      "/images/products/product-46-b.jpg",
      "/images/products/product-46-c.jpg",
    ],
    summary:
      "An integrated cabinet and console system for valve remote control and tank level telemetry on marine projects.",
    tags: ["Control cabinet", "Valve remote", "Level telemetry"],
    applications: ["Ballast systems", "Cargo service systems", "Central monitoring rooms"],
    specs: [
      { label: "System", value: "Valve remote control plus level telemetry interface" },
      { label: "HMI", value: "Panel layout and display pages configured by project" },
      { label: "Inputs", value: "Valve feedback, level sensors and alarm points by drawing" },
      ...sharedMarineSpecs,
    ],
  },
  {
    slug: "monitoring-alarm-device",
    category: "control-alarm",
    name: "Monitoring & Alarm Device",
    model: "Project configured cabinet",
    image: "/images/products/product-47-a.jpg",
    gallery: [
      "/images/products/product-47-a.jpg",
      "/images/products/product-47-b.jpg",
      "/images/products/product-47-c.jpg",
    ],
    summary:
      "A monitoring and alarm device cabinet for collecting field signals and presenting clear operating state to the vessel crew.",
    tags: ["Alarm panel", "Monitoring", "Cabinet"],
    applications: ["Machinery alarm", "Tank level alarm", "Safety monitoring"],
    specs: [
      { label: "Function", value: "Signal collection, display and alarm handling" },
      { label: "Interface", value: "HMI, mimic panel or indicator layout by system" },
      { label: "Configuration", value: "Point list and logic confirmed with project drawings" },
      ...sharedMarineSpecs,
    ],
  },
];

export const solutions: Solution[] = [
  {
    slug: "tank-level-monitoring",
    title: "Tank Level Monitoring",
    subtitle: "Visual gauges, float controllers, pressure type transmitters and telemetry cabinets for vessel tank level work.",
    image: "/images/factory/factory-19.jpg",
    checkpoints: [
      "Local visual level plus remote level signal can be combined",
      "Tank height, medium, density and nozzle position drive product selection",
      "Alarm switches and controllers can be supplied with matching cabinet interface",
    ],
    productSlugs: [
      "magnetic-float-level-gauge",
      "pressure-type-level-transmitter",
      "float-level-controller-uqk-01-c",
      "marine-level-measurement-controller",
    ],
  },
  {
    slug: "valve-remote-control",
    title: "Valve Remote Control",
    subtitle: "Electric, pneumatic and hydraulic valve packages connected to project specific control panels and feedback loops.",
    image: "/images/products/product-46-b.jpg",
    checkpoints: [
      "Actuator choice follows vessel air, hydraulic or electrical supply",
      "Valve status feedback can be brought into the panel or monitoring device",
      "Cabinet face layout can follow project drawings and crew operating habits",
    ],
    productSlugs: [
      "pneumatic-butterfly-valve",
      "hydraulic-butterfly-valve",
      "electric-flanged-ball-valve",
      "valve-remote-level-telemetry-system",
    ],
  },
  {
    slug: "machinery-pressure-temperature",
    title: "Machinery Pressure & Temperature Monitoring",
    subtitle: "A complete field layer of gauges, transmitters, thermometers and controllers for engine room equipment.",
    image: "/images/factory/factory-09.jpg",
    checkpoints: [
      "Local indication is paired with electrical feedback where control rooms need signals",
      "Replacement work can start from model plate and existing part photos",
      "Pressure, temperature, medium and connection data keep selection efficient",
    ],
    productSlugs: [
      "vibration-proof-pressure-gauge",
      "compact-pressure-transmitter-yszk-01g-c",
      "temperature-sensor-wzpk-23r-c",
      "pressure-controller-ywk-50-c",
    ],
  },
  {
    slug: "pipeline-detection",
    title: "Pipeline Detection & Flow Safety",
    subtitle: "Oil content detection, flow measurement, door state and safety field devices for protected marine routes.",
    image: "/images/products/product-44.jpg",
    checkpoints: [
      "Detection devices are selected by medium, pipe route and signal circuit",
      "Alarm signals can be sent to local boxes or central monitoring cabinets",
      "Flow and pollution points can be documented for yard approval packages",
    ],
    productSlugs: [
      "pipeline-oil-content-detector",
      "oval-gear-flowmeter",
      "door-switch-sensor",
      "explosion-proof-button-junction-box",
    ],
  },
];

export const factoryGallery = [
  {
    image: "/images/factory/factory-01.jpg",
    title: "Workshop bay with overhead crane",
    text: "A bright assembly floor for cabinets, field instruments and project batches.",
  },
  {
    image: "/images/factory/factory-06.jpg",
    title: "Jiabo brand wall",
    text: "Taizhou Jiabo Instrument Technology Co., Ltd. factory identity.",
  },
  {
    image: "/images/factory/factory-09.jpg",
    title: "Instrument assembly area",
    text: "Benches, storage racks and technicians working through product assembly.",
  },
  {
    image: "/images/factory/factory-14.jpg",
    title: "Inspection test room",
    text: "A separated testing room for instrument checks and project verification.",
  },
  {
    image: "/images/factory/factory-19.jpg",
    title: "Level and alarm test setup",
    text: "Control console and level assemblies used for system inspection.",
  },
  {
    image: "/images/factory/factory-23.jpg",
    title: "Finished product handling",
    text: "Prepared cabinets and assemblies staged for project delivery.",
  },
];

export const processSteps = [
  "Confirm vessel position, medium, signal and connection",
  "Match existing model or propose a project configuration",
  "Assemble instruments, valves or cabinet interfaces",
  "Run inspection tests and visual checks before packing",
  "Prepare catalog, photos and RFQ records for export communication",
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductByRoute(category: string, slug: string) {
  return products.find((product) => product.category === category && product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, limit);
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
}
