/* ============================================================================
   Single source of truth. Product, solution and industry sub-pages are all
   generated from these arrays — adding one is an object, never a route file.
   Taxonomy and homepage copy follow the live tsecond.ai site.
   ========================================================================== */

export const CATEGORIES = [
  { slug: "edge-hpc", label: "Edge HPC" },
  { slug: "edge-ai", label: "Edge AI" },
  { slug: "edge-storage", label: "Edge Storage" },
  { slug: "drives", label: "Drives" },
  { slug: "data-center", label: "Data Center" },
  { slug: "data-movement", label: "Data Movement" },
  { slug: "software", label: "Software" },
];

export const PRODUCTS = [
  {
    slug: "bryck-turbo-hpc",
    name: "BRYCK Turbo HPC",
    cat: "edge-hpc",
    pn: "TS-TRB-HPC",
    rev: "A",
    image: "/publicOPT/BRYCK_Edge_HPC.webp",
    datasheet: { in: "/Tsecond_BRYCK HPC_Datasheet_in.pdf", us: "/Tsecond_BRYCK HPC_Datasheet_us.pdf", default: "/Tsecond_BRYCK Turbo HPC_Datasheet.pdf" },
    tagline: "Extreme sustained throughput where the bottleneck is the bus, not the model.",
    summary:
      "Built for workloads that saturate storage long before they saturate compute — wide-area imagery, hyperspectral and high-rate RF collection replayed against successive model versions.",
    reads: [["High", "rate", "Ingest profile"], ["Gen4", "", "PCIe fabric"], ["24/7", "", "Duty cycle"], ["PB", "", "Working set"]],
    specs: [
      ["Profile", "Throughput-optimised HPC node"],
      ["Fabric", "PCIe Gen4 across storage and accelerator lanes"],
      ["Working set", "Petabyte-scale, locally resident"],
      ["Duty cycle", "Continuous operation rated"],
      ["Encryption", "AES-256 at rest, at line rate"],
      ["Standards", "SOSA aligned"],
      ["Environmental", "MIL-STD-810 test record per unit"],
      ["Detail specs", "Configured against programme requirement"],
    ],
    uses: [
      "Hyperspectral and wide-area motion imagery exploitation",
      "High-rate RF collection and replay",
      "Model regression against archived mission data",
      "Ground station processing for satellite downlink",
    ],
  },
  {
    slug: "bryck-cube",
    name: "BRYCK CUBE",
    cat: "edge-hpc",
    pn: "TS-CUB-CELL",
    rev: "A",
    image: "/productsNewOPT/Bryck-Cube.webp",
    datasheet: { in: "/Tsecond_BRYCK CUBE_Datasheet_in.pdf", us: "/Tsecond_BRYCK CUBE_Datasheet_us.pdf", default: "/Tsecond_BRYCK-CUBE_datasheet.pdf" },
    tagline: "A deployable compute cell that ships as freight and starts as infrastructure.",
    summary:
      "The smallest unit of infrastructure that still behaves like a data hall. CUBE collapses compute, storage, power conditioning and thermal management into one transportable envelope.",
    reads: [["Self", "cont.", "Deployment"], ["Hours", "", "To operational"], ["PB", "", "Resident storage"], ["810", "MIL", "Environmental"]],
    specs: [
      ["Deployment", "Self-contained transportable compute cell"],
      ["Integration", "Compute, storage, power and thermal in one envelope"],
      ["Time to operational", "Hours from delivery, not weeks"],
      ["Storage", "Petabyte-scale resident capacity"],
      ["Power", "Generator or grid, wide input tolerance"],
      ["Environmental", "MIL-STD-810 test record per unit"],
      ["Standards", "SOSA aligned, CMOSS compatible"],
      ["Detail specs", "Configured against site survey"],
    ],
    uses: [
      "Standing up compute where no infrastructure exists",
      "Disaster response and humanitarian operations",
      "Temporary expansion of a fixed-site capability",
      "Sovereign processing enclaves under local jurisdiction",
    ],
  },
  {
    slug: "bryck-fxr",
    name: "BRYCK FXR",
    cat: "edge-ai",
    pn: "TS-FXR-RACK",
    rev: "B",
    image: "/productsNewOPT/BRYCK-FXR.png",
    datasheet: { in: "/Tsecond_BRYCK FXR_Datasheet_in.pdf", us: "/Tsecond_BRYCK FXR_Datasheet_us.pdf", default: "/Tsecond_BRYCK FXR_Datasheet.pdf" },
    tagline: "Rugged multi-accelerator inference for forward sites and mobile command posts.",
    summary:
      "For forward operating bases that need real compute density but cannot assume conditioned power, filtered air or a raised floor.",
    reads: [["Multi", "GPU", "Accelerators"], ["Rugged", "", "Chassis class"], ["SOSA", "", "Standards"], ["PB", "", "Attached storage"]],
    specs: [
      ["Compute", "Multi-accelerator configurations, mission dependent"],
      ["Storage", "Petabyte-scale attached BRYCK Block arrays"],
      ["Chassis", "Ruggedised rack, shock isolated"],
      ["Standards", "SOSA aligned, CMOSS compatible"],
      ["Power input", "Field generator tolerant, wide input range"],
      ["Cooling", "Filtered forced air, high-particulate rated"],
      ["Environmental", "MIL-STD-810 test record per unit"],
      ["Detail specs", "Configured against programme requirement"],
    ],
    uses: [
      "Model refinement and retraining at the forward edge",
      "Multi-sensor fusion across a distributed node mesh",
      "Command post analytics without reachback dependency",
      "Coalition data exchange under local policy control",
    ],
  },
  {
    slug: "bryck-mini",
    name: "BRYCK Mini",
    cat: "edge-ai",
    pn: "TS-MNI-SWAP",
    rev: "A",
    image: "/productsOPT/BRYCK-Mini.webp",
    datasheet: { in: "/Tsecond_BRYCK-Mini_datasheet_in.pdf", us: "/Tsecond_BRYCK-Mini_datasheet_us.pdf", default: "/Tsecond_BRYCK-Mini2_datasheet.pdf" },
    tagline: "Inference-first node for platforms with no size, weight or power to spare.",
    summary:
      "When the airframe budget is measured in watts, the model still has to run. Mini strips the platform down to its inference path and the storage that feeds it.",
    reads: [["AI", "", "Workload profile"], ["Low", "SWaP", "Design constraint"], ["TB", "", "Local retention"], ["DDIL", "", "Operating mode"]],
    specs: [
      ["Workload", "On-platform model execution and pre-processing"],
      ["Storage tier", "Terabyte-class local NVMe"],
      ["Connectivity", "Ethernet, serial, platform bus integration"],
      ["Encryption", "AES-256 at rest"],
      ["Thermal", "Conduction-cooled options for sealed enclosures"],
      ["Deployment", "UAS, UGV, maritime autonomy, dismounted kit"],
      ["Management", "Shared control plane with all BRYCK nodes"],
      ["Detail specs", "Released under NDA against mission profile"],
    ],
    uses: [
      "Onboard detection and classification for unmanned systems",
      "Sensor pre-processing before narrowband transmission",
      "Autonomy stacks requiring sub-second local decisions",
      "Full-fidelity capture retained for post-mission exploitation",
    ],
  },
  {
    slug: "bryck-micro-r",
    name: "BRYCK Micro-R",
    cat: "edge-ai",
    pn: "TS-MCR-RUG",
    rev: "A",
    image: "/productsOPT/BRYCK_Micro-R.webp",
    datasheet: { in: "/Tsecond_BRYCK Micro-R_Datasheet_in.pdf", us: "/Tsecond_BRYCK Micro-R_Datasheet_us.pdf", default: "/Tsecond_BRYCK Micro-R_Datasheet.pdf" },
    tagline: "The smallest ruggedised inference module in the family.",
    summary:
      "Where even Mini will not fit. Micro-R carries the inference path and a working buffer into wearable kit, small airframes and sensor pods.",
    reads: [["Micro", "", "Form factor"], ["Rugged", "", "Chassis class"], ["TB", "", "Working buffer"], ["DDIL", "", "Operating mode"]],
    specs: [
      ["Form factor", "Smallest ruggedised module in the family"],
      ["Workload", "Inference and sensor pre-processing"],
      ["Storage", "Working buffer, terabyte class"],
      ["Encryption", "AES-256 at rest"],
      ["Thermal", "Conduction-cooled, sealed"],
      ["Deployment", "Wearable kit, small airframes, sensor pods"],
      ["Management", "Shared control plane with all BRYCK nodes"],
      ["Detail specs", "Released under NDA against mission profile"],
    ],
    uses: [
      "Dismounted wearable compute",
      "Small unmanned airframes with hard weight limits",
      "Sensor pods and remote emplacements",
      "Edge pre-filtering ahead of a larger node",
    ],
  },
  {
    slug: "bryck",
    name: "BRYCK",
    cat: "edge-storage",
    pn: "TS-BRK-4U1B",
    rev: "C",
    image: "/publicOPT/Bryck.webp",
    datasheet: { default: "/Tsecond_BRYCK_datasheet.pdf" },
    tagline: "Petabyte-scale capture, processing and transport in a case one person carries.",
    summary:
      "The reference node. BRYCK ingests optical, RF, acoustic and telemetry feeds at line rate, writes them to encrypted NVMe, and runs mission models against that data without reaching back to anything.",
    reads: [["1", "PB", "NVMe capacity"], ["40", "GB/s", "Sustained access"], ["14", "lb", "Carry weight"], ["4U1B", "", "Tray architecture"]],
    specs: [
      ["Capacity", "Up to 1 PB usable NVMe"],
      ["Interface", "PCIe Gen4, Gen3 backward compatible"],
      ["Sustained throughput", "40 GB/s"],
      ["Encryption", "AES-256 at rest, enabled by default"],
      ["Cooling", "Redundant hot-swappable fan modules"],
      ["Power", "Redundant supply with DC field input"],
      ["Transport", "TSA-compliant carry profile"],
      ["Management", "REST API, web console, headless CLI"],
    ],
    uses: [
      "Air-gapped sovereign data transport between field nodes and command",
      "Flight test instrumentation offload and analytics",
      "Federal bulk data movement into government cloud regions",
      "Tamper-evident encrypted bridge across classification boundaries",
    ],
  },
  {
    slug: "bryck-block",
    name: "BRYCK Block",
    cat: "drives",
    pn: "TS-BLK-128U2 / TS-BLK-E",
    rev: "B",
    image: "/publicOPT/block-image.webp",
    secondaryImage: "/productsOPT/bryck-block-e.webp",
    logo: "/productsNewOPT/BRYCKBlock_Logo.webp",
    secondaryLogo: "/productsNewOPT/BRYCKBlock_E_Logo.webp",
    tagline: "World's first fault-tolerant 128TB U.2 SSD & PCIe Gen 5 enterprise storage.",
    summary:
      "The BRYCK Block family introduces two breakthrough U.2 NVMe storage architectures for mission-critical and tactical environments: BRYCK Block (U.2) with eight independently managed modular controllers for true fault tolerance and 128TB capacity, and BRYCK Block E engineered for extreme PCIe Gen 5x4 performance with up to 14,000 MB/s sequential throughput and 3,000,000 IOPS.",
    datasheet: {
      default: "/Tsecond_BRYCK-block2_datasheet.pdf",
      block: "/Tsecond_BRYCK-block2_datasheet.pdf",
      blockE: "/Tsecond_BRYCK_Block_E_Datasheet.pdf",
    },
    datasheets: [
      {
        label: "Download BRYCK Block Datasheet",
        badge: "Block U.2",
        file: "/Tsecond_BRYCK-block2_datasheet.pdf",
        model: "BRYCK Block (U.2)",
      },
      {
        label: "Download BRYCK Block E Datasheet",
        badge: "Block E Gen 5",
        file: "/Tsecond_BRYCK_Block_E_Datasheet.pdf",
        model: "BRYCK Block E",
      },
    ],
    reads: [
      ["128", "TB", "Max U.2 Capacity"],
      ["8", "", "Modular Controllers"],
      ["14", "GB/s", "Gen 5 Read Peak"],
      ["2", "", "Hardware Models"],
    ],
    models: [
      {
        id: "block-u2",
        name: "BRYCK Block (U.2)",
        fullName: "BRYCK Block U.2 Modular NVMe SSD",
        pn: "TS-BLK-128U2",
        rev: "B",
        logo: "/productsNewOPT/BRYCKBlock_Logo.webp",
        image: "/publicOPT/block-image.webp",
        datasheet: "/Tsecond_BRYCK-block2_datasheet.pdf",
        tagline: "World's first fault-tolerant 128TB U.2 SSD with 8 modular controllers.",
        summary:
          "Equipped with eight independently managed modular NVMe controllers within a single U.2 form factor, BRYCK Block U.2 eliminates single points of failure. Even if individual controllers fail, software-defined RAID-5/6 and erasure coding keep mission data intact and accessible in the harshest tactical environments.",
        badge: "Fault-Tolerant Modular Architecture",
        highlight: "8 Independent NVMe Controllers · 128TB Capacity · 25W Envelope",
        reads: [
          ["128", "TB", "Raw Capacity"],
          ["8", "", "Controllers"],
          ["25", "W", "Power Envelope"],
          ["99%", "", "Utilization"],
        ],
        specs: [
          ["Capacity", "64 TB, 128 TB"],
          ["Form Factor", "U.2"],
          ["Interface", "NVMe | PCIe Gen 4"],
          ["Architecture", "8 independent modular NVMe controllers"],
          ["Fault Tolerance", "Software-configurable RAID-5, RAID-6 and erasure coding"],
          ["Throughput", "Up to 20 GB/s burst, 3.5 GB/s sustained write"],
          ["Dimensions (WxHxT)", '2.75" x 3.95" x 0.60" (100.5mm x 69.85mm x 15mm)'],
          ["Encryption", "AES-256 (TCG Opal 2.0 compliant)"],
          ["Enclosure", "Metal Block Cabinet (Field-repairable)"],
          ["Power Consumption", "25W sustained envelope (max 64W)"],
          ["Operating Temperature", "0°C to 60°C"],
          ["Non Operating Temperature", "-40°C to 70°C"],
        ],
      },
      {
        id: "block-e",
        name: "BRYCK Block E",
        fullName: "BRYCK Block E Enterprise PCIe Gen 5 SSD",
        pn: "TS-BLK-E-GEN5",
        rev: "A",
        logo: "/productsNewOPT/BRYCKBlock_E_Logo.webp",
        image: "/productsOPT/bryck-block-e.webp",
        datasheet: "/Tsecond_BRYCK_Block_E_Datasheet.pdf",
        tagline: "PCIe Gen 5x4 enterprise U.2 storage reaching 14,000 MB/s and 3M IOPS.",
        summary:
          "BRYCK Block E delivers extreme enterprise performance with 3D TLC flash and PCIe Gen 5x4 architecture. Engineered for high-throughput AI ingestion and massive random I/O loads, it delivers up to 14,000 MB/s sequential read, 3,000,000 IOPS, 1.3 DWPD endurance, and integrated hardware power loss protection.",
        badge: "PCIe Gen 5 Enterprise Performance",
        highlight: "14,000 MB/s Read · 3,000,000 IOPS · PCIe Gen 5x4 Hot-Plug",
        reads: [
          ["32", "TB", "Capacity Tier"],
          ["14", "GB/s", "Seq Read Speed"],
          ["3.0", "M", "Random IOPS"],
          ["Gen 5", "x4", "Interface"],
        ],
        specs: [
          ["Capacity", "32TB, 16TB, 8TB"],
          ["Flash Type", "3D TLC"],
          ["Form Factor", "U.2"],
          ["Interface & Compliance", "PCIe Gen 5x4 (Hot-Plug Capable)"],
          ["Endurance", "1.3 DWPD (@ 3 Years)"],
          ["Performance (Sequential)", "Read up to 14,000 MB/s · Write up to 9,000 MB/s"],
          ["Performance (Random 4K)", "Read up to 3,000,000 IOPS · Write up to 800,000 IOPS"],
          ["Dimensions", "100.5mm x 69.85mm x 14.8mm"],
          ["Physical Insertion Cycles", "5,000 Cycles"],
          ["Security", "NVM Format, SED (TCG Opal 2.01 / AES-256), Integrated PLP"],
          ["Reliability", "Advanced LDPC ECC, Static/Dynamic Wear Leveling, MTBF 2.0M Hours"],
          ["Power Consumption", "Idle <5.2 W · Active <22.7 W"],
          ["Power Management", "Auto Idle, Temperature Monitoring & Throttling"],
          ["Warranty", "3 Years Enterprise Warranty"],
        ],
      },
    ],
    specs: [
      ["Form factor", "U.2 NVMe, TLC (Block U.2 & Block E)"],
      ["Raw capacity", "128 TB / 64 TB (Block U.2) · 32 TB / 16 TB / 8 TB (Block E)"],
      ["Controllers / Interface", "8 modular NVMe controllers (Block U.2) / PCIe Gen 5x4 (Block E)"],
      ["Fault tolerance & Speed", "RAID-5/6, erasure coding (U.2) · 14,000 MB/s read, 3M IOPS (E)"],
      ["Garbage collection", "Parallel across controllers, no throughput cliff"],
      ["Encryption", "AES-256 with full TCG Opal 2.0 / Opal 2.01 compliance"],
      ["Power", "25 W envelope (Block U.2) / 22.7 W active (Block E)"],
      ["Datasheets", "2 available: BRYCK Block Datasheet & BRYCK Block E Datasheet"],
    ],
    uses: [
      "AI-enabled dismounted kit and wearable tactical compute",
      "High-density 1PB edge storage arrays in compact 1U server chassis",
      "Persistent aerial ISR surveillance and wide-area sensor retention",
      "High-bandwidth telemetry ingestion for defense & commercial edge",
    ],
  },
  {
    slug: "bryck-fx",
    name: "BRYCK FX",
    cat: "data-center",
    pn: "TS-FX-CORE",
    rev: "B",
    image: "/productsNewOPT/BRYCK-FX.png",
    datasheet: { default: "/Tsecond_BRYCK FX_Datasheet.pdf" },
    tagline: "The enterprise landing zone for everything the edge collects.",
    summary:
      "Edge nodes are only useful if what they gather reconciles cleanly at home. FX is the data centre tier that receives, verifies and indexes returning mission data.",
    reads: [["Rack", "scale", "Deployment"], ["PB", "", "Capacity class"], ["CoC", "", "Custody verify"], ["API", "first", "Integration"]],
    specs: [
      ["Deployment", "Standard rack, conventional data hall"],
      ["Capacity", "Petabyte tier, scale-out"],
      ["Reconciliation", "Automatic chain-of-custody verification on ingest"],
      ["Encryption", "AES-256 at rest, TCG Opal 2.0"],
      ["Integration", "REST API, S3-compatible interfaces"],
      ["Availability", "Redundant power and cooling"],
      ["Compliance", "TAA compliant supply chain"],
      ["Detail specs", "Sized against retention policy"],
    ],
    uses: [
      "Enterprise landing zone for returning mission data",
      "Long-term retention under evidentiary requirements",
      "Training corpus assembly from field collection",
      "Cross-programme data federation under policy control",
    ],
  },
  {
    slug: "bryck-hx",
    name: "BRYCK HX",
    cat: "data-center",
    pn: "TS-HX-DENS",
    rev: "A",
    image: "/productsNewOPT/T2-HX.webp",
    datasheet: { default: "/Tsecond_T2-HX_datasheet.pdf" },
    tagline: "High-density data centre tier for sustained ingest and retention.",
    summary:
      "Where FX reconciles, HX holds. Built for sites taking continuous returns from many edge nodes at once, with density as the governing constraint.",
    reads: [["High", "density", "Rack profile"], ["PB+", "", "Capacity class"], ["24/7", "", "Ingest cycle"], ["TAA", "", "Supply chain"]],
    specs: [
      ["Deployment", "Standard rack, high-density configuration"],
      ["Capacity", "Multi-petabyte per rack"],
      ["Ingest", "Sustained concurrent writes from many nodes"],
      ["Encryption", "AES-256 at rest, TCG Opal 2.0"],
      ["Integration", "REST API, S3-compatible interfaces"],
      ["Availability", "Redundant power and cooling"],
      ["Compliance", "TAA compliant supply chain"],
      ["Detail specs", "Sized against ingest profile"],
    ],
    uses: [
      "Central landing for a large distributed node fleet",
      "Sustained high-rate ingest from multiple programmes",
      "Consolidation tier ahead of archive",
      "Shared retention across co-located programmes",
    ],
  },
  {
    slug: "bronto-stor",
    name: "BRONTO STOR",
    cat: "data-center",
    pn: "TS-BRN-ARCH",
    rev: "A",
    image: "/productsNewOPT/BRONTO_STORlogo.webp",
    datasheet: { in: "/Tsecond_BRONTO-STOR_datasheet_in.pdf", us: "/Tsecond_BRONTO-STOR_datasheet_us.pdf", default: "/Tsecond_BRONTO-STOR_datasheet.pdf" },
    tagline: "Archive-scale storage for long-hold mission data.",
    summary:
      "The bottom of the stack. BRONTO STOR keeps collection for as long as the retention policy demands, at a cost per petabyte that makes keeping everything defensible.",
    reads: [["Archive", "", "Tier"], ["PB+", "", "Capacity class"], ["Years", "", "Retention"], ["CoC", "", "Custody intact"]],
    specs: [
      ["Tier", "Archive / long-hold"],
      ["Capacity", "Multi-petabyte, scale-out"],
      ["Retention", "Multi-year under policy"],
      ["Custody", "Chain-of-custody preserved through tiering"],
      ["Encryption", "AES-256 at rest"],
      ["Integration", "REST API, S3-compatible interfaces"],
      ["Compliance", "TAA compliant supply chain"],
      ["Detail specs", "Sized against retention policy"],
    ],
    uses: [
      "Long-hold retention under evidentiary requirements",
      "Historic corpus for model re-training",
      "Regulated archive with auditable provenance",
      "Cold tier behind FX and HX",
    ],
  },
  {
    slug: "data-dart",
    name: "Data Dart",
    cat: "data-movement",
    pn: "TS-DRT-TAC",
    rev: "A",
    image: "/productsNewOPT/DataDart.webp",
    datasheet: { default: "/Tsecond_Product_Portfolio_Datasheet.pdf" },
    tagline: "Moves petabytes faster than your network can, because it does not use it.",
    summary:
      "When a transfer would take three weeks over the available link, the fastest network is a courier. Data Dart makes physical transfer a managed, auditable, encrypted operation rather than a box of drives.",
    reads: [["Air", "gap", "Transfer mode"], ["E2E", "", "Encryption"], ["CoC", "", "Custody record"], ["PB", "", "Payload scale"]],
    specs: [
      ["Transfer mode", "Physical, air-gap capable"],
      ["Protection", "End-to-end AES-256, keys never travel with payload"],
      ["Custody", "Signed chain-of-custody record per movement"],
      ["Tamper", "Tamper-evident enclosure and event log"],
      ["Payload", "Petabyte-class per movement"],
      ["Reconciliation", "Automatic verification against BRYCK FX on arrival"],
      ["Compliance", "TSA-compliant carry, TAA compliant"],
      ["Detail specs", "Defined per movement plan"],
    ],
    uses: [
      "Cloud seeding where the initial upload exceeds the link budget",
      "Cross-domain transfer under strict custody requirements",
      "Disaster recovery restoration at full fidelity",
      "Coalition data handover with auditable provenance",
    ],
  },
  {
    slug: "bryck-os",
    name: "BRYCK OS",
    cat: "software",
    pn: "TS-OS-CTRL",
    rev: "C",
    image: "/productsNewOPT/bryck-oslogo.webp",
    datasheet: { default: "/Tsecond_Product_Portfolio_Datasheet.pdf" },
    tagline: "The control plane every node shares — one data model, edge to enterprise.",
    summary:
      "The reason a pilot at the edge scales into a programme without a rewrite. BRYCK OS gives every node the same encryption posture, the same metadata schema and the same API, so nothing is re-indexed on the way home.",
    reads: [["One", "plane", "Control surface"], ["REST", "", "API"], ["CoC", "", "Custody model"], ["All", "nodes", "Coverage"]],
    specs: [
      ["Scope", "Every node in the BRYCK family"],
      ["Data model", "One metadata schema, edge to enterprise"],
      ["API", "REST, S3-compatible interfaces, headless CLI"],
      ["Custody", "Signed chain-of-custody generated at capture"],
      ["Encryption", "AES-256 policy enforced at manufacture"],
      ["Orchestration", "Fleet management across distributed nodes"],
      ["Integration", "Mission software and third-party orchestration"],
      ["Detail specs", "Released with platform documentation"],
    ],
    uses: [
      "Fleet management across a distributed node mesh",
      "Policy-scoped data exchange between programmes",
      "Automatic reconciliation into the enterprise tier",
      "Integration with existing mission orchestration",
    ],
  },
];

/* ------------------------------------------------------------- solutions */
/* The four Mission Environments from the live homepage, as full pages. */
export const SOLUTIONS = [
  {
    slug: "distributed-command-control",
    n: "01",
    name: "Distributed Command & Control",
    short: "Decentralised coordination with secure data fusion and edge-based decision support.",
    problem:
      "A common operating picture that dissolves the moment the link degrades. Coordination built on a central server assumes a network that contested environments do not provide.",
    approach:
      "Every node holds a complete, independently queryable picture and reconciles opportunistically over whatever bandwidth exists. Decision support runs locally, so the picture degrades in fidelity rather than disappearing.",
    outcome: "Command continuity through contested spectrum.",
    nodes: ["bryck", "bryck-fxr", "bryck-os"],
    points: [
      ["Secure data fusion", "Multi-domain sensor inputs merged at the node, not at a distant server."],
      ["Real-time awareness", "A picture that updates from local collection even with no uplink."],
      ["Edge decision support", "Mission models run against resident data, inside the decision window."],
      ["Opportunistic sync", "Nodes reconcile when a path appears, over any bandwidth."],
    ],
  },
  {
    slug: "critical-infrastructure-protection",
    n: "02",
    name: "Critical Infrastructure Protection",
    short: "Continuous monitoring and coordinated response for defence assets and strategic facilities.",
    problem:
      "Continuous monitoring that depends on shipping sensitive operational data off-premise — a posture that regulation and doctrine increasingly forbid.",
    approach:
      "Full retention and analysis stay inside the operator's own perimeter and jurisdiction. Only alerts cross the boundary, which removes the data residency argument entirely.",
    outcome: "Coverage without a data residency argument.",
    nodes: ["bryck-cube", "bryck-fx", "bryck-mini"],
    points: [
      ["On-premise retention", "Operational data never leaves the operator's jurisdiction."],
      ["Anomaly detection", "Models run on site against the full-fidelity record."],
      ["Coordinated response", "Alerts routed to the operations centre, raw collection stays put."],
      ["Deployable cells", "Compute stood up at remote sections with no existing infrastructure."],
    ],
  },
  {
    slug: "real-time-threat-detection",
    n: "03",
    name: "Real-Time Threat Detection",
    short: "Detection and prioritisation of multi-domain threats using sensor fusion and AI analytics.",
    problem:
      "Sensors generate more than the pipe can carry, so collection is discarded at the point of capture — and the detection that mattered was in what was thrown away.",
    approach:
      "Retain everything locally at full fidelity, run exploitation models against the resident archive, and transmit only structured results. Bandwidth is spent on answers, not raw feed.",
    outcome: "Nothing discarded. Detection inside the decision window.",
    nodes: ["bryck-turbo-hpc", "bryck", "bryck-block"],
    points: [
      ["Sensor fusion", "Optical, RF, acoustic and telemetry correlated at the node."],
      ["AI analytics", "Classification and prioritisation without a round trip."],
      ["Encrypted offline processing", "Full capability with no connectivity at all."],
      ["Replay", "Archived collection re-run against newer models on demand."],
    ],
  },
  {
    slug: "autonomous-unmanned-navigation",
    n: "04",
    name: "Autonomous Unmanned Navigation",
    short: "GPS-denied navigation and adaptive mission execution for unmanned systems.",
    problem:
      "Autonomy stacks that need a round trip to a cloud which is not reachable, in environments where GPS is denied and the link is contested.",
    approach:
      "On-platform inference against on-platform storage. The vehicle decides at the vehicle and returns with the full sensor record intact for post-mission exploitation.",
    outcome: "Autonomy that does not degrade outside coverage.",
    nodes: ["bryck-mini", "bryck-micro-r", "bryck-os"],
    points: [
      ["GPS-denied navigation", "Positioning derived from on-board sensing and local inference."],
      ["Adaptive execution", "Mission re-planning on the platform, in flight."],
      ["Low SWaP", "Inference inside the airframe's watt and weight budget."],
      ["Full record retained", "Everything captured comes home for exploitation."],
    ],
  },
];

/* ------------------------------------------------------------ industries */
export const INDUSTRIES = [
  {
    slug: "defence",
    n: "01",
    name: "Defence",
    short: "Dismounted, vehicle, airborne and maritime programmes across land, sea and air.",
    constraint:
      "The link is contested and the decision window is minutes. Capability cannot be made conditional on the spectrum staying clear.",
    mechanism:
      "Nodes travel with the unit. Collection is retained at full fidelity through the mission and exploited on the spot, so a degraded link changes reporting latency rather than capability.",
    outcome: "Capability that does not depend on the network.",
    nodes: ["bryck", "bryck-mini", "bryck-fxr"],
    cases: [
      ["Dismounted squad", "Wearable inference with full sensor retention, carried on the person."],
      ["Vehicle integration", "Shock-isolated node on the platform bus, powered from vehicle DC."],
      ["Forward command post", "Rack-scale fusion across a distributed mesh, no reachback."],
      ["Maritime", "Sealed conduction-cooled builds rated for salt fog and vibration."],
    ],
  },
  {
    slug: "intelligence",
    n: "02",
    name: "Intelligence",
    short: "Persistent collection, exploitation and retention under strict custody requirements.",
    constraint:
      "Custody requirements a commercial cloud cannot satisfy, on collection that must remain admissible inside a formal review.",
    mechanism:
      "Every artefact carries a signed chain-of-custody record from capture through reconciliation, generated by the node itself rather than asserted afterwards.",
    outcome: "Provenance that survives an inspector general review.",
    nodes: ["bryck", "data-dart", "bronto-stor"],
    cases: [
      ["Persistent surveillance", "Wide-area motion imagery retained at full rate, exploited locally."],
      ["Cross-domain transfer", "Encrypted physical movement, keys held separately from payload."],
      ["Evidentiary retention", "Long-hold archive with automatic custody verification on ingest."],
      ["Coalition handover", "Policy-scoped exchange with auditable provenance per artefact."],
    ],
  },
  {
    slug: "aerospace",
    n: "03",
    name: "Aerospace",
    short: "Flight test instrumentation, mission recorders and ground station processing.",
    constraint:
      "A sortie generates more telemetry than the downlink will carry in a week, so analysis cadence is set by the transfer queue instead of the team.",
    mechanism:
      "High-rate telemetry lands locally and replays against successive model versions without a transfer window between each pass.",
    outcome: "Analysis cadence set by the team, not the queue.",
    nodes: ["bryck-turbo-hpc", "bryck-block", "bryck"],
    cases: [
      ["Flight test", "Full-rate instrumentation capture offloaded between sorties."],
      ["Mission recorders", "Modular NVMe sized into existing airframe bays."],
      ["Ground station", "Satellite downlink processing at sustained line rate."],
      ["Model regression", "Repeated passes over archived collection, no re-transfer."],
    ],
  },
  {
    slug: "critical-infrastructure",
    n: "04",
    name: "Critical Infrastructure",
    short: "Grid, port, pipeline and border monitoring with on-premise retention.",
    constraint:
      "Continuous monitoring that cannot ship operational data off-premise, across sites that often have no usable infrastructure.",
    mechanism:
      "Full retention and analysis stay inside the operator's perimeter. Deployable cells bring compute to sections that have none.",
    outcome: "Coverage without a residency argument.",
    nodes: ["bryck-cube", "bryck-fx", "bryck-mini"],
    cases: [
      ["Grid monitoring", "Site-resident analysis across substations, alert-only egress."],
      ["Port and border", "Multi-sensor fusion held under the operator's own policy."],
      ["Pipeline", "Deployable compute cells at remote sections."],
      ["Sovereign enclave", "Processing that never crosses a jurisdictional boundary."],
    ],
  },
  {
    slug: "energy-subsurface",
    n: "05",
    name: "Energy & Subsurface",
    short: "Seismic acquisition and survey data moved from remote sites at full fidelity.",
    constraint:
      "Survey volumes measured in petabytes, acquired at sites with no viable upload path.",
    mechanism:
      "Data moves physically under encryption with signed custody records, and reconciles automatically at the enterprise tier on arrival.",
    outcome: "Months of transfer collapsed into a shipping window.",
    nodes: ["data-dart", "bryck", "bryck-hx"],
    cases: [
      ["Seismic acquisition", "Full-fidelity capture at the shot point, no decimation in the field."],
      ["Remote site offload", "Carried transfer from sites with no usable connectivity."],
      ["Processing handoff", "Automatic reconciliation into the enterprise tier."],
      ["Archive", "Long-retention hold for re-processing against newer models."],
    ],
  },
  {
    slug: "media-production",
    n: "06",
    name: "Media & Production",
    short: "High-resolution dailies and post workflows with no viable upload window.",
    constraint:
      "Camera negative accumulates faster than any on-location connection can move it, and the schedule does not wait.",
    mechanism:
      "Negative moves between location, post and archive as a managed, auditable transfer instead of a shuttle of loose drives.",
    outcome: "Dailies that arrive when the shoot wraps.",
    nodes: ["bryck", "data-dart", "bronto-stor"],
    cases: [
      ["On-location capture", "Negative ingested at full resolution as it comes off the card."],
      ["Dailies turnaround", "Local transcode and review without waiting on an upload."],
      ["Post handoff", "Tamper-evident transfer between unit, post house and archive."],
      ["Archive", "Petabyte-tier retention with verified custody per movement."],
    ],
  },
];

/* ----------------------------------------------------------------- misc */
export const SEQUENCE = [
  ["01", "Capture", "Large volumes of data in any format from any source."],
  ["02", "Process", "Signal is indexed and written to encrypted NVMe as it arrives."],
  ["03", "Infer", "Mission models execute locally. The decision loop never leaves the node."],
  ["04", "Move", "Structured results travel by whatever path exists."],
  ["05", "Upload", "Custody metadata reconciles at the destination when a link returns."],
];

export const ECOSYSTEM = ["NVIDIA", "Dell", "AWS", "Big Bear", "Boeing", "Curtiss Wright"];

export const MARQUEE_A = [
  "Field Deployable", "Modular", "Compact", "Core System",
  "Industrial Grade", "Stackable", "Lightweight", "Tactical", "Rapid Deploy",
];
export const MARQUEE_B = [
  "Edge Optimized", "Secure", "Hardened", "Compact Form", "High Density",
  "Portable", "High Compute", "AI Ready", "Enterprise", "Extreme Performance",
];

export const STATS = [
  ["1", "PB", "Capacity per node"],
  ["40", "GB/s", "Sustained throughput"],
  ["14", "lb", "Carry weight"],
  ["0", "ms", "Reachback required"],
];

export const COMPLIANCE = [
  "MIL-STD-810", "AES-256 at rest", "TCG Opal 2.0", "SOSA aligned",
  "CMOSS compatible", "TSA-compliant carry", "TAA compliant",
  "Air-gapped operation", "Field-repairable", "REST API control plane",
];

export const NEWS = [
  ["AGREEMENT", "MAR 2026", "CRADA signed with U.S. Army DEVCOM C5ISR Center",
   "A cooperative research agreement to evaluate edge inference and storage architectures for tactical networks."],
  ["FUNDING", "APR 2026", "Series expansion closes to fund global programme delivery",
   "Capital directed at manufacturing scale and international programme support."],
  ["PRODUCT", "NOV 2025", "BRYCK Block enters general availability",
   "128 TB modular NVMe with eight independently managed controllers reaches production supply."],
  ["PARTNER", "OCT 2025", "Joint edge orchestration stack with BigBear.ai",
   "ConductorOS integration extends mission orchestration across distributed BRYCK nodes."],
];

export const ROLES = [
  ["Firmware Engineer, NVMe", "San Jose, CA", "Engineering"],
  ["Thermal Design Engineer", "San Jose, CA", "Hardware"],
  ["Solutions Architect, Federal", "Remote, US", "Field"],
  ["Programme Manager, Defence", "Washington, DC", "Programmes"],
  ["Platform Engineer, BRYCK OS", "San Jose, CA", "Software"],
];

/* ---------------------------------------------------------------- lookup */
export const bySlug = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p]));
export const getProduct = (s) => bySlug[s] ?? null;
export const getSolution = (s) => SOLUTIONS.find((x) => x.slug === s) ?? null;
export const getIndustry = (s) => INDUSTRIES.find((x) => x.slug === s) ?? null;
export const catLabel = (s) => CATEGORIES.find((c) => c.slug === s)?.label ?? s;
export const inCategory = (s) => PRODUCTS.filter((p) => p.cat === s);

export function relatedTo(slug, n = 4) {
  const p = getProduct(slug);
  if (!p) return PRODUCTS.slice(0, n);
  return [
    ...PRODUCTS.filter((x) => x.slug !== slug && x.cat === p.cat),
    ...PRODUCTS.filter((x) => x.slug !== slug && x.cat !== p.cat),
  ].slice(0, n);
}
export const usedIn = (slug) => ({
  solutions: SOLUTIONS.filter((s) => s.nodes.includes(slug)),
  industries: INDUSTRIES.filter((i) => i.nodes.includes(slug)),
});

/* ------------------------------------------------------------------- nav */
export const NAV = [
  {
    label: "Products",
    href: "/products",
    mega: CATEGORIES.map((c) => ({
      label: c.label,
      items: inCategory(c.slug).map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    mega: [{ label: "Mission Environments", items: SOLUTIONS.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })) }],
  },
  {
    label: "Industries",
    href: "/industries",
    mega: [{ label: "Sectors", items: INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })) }],
  },
  {
    label: "Company",
    href: "/company",
    mega: [{
      label: "Our Company",
      items: [
        { label: "About Us", href: "/company" },
        { label: "Procurement", href: "/company/procurement" },
        { label: "Careers", href: "/company/careers" },
        { label: "News", href: "/news" },
      ],
    }],
  },
];
