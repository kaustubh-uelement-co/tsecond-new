export const blogData = {
  categories: [
    {
      id: 1,
      name: "Aerospace",
      slug: "aerospace",
      image: "/blogOPT/aerospace.webp",
      articleCount: 12,
    },
    {
      id: 2,
      name: "Entertainment",
      slug: "entertainment",
      image: "/blogOPT/entertainment.webp",
      articleCount: 13,
    },
    {
      id: 3,
      name: "Robotics",
      slug: "robotics",
      image: "/blogOPT/robotics.webp",
      articleCount: 11,
    },
    {
      id: 4,
      name: "Manufacturing",
      slug: "manufacturing",
      image: "/blogOPT/manufacturing.webp",
      articleCount: 10,
    },
    {
      id: 5,
      name: "Entertainment",
      slug: "entertainment",
      image: "/blogOPT/entertainment.webp",
      articleCount: 13,
    },
    {
      id: 6,
      name: "Manufacturing",
      slug: "manufacturing",
      image: "/blogOPT/manufacturing.webp",
      articleCount: 10,
    },
  ],
  blogmain: [
    {
      id: 0,
      BreadcrumbTitle: "Tsecond & NVIDIA",
      issource: false,
      redirectUrl: "/solutions/partners",
      title:
        "Tsecond Collaborates with NVIDIA to Advance Security & Mission Critical Intelligence",
      slug: "tsecond-nvidia-collaboration-edge-ai",
      description:
        "With NVIDIA BlueField DPUs and NVIDIA RTX 4000 GPUs, Tsecond delivers accelerated ISR through the BRYCK AI Mini.GPU, enabling real-time intelligence and analytics at the edge in the most demanding operational environments.",
      image: "/usecaseOPT/partner1.webp",
      tags: [
        "NVIDIA",
        "BlueField DPU",
        "RTX 4000",
        "Edge AI",
        "ISR",
        "BRYCK AI Mini",
      ],
      readTime: "12 min",
      date: "Oct 28, 2025",
      author: {
        name: "Dr. Raj Iyer.",
        role: "President, Global Public Sector Markets",
        avatar: "/aboutimages/optimise/tsec-team-4-raj.webp",
      },
      content: {
        introduction: [
          "In today's security and government operations, data is vital to intelligence. Modern ISR platforms can generate 10-20 terabytes of full-motion video per mission, while cyber monitoring systems may log multiple petabytes annually and satellite imagery collections often exceed 50 terabytes in a single day. The challenge is not just capturing this data—it is securely storing, transporting and analyzing it fast enough to drive actionable decisions, often in disconnected, bandwidth-constrained, or high-risk environments.",
          "Tsecond addresses these challenges with the BRYCK AI Mini.GPU, a hyperconverged compact edge AI and storage solution designed for challenging environments, particularly those with limited or unreliable network connectivity. Designed specifically to operate in low Size Weight and Power (SwaP) environments, the BRYCK AI Mini.GPU offers petabyte-scale storage in the smallest form factor available in the market today.",
          "The BRYCK AI Mini.GPU's key innovation lies in harnessing the combined acceleration capabilities of the NVIDIA BlueField-3 Data Processing Unit (DPU) and NVIDIA RTX 4000 GPU to deliver high-performance edge computing. This enables secure, high-volume data collection, transport and processing from the point of collection to central facilities without relying on continuous network connectivity.",
        ],
        keyAdvantages: {
          title: "Key Technology Integrations",
          points: [
            {
              title:
                "NVIDIA BlueField DPU: Accelerating Secure Data Management",
              description:
                "NVIDIA BlueField DPU is an accelerated infrastructure platform that revolutionizes secure and efficient data management in high-performance and mission-critical environments. By offloading core infrastructure and security workloads from traditional CPUs, BlueField enables line-rate data encryption, accelerated networking and isolated access control within a dedicated hardware environment. Its hardware crypto acceleration facilitates real-time encryption and decryption with minimal latency, safeguarding sensitive datasets throughout their journey from edge collection to centralized processing.",
            },
            {
              title: "NVIDIA RTX 4000 GPU: AI-Driven Insights",
              description:
                "The NVIDIA RTX 4000 GPU delivers powerful parallel computing and AI acceleration engineered for edge and high-performance data applications. With its advanced Tensor Cores and AI-optimized frameworks, it enables rapid analysis and processing of large datasets including satellite imagery, bathymetry, LiDAR and other sensor data. RTX 4000 dramatically increases throughput for AI-driven analysis such as feature extraction, classification, segmentation and anomaly detection, enabling faster and more accurate results in the field.",
            },
            {
              title: "Rugged Design for Operational Environments",
              description:
                "Built from the ground-up for demanding operational environmental conditions, BRYCK AI Mini.GPU withstands shock, vibration and temperature extremes, making it deployable across mobile, airborne and maritime operation. By shifting security and data-movement tasks to BlueField, the BRYCK rapidly captures, transports and consolidates intelligence, even where bandwidth is measured in kilobits per second or where connectivity is completely nonexistent.",
            },
            {
              title: "Mission-Critical Applications",
              description:
                "Tsecond supports mission-critical deployments including: Secure ENC Processing for Government Agencies (accelerates and secures electronic navigational chart workflows), Geospatial Data Capture & Processing (enables efficient ingestion and analysis of vast satellite and GIS datasets) and Airborne Data Workflows (powers onboard data processing for UAV and aircraft sensor systems).",
            },
          ],
        },
        continuation: [
          "With distinct, purpose-built hardware acceleration engines for infrastructure and security operations, BlueField enables independent offloading of these tasks from the host CPU. This improves efficiency for analytics workloads and provides secure, isolated processing to meet stringent government compliance standards. This powerful combination of high bandwidth, host isolation and in-line security makes BlueField an ideal foundation for demanding applications in geospatial intelligence, secure maritime chart processing and airborne data workflows.",
          "By combining GPU acceleration with efficient energy use and compact design, with parallel computing capabilities and AI acceleration, the RTX 4000 enables rapid analysis and processing of large datasets, even in field environments with limited connectivity. The result is a seamless, high-speed bridge from data capture to actionable intelligence.",
          "As Tsecond continues to push the boundaries of edge intelligence with BRYCK AI Mini.GPU, the integration of NVIDIA's latest technology remains a key factor in ongoing innovation. With the upcoming release of NVIDIA BlueField-4, we can anticipate even greater advancements in data processing and security at the edge, including enhanced performance capabilities for real-time data processing, improved security features to address evolving threats and greater efficiency in handling increasingly large datasets.",
          "Tsecond's BRYCK AI Mini.GPU, powered by NVIDIA BlueField DPU and RTX 4000 GPU, revolutionizes the way intelligence communities handle mission-critical data at the edge. By providing secure, rugged and high-performance solutions, Tsecond enables faster decision-making and more effective operations.",
        ],
      },
    },
  ],

  articles: [
    {
      id: 18,
      BreadcrumbTitle: "BRYCK BLOCK",
      issource: true,
      title:
        "BRYCK BLOCK Resilience: Why 8 Namespaces Beat a Monolithic 128 TB NVMe Drive",
      slug: "bryck-block-resilience-8-namespaces",
      description:
        "A single 128 TB NVMe failure creates a long rebuild window in RAID-5, while BRYCK BLOCK’s 8-namespace architecture isolates faults and reduces rebuild exposure.",
      image: "/blogOPT/bryck_block_blog_1.webp",
      images: [
        {
          src: "/blogOPT/bryck_block_blog_2.webp",
          alt: "Rebuild exposure comparison",
        },
        {
          src: "/blogOPT/bryck_block_blog_3.webp",
          alt: "Failure timeline illustration",
        },
      ],
      tags: [
        "NVMe",
        "RAID-5",
        "Storage Resilience",
        "Namespaces",
        "Enterprise Storage",
        "BRYCK BLOCK",
      ],
      readTime: "8 min",
      date: "Jun 3, 2026",
      author: {
        name: "Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        eyebrow: "Enterprise Storage · Architecture Deep-Dive · May 2025",
        heroTitle:
          "The 8× Namespace Advantage: Why BRYCK BLOCK Rebuilds 8× Faster and Survives Longer",
        heroDescription:
          "A single drive failure in a conventional 128 TB NVMe RAID-5 cluster triggers a full 128 TB rebuild window: hours of vulnerability during which a second failure means total data loss. BRYCK BLOCK's modular 8-namespace architecture changes this calculus entirely.",
        stats: [
          {
            value: "8×",
            label:
              "Faster rebuild: 16 TB reconstructed vs 128 TB in standard NVMe",
          },
          {
            value: "87.5%",
            label:
              "Reduction in exposed rebuild window, dramatically lower double-failure risk",
          },
          {
            value: "~2.1h",
            label:
              "Estimated BRYCK rebuild vs ~16.7h for standard 128 TB NVMe at 2 GB/s",
          },
        ],
        introduction: [
          "Enterprise storage architects have obsessed over throughput, IOPS, and capacity density. But there is a quieter, more dangerous design flaw buried in every conventional NVMe deployment: the monolithic namespace.",
          "When you deploy a standard 128 TB U.2 NVMe drive in a RAID-5 cluster (say, 24 drives) you are trusting a single logical address space per drive for all your protection math. When that drive fails, your storage system sees exactly one failed entity: 128 TB that must be fully reconstructed before you are safe again.",
          "The core insight: BRYCK BLOCK ships 8 independent NVMe modules in a single U.2 enclosure. Each module presents its own namespace, approximately 16 TB. To a RAID/erasure coding controller, BRYCK BLOCK looks like 8 separate drives. A failure in one module triggers a 16 TB rebuild, not a 128 TB one.",
        ],
        images: [
          {
            src: "/blogOPT/placeholder-1.webp",
            alt: "BRYCK BLOCK architecture overview",
          },
          {
            src: "/blogOPT/placeholder-2.webp",
            alt: "Rebuild exposure comparison",
          },
          {
            src: "/blogOPT/placeholder-3.webp",
            alt: "Failure timeline illustration",
          },
        ],
        sections: [
          {
            type: "metric-grid",
            title:
              "One Enclosure. Eight Namespaces. Radically Different Risk Profile.",
            items: [
              {
                left: "Standard 128 TB NVMe",
                right: "nvme0n1 → 128 TB",
                foot: "1 namespace · 1 failure unit · 128 TB rebuild obligation",
              },
              {
                left: "BRYCK BLOCK (U.2)",
                right:
                  "nvme0n1 → 16 TB\nnvme0n2 → 16 TB\nnvme0n3 → 16 TB\nnvme0n4 → 16 TB\nnvme0n5 → 16 TB\nnvme0n6 → 16 TB\nnvme0n7 → 16 TB\nnvme0n8 → 16 TB",
                foot: "8 namespaces · 8 independent failure units · 16 TB rebuild obligation per event",
              },
            ],
          },
          {
            type: "calculator",
            title: "Rebuild Time Calculator",
            description:
              "Adjust your actual storage throughput and see the rebuild exposure difference:",
            defaultThroughput: 12,
          },
          {
            type: "risk",
            title: "The Statistics of Surviving a Double Failure",
            intro:
              "RAID-5 tolerates exactly one failure. During rebuild, a second failure destroys your data. The probability of that catastrophic second failure is directly proportional to the rebuild window duration.",
            blocks: [
              {
                label: "Annual drive failure rate assumed",
                value: "1%",
                note: "typical enterprise HDD/SSD AFR",
              },
              { label: "Std. 16.7h rebuild", value: "1.9%", note: "1.9% risk" },
              {
                label: "BRYCK 2.1h rebuild",
                value: "0.24%",
                note: "0.24% risk",
              },
              {
                label:
                  "Annualised double-failure probability across 100-drive cluster",
                value: "~17% vs ~2.2%",
                note: "~17% / yr standard, ~2.2% / yr BRYCK BLOCK",
              },
            ],
          },
          {
            type: "timeline",
            title: "Failure Timeline: What Actually Happens at 3AM",
            events: [
              {
                time: "T+00:00",
                text: "Drive failure detected. RAID controller marks the drive degraded. All reads now require parity reconstruction, and I/O latency climbs 15–40%. SLA risk begins immediately.",
              },
              {
                time: "T+00:05 to T+16:42 (Standard) / T+02:08 (BRYCK)",
                text: "Rebuild window is open. Every minute the hot spare is not fully populated, a second failure causes unrecoverable data loss. Standard NVMe: 16.7 hours of exposure. BRYCK BLOCK: 2.1 hours.",
              },
              {
                time: "Standard only: T+08:00",
                text: "Midnight checkpoint. Standard rebuild is only 48% complete after 8 hours. Your team has gone home. The cluster is still exposed.",
              },
              {
                time: "T+02:08 (BRYCK) vs T+16:42 (Standard)",
                text: "Rebuild complete. Cluster fully protected again. BRYCK BLOCK closes its vulnerability window before a single shift change.",
              },
            ],
          },
          {
            type: "comparison",
            title: "The Operational Cost Cascade",
            description:
              "Rebuild time is not just a risk metric. It is a cost driver across five dimensions:",
            items: [
              {
                label: "Rebuild I/O load",
                standard: "STD: 128 TB",
                bryck: "16 TB",
                note: "8× higher on standard",
              },
              {
                label: "Performance impact",
                standard: "16.7h degraded",
                bryck: "2.1h degraded",
                note: "8× longer on standard",
              },
              {
                label: "Wear amplification",
                standard: "128 TB reads+writes",
                bryck: "16 TB reads+writes",
                note: "Standard accelerates wear",
              },
            ],
          },
          {
            type: "text",
            title: "The Hidden Architecture Problem No One Talks About",
            paragraphs: [
              "BRYCK BLOCK's 8-module architecture enables something standard NVMe cannot: partial fault isolation. If one of the 8 internal modules degrades, only that 16 TB namespace is affected. The other 7 modules (112 TB) remain fully operational and protected.",
              'There is no concept of "partial drive failure" in monolithic NVMe. The entire 128 TB unit is either up or down.',
            ],
          },
          {
            type: "text",
            title: "Erasure Coding and Replication: Same Story, Bigger Gains",
            paragraphs: [
              "RAID-5 is the conservative case. The advantages compound with more sophisticated data protection schemes.",
              "Erasure coding (e.g. 8+3, 12+4 schemes): Larger stripe groups mean more drives involved in reconstruction, and longer rebuild times. With standard 128 TB drives in a 12+4 erasure coding scheme, a single failure could trigger a reconstruction job touching 1.5 PB+ of data across the cluster. With BRYCK BLOCK's 16 TB namespaces, the same scheme reconstructs only ~192 TB.",
              "3-way replication (as used in Ceph, Lustre, HDFS): Rebuild on a standard 128 TB node means re-replicating a full 128 TB object to a replacement peer, a job that saturates the replication network for hours. BRYCK BLOCK limits each replication event to 16 TB, with 7 other namespaces continuing to serve reads and writes uninterrupted on the same physical enclosure.",
            ],
          },
          {
            type: "tco",
            title:
              "TCO Impact: Fewer Replacements, Less Wear, Lower Risk Premiums",
            cards: [
              {
                value: "2.9 PB",
                label:
                  "Total I/O per failure event: standard 24-drive RAID-5 (128 TB/drive)",
              },
              {
                value: "365 TB",
                label:
                  "Total I/O per failure event: BRYCK BLOCK RAID-5 (16 TB namespace)",
              },
              {
                value: "8×",
                label:
                  "Less endurance consumed per failure, directly extends fleet SSD lifetime",
              },
            ],
          },
          {
            type: "text",
            title: "The Brontostor Unified Storage Multiplier",
            paragraphs: [
              "BRYCK BLOCK is engineered specifically to accelerate Brontostor unified storage deployments, serving block, file, and object workloads simultaneously from a single pool.",
              "In this architecture, the 8-namespace model enables something architecturally significant: independent QoS and rebuild scheduling per namespace.",
              "A block namespace serving a latency-sensitive database can maintain full performance while an adjacent object namespace undergoes rebuild. This level of workload isolation is physically impossible in a monolithic 128 TB drive, where a single rebuild process competes for the entire drive's I/O bandwidth and all workloads sharing that drive degrade simultaneously.",
            ],
          },
          {
            type: "summary",
            title: "Summary: The 8× Resilience Multiplier",
            text: "BRYCK BLOCK does not require different RAID controllers, different software, or different procedures. It works with any standard NVMe storage controller that supports multiple namespaces per physical device. The resilience improvement is structural. It falls out of the architecture automatically, every time, at no operational overhead. The result: 8× faster rebuilds, 8× less rebuild-induced wear, and statistically ~8× lower probability of a catastrophic double-failure during recovery.",
            footer:
              "BRYCK BLOCK™ · High-Density Storage · AI Performance · Enterprise Reliability",
          },
        ],
        continuation: [
          "These figures compound into systemic resilience differences when measured over the operational lifetime of a cluster.",
          "The result is a resilience advantage that comes from the architecture itself, not from extra operational overhead.",
        ],
      },
    },
    {
      id: 17,
      BreadcrumbTitle: "Tsecond",
      issource: true,
      whitepaperurl: "/whitepapers/Tsecond_AWS_DT2_WP.pdf",
      title:
        "From the Edge to the Cloud: A Strategic Imperative for Data-Centric Organizations",
      slug: "edge-to-cloud-data-centric-organizations",
      description:
        "Tsecond addresses the challenge of moving massive datasets from remote edge environments to centralized cloud infrastructure through integration with AWS Data Transfer Terminals.",
      image: "/blogOPT/blog-image.webp",
      tags: [
        "Edge Computing",
        "Cloud Migration",
        "AWS",
        "Data Transfer",
        "BRYCK",
      ],
      readTime: "3 min",
      date: "Oct 23, 2025",
      author: {
        name: "Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "At Tsecond, we spend a lot of time thinking about data. Not just how to store it, but how to get it where it's most needed as quickly as possible. While data capture at the edge has become increasingly sophisticated, managing and mobilizing enterprise data remains a challenge. The secure and efficient transfer of large datasets from remote, mobile, or rugged environments — oil rigs, movie sets, or even autonomous vehicle testbeds — to centralized cloud infrastructure remains a significant bottleneck. Traditional network connections are often insufficient, hampered by inconsistent bandwidth, high latency, and security vulnerabilities that expose critical projects to delays, high costs and risks.",
          "This is precisely the challenge we have set out to solve through our integration with AWS and their Data Transfer Terminals (DT2). Our BRYCK family of products, including the versatile BRYCK Mini and the scalable BRYCK Platform, are engineered to capture and process vast quantities of data directly at the source, wherever that may be. This capability delivers even greater advantages when paired with a robust, convenient and accelerated path to the cloud, where the value of the data can be fully harnessed through further processing, analysis and distribution.",
        ],
        keyAdvantages: {
          title:
            "The synergy between our BRYCK devices and the AWS DT2 service offers three key advantages:",
          points: [
            {
              title: "Slash Data Transfer Times",
              description:
                "By dramatically reducing the time required for data transfer from days or weeks to mere hours, we enable organizations to accelerate their data-driven processes and gain a competitive edge.",
            },
            {
              title: "Enhanced Security and Compliance",
              description:
                "The DT2 facilities provide a secure chain of custody, with data remaining on the encrypted BRYCK device during the physical transfer and upload process.",
            },
            {
              title: "Operational and Cost Efficiency",
              description:
                "The on-demand, pay-per-use model of the DT2 eliminates the need for maintaining permanent, high-bandwidth network connections, allowing businesses to optimize their operational costs.",
            },
          ],
        },
        continuation: [
          "The AWS Data Transfer Terminal (DT2) provides this critical piece of the solution. Unlike traditional network transfers, the DT2 service offers access to secure, physical facilities with dedicated, high-speed fiber optic connections to AWS, bypassing the public internet to directly ingest massive datasets into AWS endpoints, such as Amazon S3, at speeds in excess of 100 Gbps.",
          "The BRYCK devices' unique combination of rugged and compact form factor, high capacity and exceptional performance make this synergy possible. Their portability allows for efficient physical transit from the edge to the DT2 facility. Mil-grade design, encryption and self-healing software protects the data from intrusion and corruption. And, maybe most importantly, the BRYCK devices' NVMe-powered high read and write performance capabilities make effective use of the DT2 connections' available bandwidth. Recent tests validate this synergistic approach: in real-world scenarios, our BRYCK Mini achieved a sustained upload speed of 20 Gbps, while the BRYCK Platform reached speeds of up to 125 Gbps. These results demonstrate the viability and transformative potential of a solution that combines high-performance portable storage with a dedicated data transfer service.",
          "This is just the beginning. We're continuing to optimize BRYCK solutions and software to deliver even greater upload speeds. Our goal is to ensure that the BRYCK and AWS DT2 remains the fastest, most secure and reliable way to get your data from the edge to the cloud. The future of data is here, moving at a pace that will transform how we all do business. Count on us to remove the speed bumps.",
        ],
      },
    },

    {
      id: 7,
      BreadcrumbTitle: "Tsecond & SOSA Consortium",
      issource: true,
      title:
        "Tsecond Joins the Open Group SOSA Consortium, Advancing Standards-based Edge Data Solutions for U.S. Defense",
      slug: "tsecond-joins-sosa-consortium-us-defense",
      description:
        "Tsecond, a defense tech company, announces its membership in The Open Group Sensor Open Systems Architecture™ (SOSA) Consortium to drive open standards for modularity and interoperability in mission-critical environments.",
      image: "/blogOPT/tsecondsossa.jpg",
      tags: ["SOSA Consortium", "U.S. Defense", "Edge AI", "MOSA", "BRYCK"],
      readTime: "8 min",
      date: "Sep 3, 2025",
      author: {
        name: "Tsecond",
        role: "News Release",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          // "NEWS PROVIDED BY\nTsecond Inc\nSeptember 03, 2025, 06:50 GMT",
          "Tsecond, a defense tech company offering the world’s first petabyte-scale high-performance computing and edge AI solutions in a small form factor, is proud to announce its membership in The Open Group Sensor Open Systems Architecture™ (SOSA) Consortium. This milestone reflects Tsecond’s commitment to driving innovation in open standards for interoperability across the defense ecosystem.",
          "The SOSA Consortium is a U.S.-based collaborative effort of government, industry and academic organizations dedicated to developing modular, interoperable sensor systems aligned with the U.S. Department of Defense’s Modular Open Systems Approach (MOSA). By joining SOSA, Tsecond strengthens its role in shaping the future of open standards for mission-critical environments.",
        ],
        keyAdvantages: {
          title: "Quotes and Strategic Contributions:",
          points: [
            {
              title: "Redefining the Tactical Edge",
              description:
                '“We are excited to be part of the SOSA community, which is redefining the way the U.S. military and its partners approach modularity and interoperability of data at the tactical edge” — Raj Iyer - President, Global Public Sector Markets. "Our participation underscores Tsecond’s long-term vision of enabling trusted, scalable and open solutions for defense and aerospace.”',
            },
            {
              title: "Accelerating Innovation",
              description:
                "Manavalan Krishnan, Co-founder and CTO at Tsecond, added: “The ability to contribute to and collaborate within SOSA not only accelerates innovation but also ensures our solutions remain interoperable and future ready. This is vital for U.S. defense missions where reliability and adaptability are paramount.”",
            },
            {
              title: "BRYCK® Platform Capabilities",
              description:
                "At the center of Tsecond’s innovation is BRYCK®, a ruggedized, high-capacity data mobility platform designed specifically to operate in power and network denied tactical edge environments. The BRYCK® brings mission critical AI and Generative AI processing, high-density storage and reliable computing power into a single, easily deployable form factor. Engineered for resilience, it supports rapid deployment in constrained and denied environments fully air-gapped and through CMOSS standards can be quickly integrated into existing mounted and dismounted platforms, command centers to support Command and Control on the move.",
            },
          ],
        },
        continuation: [
          "Tsecond’s membership in SOSA positions the company to work alongside leading U.S. defense contractors, government agencies and technology partners to advance standards that enhance interoperability, reduce costs and accelerate mission readiness.",
          "About Tsecond: Tsecond, a defense technology startup, delivers breakthrough solutions in data mobility and edge AI, serving defense, aerospace and industrial markets worldwide. Its flagship product, BRYCK®, is engineered for secure, high-speed and rugged edge AI processing, enabling customers to operate efficiently in the most complex and mission-critical environments.",
        ],
      },
    },
    {
      id: 2,
      BreadcrumbTitle: "Tsecond & Carahsoft",
      issource: true,
      title:
        "Tsecond and Carahsoft Partner to Bring Low SWaP, High-Performance Data Solutions for AI, Analytics and Data Management to the Public Sector",
      slug: "tsecond-carahsoft-public-sector-partnership",
      description:
        "Tsecond, a growth stage portfolio company of AeroEquity HorizonX and Carahsoft Technology Corp., The Trusted Government IT Solutions Provider®, today announced a partnership to make Tsecond’s flagship BRYCK® Platform available to the Public Sector.",
      image: "/blogOPT/carahsoft.webp",
      tags: ["Government", "Defense", "Carahsoft", "BRYCK", "Public Sector"],
      readTime: "10 min",
      date: "Jun 25, 2024",
      author: {
        name: "Carahsoft Technology Corp.",
        avatar: "/blogOPT/carahsoft3.png",
      },
      content: {
        introduction: [
          "Under the agreement, Carahsoft will serve as Tsecond’s Authorized Reseller to make the company’s flagship BRYCK® Platform available to the Public Sector through Carahsoft’s reseller partners and NASA Solutions for Enterprise-Wide Procurement (SEWP) V and Information Technology Enterprise Solutions – Software 2 (ITES-SW2) contracts.",
          "“Tsecond’s low SWaP, high performance and secure petabyte scale data solution is very relevant to Federal, defense and intelligence customers,” said Sahil Chawla, CEO and Co-founder at Tsecond. “Our patented technology makes us the only company offering extremely compact, dense and ruggedized storage in the petabyte range. We are excited to partner with Carahsoft, given their reputation and commitment to bringing innovative solutions to Federal, State and Local agencies.”",
          "Public Sector organizations have thousands of disparate data sets, typically collecting and processing large amounts of data for analytics, machine learning, AI or compliance with regulations. This strategic partnership makes it easier for Public Sector entities to access Tsecond's BRYCK® Platform and DataDart, a fully managed data migration service.",
        ],
        keyAdvantages: {
          title: "Tsecond Products and Capabilities for Government Agencies:",
          points: [
            {
              title: "BRYCK® Platform",
              description:
                "A portable and secure data solution that can capture, process, store and move data up to 1 Petabyte from the most remote locations to a desired destination. In the form factor of a construction brick (4”x4”x9.5”), the BRYCK weighs only 14lbs and has top-quality 40 GB/s I/O performance.",
            },
            {
              title: "Security and Resilience",
              description:
                "The BRYCK® has a built-in framework to protect and recover data from ransomware when operating at the Edge, data center or during physical transport. The software features self-healing capabilities, distinctive secret keys, AES 256-bit encryption. It is waterproof, shock/vibration resistant and tolerant to extreme temperatures.",
            },
            {
              title: "DataDart Service",
              description:
                "Specializes in short-term large data transport project needs, or recurring data transport and migration. DataDart facilitates efficient, secure and network-independent data migration across edge, cloud and data centers. Its flexible rental and subscription models allow customers to select timing, destination and data volume while leaving the rest to Tsecond.",
            },
            {
              title: "Comprehensive Use Cases",
              description:
                "The BRYCK® and DataDart are comprehensive solutions for Government agencies, supporting various use cases such as far-edge data capture and transport, flight data analytics, maritime on-site log analytics, data storage, AI model training and security and surveillance.",
            },
          ],
        },
        continuation: [
          "With Tsecond solutions, agencies can streamline data management, enhance interoperability, optimize resources and make informed decisions right at the data source through a real-time, integrated view of their data. The BRYCK® Platform has a unique, robust combination of hardware and software with specific applications in Government, defense, intelligence and warfare.",
          "“Carahsoft is pleased to partner with Tsecond to maximize the reach of its solutions through our contract vehicles and reseller ecosystem,” said Edward Walinsky, who manages AI and Machine Learning Solutions at Carahsoft. “Tsecond’s BRYCK Platform is a unique and valuable data solution. This partnership will bring true innovation in how Government agencies store, transport and analyze their data, enhancing data interoperability and accelerating AI and analytics in the Public Sector.”",
          "Tsecond’s solutions are available through Carahsoft’s SEWP V contracts NNG15SC03B and NNG15SC27B and ITES-SW2 Contract W52P1J-20-D-0042. For more information, contact the Carahsoft team at (703) 871-8548 or Tsecond@carahsoft.com; or Know More about Tsecond at https://tsecond.us/.",
          "About Tsecond: Tsecond specializes in seamless data capture and migration between any location, regardless of data size. With the BRYCK Platform – world’s smallest and lightest All-Flash, 1PB mobile data solution, Tsecond serves the evolving data needs of a variety of industries, including media and entertainment, aerospace and aviation, autonomous vehicles, government and defense and more. Its customers include Boeing, Picture Shop, Be4Post, Madison Square Garden Entertainment and other deployments in India and USA government and defense organizations. Tsecond is an AEI HorizonX portfolio company, the venture capital investment platform formed between AE Industrial and The Boeing Company. Visit us at https://tsecond.us/.",
          "About Carahsoft’s AI Portfolio: Carahsoft’s Artificial Intelligence (AI) Portfolio includes leading and emerging technology vendors that are enabling government agencies and systems integrators to harness the power of AI and ultimately meet mission needs. Supported by dedicated AI product specialists and an extensive ecosystem of resellers, integrators and service providers, we help organizations identify the right technology for unique environments and provide access to technology solutions through our broad portfolio of contract vehicles. Our AI portfolio spans solutions for Data Center & Hardware, Generative AI, Synthetic Data & Labeling, Autonomous Systems & Robotics and more. Know More about Carahsoft’s AI Solutions for Government here.",
          "About Carahsoft: Carahsoft Technology Corp. is The Trusted Government IT Solutions Provider, supporting Public Sector organizations across Federal, State and Local Government agencies and Education and Healthcare markets. As the Master Government Aggregator® for our vendor partners, we deliver solutions for Artificial Intelligence and Machine Learning, Cybersecurity, MultiCloud, DevSecOps, Customer Experience and Engagement, Open Source and more. Working with resellers, systems integrators and consultants, our sales and marketing teams provide industry leading IT products, services and training through hundreds of contract vehicles. Visit us at www.carahsoft.com.",
        ],
      },
    },
    {
      id: 6,
      BreadcrumbTitle: "Tsecond",
      issource: true,
      title:
        "Newfound flexibility for data migration to and from any cloud provider",
      slug: "flexibility-data-migration-cloud-provider",
      description:
        "Tsecond Inc. addresses the core challenges of cloud migration—high costs, poor application design and lack of strategy—and highlights the importance of physical data transport and fee-waivers for true data flexibility.",
      image: "/blogOPT/newfound.webp",
      tags: [
        "Cloud Migration",
        "Data Sovereignty",
        "Egress Fees",
        "Generative AI",
      ],
      readTime: "11 min",
      date: "Apr 30, 2024",
      author: {
        name: "Tsecond",
        // role: "Co-founder & CEO, Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          // "News\nBy Sahil Chawla published 30 April 2024\nCommon data migration challenges faced by organizations",
          "Cloud migration is not a new concept. Over a decade ago, businesses realized the limitations of their aging legacy systems had their limitations leading to mounting pressure to modernize their IT infrastructure and adapt to the rapidly evolving technologies.",
          "Cloud migration emerged as a compelling solution to navigate the complexities of the digital age and the landscape of IT infrastructure, resulting in a drastic change for data management.. The idea promised businesses improved efficiency, scalability, flexibility and cost savings for those who needed to thrive in a rapidly changing environment. It was further compounded by the fervor surrounding Digital Transformation. With the unforeseen arrival of the COVID-19 pandemic, moving to the cloud became urgent! Thus, companies jumped into cloud adoption before they were truly ready.",
          "Service providers portrayed cloud migration as ‘easy and simple’ only to realize later that the execution of cloud migrations was not as seamless as anticipated. Flexera 2023 State of the Cloud Report states that 66% of enterprise IT professionals list cloud migrations as a top challenge. The most common challenges of Cloud migrations were found to be: (1) high costs, (2) poorly designed applications for data migration from data centers to the cloud and (3) lack of strategy. Egress fees and the absence of solutions to move data out of the cloud left enterprises trapped; battling with obstacles and challenges with no way of going back.",
        ],
        keyAdvantages: {
          title: "Common Data Migration Challenges:",
          points: [
            {
              title: "High Costs",
              description:
                "Enterprise IT professionals are facing a significant financial drain today, as the process of cloud migration comes with its own set of costs. Enterprises are billed for all the data stored, regardless of whether they actively use it or not. Moreover, cloud providers impose egress fees that indirectly hinder companies from moving data out of the cloud. While solutions exist for migrating data to the cloud, the lack of support for extracting data from the cloud blocks enterprises from moving out data from the cloud posing adverse effects in both the short and long term.",
            },
            {
              title: "Poorly designed cloud applications",
              description:
                "Cloud providers utilize network-based data transfer for data migration, which presents multiple bottlenecks, including low throughput, inability to operate in remote conditions, vulnerability to data loss and security breaches and extended transfer durations lasting weeks or even months. Additionally, the cloud applications that run the migration have inefficiencies that need to be optimized. Although the applications have functions defined, customers are paying extra to make them work efficiently, leading to technical debt.",
            },
            {
              title: "Lack of strategy",
              description:
                "Most enterprises have legacy systems, disparate systems, multiple databases, structured and unstructured data. There are diverse data formats and requirements that were bottlenecked by cloud provider lock-ins, distributed applications and patchwork infrastructure. The allure of 'easy and simple' by service providers prioritized investing in cloud adoption, while the strategy on how to leverage the cloud was secondary; a pure recipe for failure. In the majority of cases, the strategy for cloud adoption was entrusted to consultancies rather than the internal team. Consequently, there was a lack of understanding of sound data architecture and data lineage.",
            },
            {
              title: "Game-changing tech",
              description:
                "Addressing these challenges is important because data stores will only continue to grow. Businesses expect stored data to grow by 30% annually. There is a growth in data-driven enterprises demanding fast data analysis for informed decision-making. But wait, there's more to it! The real reason we need to tackle those cloud migration hurdles head-on is the explosive growth in the use of generative AI. This game-changing tech opens up a world of opportunities for businesses to expand into new markets. Yet, all these exciting possibilities might just remain a distant dream if we don't deal with the existing technical debt or bear the brunt of extra expenses to integrate generative AI into our outdated cloud systems.",
            },
          ],
        },
        continuation: [
          "It's never too late to acknowledge a problem and commit to making a change. Enterprises should prioritize identifying what needs to change and devise actionable plans to effect those changes. Waving egress fees signals the need and importance of seamless data migration to and from any cloud provider. Before investing in cloud adoption and data migration, one should lay out a strategy establishing a sound data architecture ensuring high-quality data flow through the data pipeline. Having mature Cloud FinOps is key for successful cloud adoption. It is always best for the internal team to drive the roadmap, strategy, planning and deliverables as opposed to consulting the organization.",
          "“78% of survey respondents indicated that they use physical data transport/ migration solutions because data transfer over their networks could no longer keep up with capacity” states the IDC report. Thus, physical data migration is a powerful tool to address the challenges of network-based data migration as they are flexible, fast and simple. The recent move by Microsoft, AWS Cloud and Google Cloud to waive egress fees for its customers is a great next step for data mobility. Now, customers can move their data on their terms, with greater flexibility and efficiency. Thus, with proper analyses and planning, one can not only ensure seamless data migration but also ride the wave of Generative AI and new tech for driving revenues and retaining customers.",
        ],
      },
    },
    {
      id: 3,
      BreadcrumbTitle: "Tsecond & RED",
      issource: true,
      whitepaperurl: "/whitepapers/Tsecond_RED_Whitepaper_v1.2.pdf",
      title: "RED and Tsecond: Streamlining Multi-Camera Recording and Data",
      slug: "red-tsecond-multi-camera-workflow",
      description:
        "RED Digital Cinema, a leading manufacturer of professional digital cameras and accessories and Tsecond Inc., an AEI HorizonX growth stage portfolio storage system company, have developed an integrated workflow that allows producers to leverage the full creative and technical imaging benefits of utilizing RED digital cinema cameras for multi camera production, while eliminating burdensome media and data management.",
      image: "/blogOPT/red+tsecond.jpg",
      tags: [
        "RED Digital Cinema",
        "BRYCK",
        "Media & Entertainment",
        "Multi-Camera",
      ],
      readTime: "10 min",
      date: "Apr 27, 2024",
      author: {
        name: "Tsecond",
        role: "Company Update",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "Combining the capabilities of the RED V-RAPTOR 8K cinema camera, the RED Connect module, the RED SDK and Tsecond's BRYCK storage platform, they have devised a system to stream and write R3D files directly to high performance drive, bypassing recording to on-camera media. With up to 40-gigabytes-per-second of available throughput, the BRYCK easily scales to recording ten concurrent 8K 120fps streams, with room for many more. The resulting high-resolution, high-latitude R3D files are then immediately available to the workstations connected to the BRYCK, ready to be processed, edited and transferred. This eliminates the need for regular replacement and management of camera media throughout filming, as well as the ensuing data transfers required to compile, backup and distribute the data they contain. Minimizing these tasks is particularly important for production and emerging advanced imaging crews who film with multiple cameras concurrently.",
          "As a proof of concept, RED and Tsecond tested simultaneous recording of 10 RED V-RAPTOR Cameras, set to capture 8K 17:9 at 120 frames-per-second in MQ R3D quality. These settings yield an 800 MBps stream from each camera, which is output through the built-in RED Connect module's fiber connector and fed to a network switch's 10Gbe port. Either fiber or ethernet cables can be utilized to transmit from the V-Raptor to the switch, which is connected to the BRYCK storage system's server via dual 100Gbe connections.",
          'The NVMe based - BRYCKⓇ Platform is a secure portable storage solution that offers up to 1PB of capacity and very high throughput (up to 40 GB/s) in a rugged, compact and tamper-proof form factor. The NVME drives are contained in a brick-shaped weatherproof 4"x4"x9.5" enclosure that connects via its docking station—or Tray—to a high-performance server through which clients access the storage. This design enables the rapid and safe physical transit of large volumes of data; the high-capacity portable BRYCK storage module can easily be transported and connected to another Tray for data access, with AES 256-bit encryption, failure protection and military grade construction protecting its contents.',
        ],
        keyAdvantages: {
          title: "Key Features of the RED and BRYCK Integrated Workflow:",
          points: [
            {
              title: "Streamlined Workflow",
              description:
                "The BRYCK system communicates with the V-RAPTORS via SRT over TCP/IP. Stream Receiver, a simple utility within BRYCK's management software, allows users to set cameras as the data streams' sources and to configure the destination folders on the BRYCK for each camera's feed. Stream Receiver leverages the RED Connect library to verify the data and write it to the BRYCK storage as standard R3D files.",
            },
            {
              title: "Performance and Scalability",
              description:
                "Once the cameras and storage system are configured, recording can be triggered by the camera. A single BRYCK system can sustain recording from up to 20 cameras running at 8K/17:9/120fps/MQ, with a 256 TB BRYCK offering about 80 hours of capacity for those settings. All this available bandwidth and capacity also makes it possible to connect workstations to the system for immediate processing, review and transfer of the footage.",
            },
            {
              title: "Real-World Validation",
              description:
                "Be4Post, a DIT and video equipment rental company based in Paris, France, recently leveraged RED Connect and BRYCK in exactly this manner for a to-be-announced project filming in the Chilean desert. The weeklong production placed high demands on the system, with three V-RAPTORS recording upwards of 12 hours of footage a day each for a week, in challenging heat and dusty conditions.",
            },
          ],
        },
        continuation: [
          'We only had a month to set up the project from scratch. We set up a high-speed fiber network system which, together with RED Connect, the BRYCK storage and RED Control app, ensured robust recording in the harsh conditions expected in Chile. The combination of the BRYCK, the RED Connect modules and our existing workstations streamlined our workflow, allowing instant access to R3D files and speeding up rendering and post-production tasks. It was great to see it all working perfectly from the first test," said Mathieu Leclercq, Be4Post workflow specialist.',
          "BRYCK was built for this kind of workflow: effortlessly enabling capture at the highest possible quality and ensuring immediate access to the resulting data so that productions don't get bottlenecked by limited performance, or bogged down by data and media management,\" says Manavalan Krishnan, Tsecond's CTO.",
          "Jeff Goodman, VP of Product Management at RED, adds: \"BRYCK's integration with RED Connect opens the door to streamlined workflows and configurations for high-resolution and high-frame rate multi camera, live-to-tape, volumetric and immersive video projects in all types of environments. We're always looking to remove limitations that create complexity and compromises and that's exactly what we've done here.\"",
          "A white paper detailing the integrated workflow and its capabilities is available on the RED website at https://www.red.com/beyond-cinema-stories/tsecond-multi-cam-data.",
          'About RED: RED Digital Cinema is a leading manufacturer of professional digital cameras and accessories. In 2006, RED began a revolution with the 4K RED ONE digital cinema camera. By 2008, RED had released the DSMC (Digital Stills and Motion Camera) system that allowed the same camera to be used on award-winning features, television, commercials, music videos and magazine covers like "Vogue" and "Harper\'s Bazaar." Today, RED cameras are being used on some of the most lauded movies and episodics, including award winners "Mank," "Navalny," "Hacks," "100 Foot Wave," "The Last Dance," "The Queen\'s Gambit," and "Our Planet." RED\'s latest technology includes the highly advanced V-RAPTOR [X] and V-RAPTOR XL [X] systems, the flagship DSMC3 generation systems and the first available large format global shutter cinema cameras. The RED lineup also includes KOMODO-X and KOMODO, which features a global shutter sensor in a shockingly small and versatile form factor. Also available is RED Connect, a license-enabled feature that unlocks up to 8K 120FPS live cinematic streaming from the V-RAPTOR line of cameras. Find additional information at www.RED.com.',
          "About Tsecond: Founded in 2020, Tsecond specializes in seamless data capture and migration between any location, regardless of data size. The BRYCKⓇ Platform is the world's smallest and lightest All-Flash, 1PB mobile storage solution, enabling data transportation from edge locations to data centers or the cloud. Tsecond serves the evolving data needs of a variety of industries, including media and entertainment, aerospace and aviation, autonomous vehicles, government and defense and more. Its customers include Boeing, Picture Shop, Be4Post and more. With a robust global presence, Tsecond is at the forefront of revolutionizing data management for enterprises and organizations worldwide. Tsecond is an AEI Horizon X portfolio company, the venture capital investment platform formed between AE Industrial and The Boeing Company.",
          "Media Contact: Karbo Communications for Tsecond, tsecond@karbocom.com",
        ],
      },
    },
    {
      id: 5,
      BreadcrumbTitle: "Tsecond",
      issource: true,
      title: "Envisioning a great future – India as a SuperPower",
      slug: "india-superpower-vision-sahil-chawla",
      description:
        "India's journey to becoming a global superpower by 2047, focusing on deep tech, digitalization and human capital.",
      image: "/blogOPT/india_superpower.jpg",
      tags: [
        "India",
        "Superpower",
        "Digital India",
        "Artificial Intelligence",
        "News",
      ],
      readTime: "14 min",
      date: "Jan 2, 2024",
      author: {
        name: "Tsecond",
        // role: "Co-Founder & CEO, Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "By Tsecond Inc.",
          "India completed its 76 years of Independence this year. In retrospect, we have come a long way in being identified as a leading service-led growth engine across industries. A great testament is how India fared during the COVID pandemic when multiple large nations embraced extreme forms of protectionism as a defence mechanism, India supported the world with life saving medicines, vaccines and PPE kits.",
          "Over the last 7 decades, India grew to become world’s 5th largest economy (GDP in USD). The future appears bright too, especially at a time when traditional advanced economies are undergoing structural downshifts. IMF recently estimated in another 5 years, India can displace Japan and Germany to become the third largest, behind USA and China. Not just economic growth, politically also, India stands tall in upholding the spirit of Democracy. Our ability to forge multilateral relationships, thrust for a cleaner and greener planet and leadership in technology and medicines are receiving accolades across global platforms.",
          "It is natural for India to now aim at becoming a developed country and join the league of USA, UK or Japan, etc. In the next 25 years leading to 100 years of Independent India, it is my strong belief that we stand at the cusp of making a greater impact at a global stage. It will be in the way the country does business with the world or working towards becoming a powerhouse for technological innovations.",
        ],
        keyAdvantages: {
          title:
            "Having said that, India needs certain reforms to conquer its quest of becoming a Super Power:",
          points: [
            {
              title: "Decentralization of Government",
              description:
                "India needs a strong leadership and a strengthened role of decentralization of government at the state, village level. Decentralization of government can accelerate democratic India’s growth. Streamlining the top-down decision-making process can accelerate its growth.",
            },
            {
              title: "Technological Advancement",
              description:
                "As an engineer it is my strong belief that only deep Tech and Digital can make India a superpower by 2047. A nation’s growth is underpinned with technological advancement and how swiftly it adopts tech.",
            },
            {
              title: "Deep Tech and Digital Adoption",
              description:
                "The thrust from the Government of India with the Digital India initiative and the growing use of digital technology such as Artificial Intelligence, Machine Learning and Data Analytics across various private organisations is bringing a phenomenal shift in India’s growth and development.",
            },
            {
              title: "Skilled Workforce and AI Disruption",
              description:
                "Secondly, there is going be a lot of disruption in the way we work. With AI, lots of work will be done by BOTS, so it is important to have highly skilled labor to manage the AI which will also require upscaling the work, as we will have more leisure. The way society works will change and need to be adaptable. AI tools can be used as an Add-on tool to enable our lawyers, CAs, economists and leaders at large.",
            },
            {
              title: "Rural Income Growth",
              description:
                "I also believe that India will not become a superpower without a 10X growth in its rural income. With its technological prowess, India can transform the socio-economic condition of its villages.",
            },
          ],
        },
        continuation: [
          "Today, India is a force to be reckoned with in the domain of Information Technology without an iota of doubt. There is an anecdote that whenever Indian IT honchos used to go to the United States of America in the 90s, most of the time the investors would ask the question, “Where is India? Is it in Africa?”. A lot of water has flown under the bridge since then and India is today firmly on the technology and IT map of the world. IT today is one of the biggest contributors to the Indian economy and things are getting more exciting, thanks to the vision of Prime Minister, Mr. Narendra Modi.",
          "Moving on, I think adequate availability of physical and human capital is India’s greatest asset. Regarding human capital, steps like focussed skill development programmes, expansion of specialised colleges like IITs, IIMs and AIIMS as well as India’s National Policy on Education aim at harnessing our demographic dividend to create a new age work force. For any nation, a strong workforce is paramount for progress. India has a very large young population, with its peak being between 20 and 24. This young population is the biggest strength of India, provided they are trained and employed. They are very creative and have a strong urge to improve their living conditions. One has to empower them and they can be as good as one can imagine.",
          "India enjoys healthy bilateral relationships with most developed countries to achieve mutual goals of driving economic growth, job creation, innovation, inclusion and entrepreneurship. Free trade agreements between countries can create pathways for service exchange between two countries in fields like telemedicine consultancy, software development and IT services. Furthermore, India’s G20 presidency can be regarded as a historic moment, announcing its confirmation as a major global power, an event every bit as significant as China’s 2008 Olympics. India’s G20 presidency is the culmination of a year of milestones. The country has become the fourth to land on the moon, surpassed China as the world’s most populous country and overtaken the UK as the world’s fifth-largest economy.",
          "However, we have to overcome the mistakes of the past as we look forward to developing a new India that has more service-enabled offerings rather than just focusing on manufacturing expansion. We are at the crossroads. We do have choices to make. We should focus on how we distribute the gross across the people of the country and aim to make every Indian happy.",
        ],
      },
    },
    {
      id: 16,
      BreadcrumbTitle: "Tsecond & Blog",
      issource: true,
      title:
        "The Indo–US Strategic Partnership and Thrust on Technology: A Win-Win for Both Nations",
      slug: "indo-us-strategic-partnership-technology-win-win",
      description:
        "Explore how the Indo-US strategic partnership, strengthened through technology initiatives like iCET and INDUS X Summit, creates mutual benefits for both nations.",
      image: "/blogOPT/indo_us1.jpg",
      tags: [
        "Indo-US Partnership",
        "Technology",
        "Strategic Alliance",
        "Digital Innovation",
        "Emerging Technology",
      ],
      readTime: "7 min",
      date: "Sept 5, 2023",
      author: {
        name: "Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "Over the years, India's bilateral relationship with the United States has developed into a strategic partnership based on shared democratic values and common interests in global, bilateral and regional issues. Currently, India and the United States enjoy close relations as they work closely together with business and government leaders to achieve mutual goals of driving economic growth, job creation, innovation, inclusion and entrepreneurship. US President Joe Biden's presence at the G20 Summit held in Delhi, India along with other world leaders further reinforced the strong partnership both the countries enjoy. It only deepens co-operation between the US and India to fight global challenges.",
        ],
        keyAdvantages: {
          title: "Pillars of Indo-US Partnership",
          points: [
            {
              title: "Bilateral Cooperation Across Multiple Sectors",
              description:
                "The India-U.S. partnership encompasses trade and investment, defense and security, education, science and technology, cyber security, civil nuclear energy, space technology, clean energy, climate change, agriculture and health. Regular state visits and panel discussions by prominent leaders strengthen cooperation.",
            },
            {
              title: "Landmark Initiatives and Summits",
              description:
                "PM Modi's recent state visit resulted in the inaugural INDUS X Summit to accelerate U.S.-India defense co-development and co-production. The Initiative on Critical and Emerging Technology (iCET) was hailed as a major milestone in January 2023, establishing frameworks for strategic cooperation.",
            },
            {
              title: "Technology as the Defining Partnership Force",
              description:
                "President Biden and PM Modi affirmed that technology will play a defining role in deepening the partnership. Both leaders recommitted to fostering an open, accessible and secure technology ecosystem based on mutual confidence, reinforcing shared democratic values.",
            },
            {
              title: "Emerging Tech and Digital Innovation",
              description:
                "The successful partnership is underpinned by emerging technology such as Data Analytics and Generative AI. Under India's Digital Innovation Alliance 2023, Tsecond was selected to represent India and won the 'Audience Best Choice Award' for innovation in Secured Digital Infrastructure.",
            },
          ],
        },
        continuation: [
          "Indian Prime Minister Narendra Modi's recent state visit to the United States helped in nurturing the Indo-US bilateral relations. It was deemed a successful visit as it resulted in strengthening self-esteem of Indian Americans and increasing India's soft power through multiple collaborative initiatives.",
          "The INDUS X Summit explored opportunities that can benefit both countries' border security, maritime domain awareness and space situational awareness, thereby contributing to a more stable and secure Indo-Pacific region. The leaders welcomed the decision of NASA and ISRO to develop a strategic framework for human spaceflight cooperation by the end of 2023.",
          "Under India's G20 Presidency, renewed focus has been placed on strengthening multilateral institutions and international cooperation to tackle global challenges. The Strategic Trade Dialogue was launched in June 2023, directing both sides to undertake regular efforts to address export controls and enhance high-technology commerce.",
          "The dialogues and outcomes from recent gatherings including the INDUS X Summit, Investors roundtable in Palo Alto, India Delegation Dinner, SelectUSA Investment Summit and Aerospace & Defense Committee Roundtable have all been in resonance with the vision of both nations' leaders.",
          "Nurturing the Indo-US relationship will go a long way in enhancing the strategic partnership by promoting policies and adapting regulations that facilitate greater technology sharing, co-development and co-production opportunities between U.S. and Indian industry, government and academic institutions. The Leader's state visits and forums provide sustained momentum to bilateral cooperation, while the wide-ranging dialogue architecture establishes a long-term framework for engagement. Vibrant people-to-people interaction and support across the political spectrum in both countries will continue to nurture this vital bilateral relationship.",
        ],
      },
    },
    {
      id: 8,
      BreadcrumbTitle: "Tsecond & CRN",
      issource: false,
      title: "The 10 Hottest Data Storage Startups Of 2021",
      slug: "crn-hottest-storage-startups-2021",
      description:
        "CRN highlights Tsecond as one of the 10 hottest data storage startups of 2021 for the launch of its BRYCK portable and rugged petabyte-scale data migration and storage device.",
      image: "/blogOPT/top_10_startup.jpg",
      tags: ["CRN", "Startup", "BRYCK", "Data Storage", "2021"],
      readTime: "3 min",
      date: "Nov 17, 2021",
      author: {
        name: "Joseph F. Kovar",
        role: "Senior Editor, CRN",
        avatar: "/blogOPT/Joseph F. Kovar.webp",
      },
      content: {
        introduction: [
          "CRN is highlighting 10 data storage startups that made headlines in the last year with the unveiling of their first storage products aimed at improving data storage, data protection and/or data migration, whether on-premises, in the cloud, or some hybrid combination.",
          "Tsecond was named one of CRN’s 10 hottest data storage startups of 2021 following the launch of its first product, BRYCK—a portable, rugged, petabyte-scale data storage and migration device designed for mission-critical environments. Founded by CEO and co-founder Sahil Chawla, the San Jose, California–based company focuses on technology for capturing, processing, moving and storing massive volumes of data across on-premises, cloud and hybrid environments. Released in October, BRYCK delivers high-speed storage and recovery at capacities ranging from 128 TB to 1 petabyte, enabling rapid data movement in environments where performance, reliability and durability are essential. Tsecond has indicated that future versions of BRYCK will include smaller form factors, higher-capacity models and configurations optimized for specific workloads such as machine learning, analytics and edge deployments",
          "Joseph F. Kovar is a senior editor and reporter for CRN covering storage and non-tech-focused channel beats. He reports on data lifecycle management, business continuity, disaster recovery, data centers and key trends impacting the IT channel. He can be reached at jkovar@thechannelcompany.com",
        ],
      },
    },
    {
      id: 15,
      BreadcrumbTitle: "Tsecond & Blog",
      issource: true,
      title: "The True Costs of Big Data Migration and How to Combat Them",
      slug: "true-costs-big-data-migration-combat",
      description:
        "Understand the financial, time and productivity costs of big data migration and how BRYCK® provides solutions to combat these challenges.",
      image: "/blogOPT/big_data_migration1.jpg",
      tags: ["Big Data", "Data Migration", "Costs", "BRYCK", "Data Transfer"],
      readTime: "9 min",
      date: "Dec 5, 2021",
      author: {
        name: "Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "The process of moving big data is expensive, time-consuming and requires a substantial investment in equipment and resources. Identifying the true cost of this process enables organizations to evaluate the benefit of alternative solutions. Updated statistics show by the end of 2021, the world will have produced 79 zettabytes of data, much of it generated in edge environments. At present, the fastest way to transfer large quantities of data is not via digital methods, but by copying the data to a disk drive. The disks often consist of full-sized truck-mounted storage. The truck then transports the data to its destination, where it is uploaded to the data center. After this, the disk is wiped clean and ready for reuse. Most data transport vehicles can carry a maximum of around ten petabytes of data, so moving the data generated in 2021 will take more than 7 million trips.",
        ],
        keyAdvantages: {
          title: "Understanding and Combating Big Data Migration Costs",
          points: [
            {
              title: "Financial Cost",
              description:
                "Direct costs include hardware, infrastructure, computing equipment, overhead for premises and staffing, software licensing and moving costs. A 40TB data warehouse costs around $880,000 annually. Indirect costs include hiring qualified staff for data conversion and transport, data scrubbing by data scientists, security maintenance and ransomware penalties. Delays cause data obsolescence, losing insights that could boost profitability.",
            },
            {
              title: "The Cost in Wasted Time",
              description:
                "The longer it takes to access data and apply insights, the higher the cost in lost productivity and revenue for organizations in data-driven markets. Flight data captured at the moving edge can have significant safety implications if processed fast enough. Time delays impact both financial metrics and critical safety decisions.",
            },
            {
              title: "The Price of Slow Transfer Speeds",
              description:
                "Migrating large amounts of data can take hours, days, or weeks. Even 5G can take up to two years to upload a petabyte. Traditional methods face processing, queueing, transmission, packet-switching and propagation delays. At 40 GB per second, BRYCK® offers faster throughput than most alternatives with advanced algorithms for efficient storage utilization.",
            },
            {
              title: "The Cost in Lost Productivity",
              description:
                "Data analysis is critical in modern workplaces. Organizations with advanced analytics are twice as likely to be top performers and five times more likely to make crucial decisions faster. Low productivity costs organizations around $1.8 billion annually. Better data access enables faster decision-making, critical changes, improved performance and enhanced quality control.",
            },
            {
              title: "Resource Repercussions",
              description:
                "Tying up human, financial and digital resources for extended data migration periods has major implications. More human resources mean higher staffing costs and lower profit margins. Increased digital resource usage lowers communication speed while pushing costs up. Consequences include environmental pressure, low shareholder satisfaction and funding challenges.",
            },
          ],
        },
        continuation: [
          "BRYCK® reduces financial costs by minimizing capture, transport and access time. The lightweight device and sophisticated software eliminate high long-distance WAN costs, reducing ongoing financial expenses significantly.",
          "By eliminating traditional data transfer methods, BRYCK® overcomes time delay issues. Fast, simple edge data capture and rapid transport to data centers saves time and enables immediate processing. Added benefits include resource savings and urgent access to productivity and profitability insights while reducing security risk exposure.",
          "BRYCK®'s multi-threaded parallel data transfer and advanced data placement algorithms enable faster analysis preparation. Organizations gather and apply findings sooner while reducing resource quantity and costs. Moving big data faster is critical for informed decision-making and competitive advantage.",
          "With improved data access and insights BRYCK® provides, companies make better decisions faster, implement critical changes, boost employee performance and enhance quality control. These actions lead to increased productivity with higher profitability, amplified staff morale, better talent retention and competitive advantage.",
          "By deploying BRYCK®'s data management solution, organizations capture and transport data from any environment, including remote and moving edges. Companies free up resources for other uses while experiencing rapid data access benefits. The costs associated with big data migration don't have to be this pervasive. As data usage grows and its value intensifies, companies need new transportation ways. BRYCK® is rugged, portable, blazing fast and secure, promising to revolutionize big data migration in the near future.",
        ],
      },
    },
    {
      id: 14,
      BreadcrumbTitle: "Tsecond & Blog",
      issource: true,
      title:
        "How Big Data Users Can Capture, Process and Transfer Edge Data at Scale",
      slug: "how-big-data-users-capture-process-transfer-edge-data-scale",
      description:
        "Discover how to capture, process and transfer big data at scale at the edge, from the history of data storage to modern solutions like BRYCK®.",
      image: "/blogOPT/bigdatausers.webp",
      tags: [
        "Big Data",
        "Data Storage",
        "Edge Computing",
        "Data Transfer",
        "BRYCK",
      ],
      readTime: "10 min",
      date: "Nov 7, 2021",
      author: {
        name: "Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "The urge to record things and pass them along is inherent in our nature and humans have followed this instinct for thousands of years. However, since the start of the 20th century, our ability to capture, store and transfer data has expanded to the point where we now need sophisticated technology to manage it. As big data continues to increase, we must find new ways to manage it at scale. It's vital for business success to understand how much data exists, how we can expect it to increase in the future and to identify ways to manage and optimize its value.",
        ],
        keyAdvantages: {
          title: "Data Evolution, Growth and Industry Solutions",
          points: [
            {
              title: "The Origins of Data Collection",
              description:
                "Data storage evolved from tablets and scrolls to magnetic drums in 1932, then RAM devices in 1947, magnetic tape drives in 1951, hard disk drives in 1956, floppy disks in 1967, CDs in 1982 and later DVDs, USB flash drives and cloud storage in 2006. This rapid evolution directly reflects humanity's increasing need to store and manage growing quantities of data.",
            },
            {
              title: "How Much Is Data Growing?",
              description:
                "In 1997, there were a few thousand petabytes of information. By 2008, servers processed 9.57 zettabytes. By 2021, the world generated 79 zettabytes, projected to reach 181 zettabytes by 2025. Currently, 5.15 billion are mobile users, 30 billion IoT devices interact daily and 2.5 quintillion bytes are generated daily. Aircraft now create 30 times more data than previous generations, with predictions of 5-8 terabytes per flight by 2026.",
            },
            {
              title: "Prime Data Generators",
              description:
                "Civil Aviation generates 252.8 million TB annually from 38.9 million flights. Media and Entertainment generates massive data from streaming, content delivery and audience analytics. Autonomous Vehicles collect continuous data for design improvement. Data Centers face synchronization delays with dedicated WANs costing $1.2 million yearly. Government and Defense agencies handle sensitive data requiring highest security standards. Content Exchanges in healthcare, aviation and finance transfer over 100TB weekly at significant costs and delays.",
            },
          ],
        },
        continuation: [
          "BRYCK®'s data management solution makes it possible to download and process airline data at the edge in seconds, or transport it quickly and cost-effectively to a data center. With BRYCK®, media and entertainment users can upload data rapidly from on-set locations and transport it to post-production facilities within a day, eliminating storage overheads and dedicated network costs.",
          "BRYCK® integrates directly with vehicle data acquisition units to capture autonomous vehicle data at the edge. The solution can process the data immediately or transport it quickly to the data center for long-term management. For data centers, BRYCK® eliminates interconnectivity costs and reduces synchronization time from days to hours.",
          "For government and defense organizations, BRYCK® enables rapid data capture and transport using secure couriers with proper clearance. For content exchanges in healthcare, aviation and financial services, BRYCK® enables fast transport between sites in less than one day while eliminating the cost of dedicated high-speed networks.",
          "The circumstances surrounding how much data exists in the world have raised concerns among business leaders and scientists for several years. Without viable ways to process and move large quantities of big data, humanity can't reap the benefits of available information. Tsecond's BRYCK® is the solution to current and future challenges posed by big data. This rugged, hand-held solution offers high-quality data capture at moving or remote edges, blazing fast data uploads and analytics and machine learning to process data rapidly. Secure, cost-effective and fast physical transport reduces the risk of data compromise and ransomware costs. It's a new day and a new way. It's time to explore BRYCK®.",
        ],
      },
    },
    {
      id: 13,
      BreadcrumbTitle: "Tsecond & Blog",
      issource: true,
      title: "Top 3 Challenges of Moving Big Data at the Edge",
      slug: "top-3-challenges-moving-big-data-edge",
      description:
        "Learn about the three critical challenges companies face when moving big data at the edge: cost, speed and security and how BRYCK® provides solutions.",
      image: "/blogOPT/moving_bigdata.webp",
      tags: [
        "Big Data",
        "Edge Computing",
        "Data Migration",
        "BRYCK",
        "Data Storage",
      ],
      readTime: "8 min",
      date: "Nov 1, 2021",
      author: {
        name: "Tsecond",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "Moving big data creates challenges for companies across the board. In this third decade of the 21st century, the way we use data has fundamentally changed how we do business, how we communicate and how we use information for decision-making purposes. This rate of change is accelerating faster than ever before due to the use of emerging technologies such as the Internet of Things (IoT), connected devices, machine learning and the rise in data processing and storage. Increasingly, companies are capturing and processing data closer to the edge where it's generated. These edge environments can be static, such as media, entertainment and healthcare industries, or they can be moving sources such as autonomous vehicles and airborne systems. Managing data at the edge reduces delays that often occur during transportation across distances and prevents losses caused by corrupted files, unexpected shutdowns, or equipment failures. However, transporting massive amounts of data creates three common significant challenges.",
        ],
        keyAdvantages: {
          title: "The Three Critical Challenges",
          points: [
            {
              title: "Challenge #1: Cost",
              description:
                "Moving big data can incur huge costs for companies. Data transfers require dedicated high-speed networks between endpoints and when networks cannot be setup, customized solutions become expensive and error-prone. These issues impact data usage with delays in implementing real-time insights, reduced revenue from bottlenecks and security breaches during migration.",
            },
            {
              title: "Challenge #2: Speed",
              description:
                "Moving data fast and accurately becomes mission-critical as datasets grow. Most tools cannot transfer large volumes at high speeds across global distances due to internet transfer limitations from the 1970s. Slow big data transfers delay critical insights in industries like aviation where every flight generates massive data that needs rapid processing.",
            },
            {
              title: "Challenge #3: Security",
              description:
                "Cybersecurity is critical during data transfer. When data moves over networks, it becomes vulnerable to breaches and corruption. Global challenges include network interruptions, increasing regulations, ransomware risks and email compromise. Physical transportation methods eliminate network-based dangers like hacking and bandwidth constraints.",
            },
          ],
        },
        continuation: [
          "BRYCK® addresses cost challenges by providing a fast, easy-to-use method of moving big data between two endpoints. The powerful, high-density solution packs up to a petabyte of data into a portable device. Small and lightweight, BRYCK® takes a single physical trip to move data from the edge to a data center or the cloud, bypassing expensive costs and time restraints. Organizations can carry out big data transfers without maintaining a hefty budget each month.",
          "BRYCK® solves the problem of slow data transfer time by eliminating physical obstacles impacting data capture at the edge. The portable mass storage device has a super-fast I/O architecture, high-speed encryption capabilities and uses multithreaded parallel processing to move datasets simultaneously. Where previously organizations needed days or weeks to move data, BRYCK® transports data easily and provides access in less than a day. For companies looking to differentiate their offering through accelerated access to data at the edge, faster transfer times reduce costs, enhance customer service and increase profitability.",
          "BRYCK® addresses many security threats by enabling secure big data transfer. High-speed, AES 256-bit data encryption ensures security against social engineering hazards. The use of physical transportation methods eliminates network-based dangers such as delays or interruptions resulting from bandwidth constraints, hacking, time delays and data losses. The product is tamper-resistant and easily transported in a tough, secure, handheld case. BRYCK®'s focus on security benefits users by reducing the risk of damaged data and security breaches. Organizations can save money spent on compliance fines and damage repair. By protecting privacy, companies enhance trust with customers and maintain their organization's integrity, values and ethics.",
          "BRYCK® offers a solution that addresses three common challenges of big data transfer: cost, speed and security. This product delivers added benefits that make moving big data simpler and more reliable, such as a user-friendly dashboard that allows easy performance monitoring and usage. Additionally, the device can be wiped clean and reused repeatedly, reducing the expense associated with managing and transporting data. Eliminate the need for costly long-distance network connections, avoid data transfer delays and completely bypass network-based security threats with BRYCK®.",
        ],
      },
    },
    {
      id: 4,
      BreadcrumbTitle: "Tsecond",
      issource: true,
      title:
        "Tsecond Launches BRYCK®, a Revolutionary Solution to Capture, Process, Move and Store Up to a Petabyte of Data from Any System, Anywhere",
      slug: "bryck-launch-petabyte-portable-storage",
      description:
        "Tsecond, a developer of technologies that reimagines how enterprises and organizations activate big data, today announced the release of BRYCK, a powerful, one-of-a-kind solution that makes it easy to capture, process, move and store data from anywhere.",
      image: "/blogOPT/tsecondlaunchesbryck.jpg",
      tags: ["Product Launch", "BRYCK", "Edge Computing", "Data Transport"],
      readTime: "12 min",
      date: "Oct 11, 2021",
      author: {
        name: "Tsecond",
        role: "News Release",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "Customers can collect up to a full petabyte (PB) of data, store and recover it at incredibly fast speeds, in a portable media device that is small enough to carry in one hand, but tough enough to handle the harshest environments. BRYCK enables the future of edge computing and storage for applications where data density and mobility are key enablers.",
          "Tsecond is a portfolio company of AEI HorizonX, a strategic venture capital fund anchored by Boeing. The company recently closed its $4.6 million Series A funding round consisting of institutional and individual investors.",
          '"For companies to gain a competitive advantage, they must be able to capture, manage, protect and analyze massive amounts of unstructured or semi-structured data wherever it is generated," said Sahil Chawla, co-founder and CEO of Tsecond. "BRYCK accelerates the delivery of big data to where it is needed and enables leaders to access those powerful insights to make faster, smarter decisions across every corner of their organization. No longer is a majority of the data left stranded at the edge."',
        ],
        keyAdvantages: {
          title:
            "BRYCK is deployable for a wide range of use cases including air and space, autonomous vehicles, ships, defense, manufacturing, film production, data centers and more. BRYCK provides:",
          points: [
            {
              title:
                "Increased speed to move and process data created at the edge:",
              description:
                "Customers will have access to time-critical data in hours versus weeks or months. 5G or dedicated fiber lines take too long – data-inactionability is a real problem.",
            },
            {
              title: "Increased processing speed at the edge:",
              description:
                "Processing speed is only as fast as you can read/write to storage; BRYCK has hundreds of gigabits of bandwidth.",
            },
            {
              title: "Cost reduction:",
              description:
                "Petabyte-level storage capacity and compact design reduces the number of physical trips required to move data from the edge to the data center to the cloud.",
            },
            {
              title: "One solution model:",
              description:
                "System can be used for all data types and formats. BRYCK simplifies architecture and data access through standard interfaces and a user-friendly solution dashboard for easy device and performance monitoring.",
            },
            {
              title: "Deployment to anywhere data is created:",
              description:
                "Customers can capture large amounts of data from any type of edge, moving and static.",
            },
            {
              title: "Network-Free Big Data Transport:",
              description:
                "Eliminates the need for high-cost long-distance network connections between two sites. Transports data from remote locations that does not have network access and eliminates data transfer delays due to slow network performance.",
            },
            {
              title: "Secure Data Transfer:",
              description:
                "High-speed data encryption and physical data transport completely eliminates network-based security threats during the transfer.",
            },
            {
              title: "Size-Weight-and-Power:",
              description:
                "BRYCK is low weight, small in size, uses less power than a hairdryer and is transportable in a suitcase.",
            },
          ],
        },
        continuation: [
          "BRYCK is a perfect solution for enterprises and organizations that need to collect and access large quantities of data quickly and more efficiently to support efforts such as data migration and cloud computing. The solution also removes the physical obstacles to data capture at edge environments. Until now, companies needing to transport up to 1PB of data have relied upon expensive and time-consuming processes to get their data to the desired physical location. For example, large data transfers from on-premises to data centers have historically required large semi-trucks full of servers to transfer the data, wasting days if not weeks.",
          'With BRYCK, customers will have access to all their data within a few hours. No trucks or heavy equipment is needed for transportation. BRYCK weighs about 12 pounds and is approximately 5" x 5" x 10" in size; it can be easily transported via its rugged and secure handheld case in person or preferred shipping practice. Additionally, BRYCK\'s user-friendly dashboard makes it simple to monitor performance and usage, as well as wipe clean to reuse again and again, saving customers valuable time and money.',
          '"Data is obviously critical to how companies operate today and we can differentiate several products by accelerating our access to data from edge environments," said Hayden Shea, senior manager of portfolio development at Boeing.',
          '"The BRYCK is revolutionary in its ability to quickly collect mass amounts of data from anywhere while also being as mobile as a USB drive," said Michael Lohnert, partner with AEI HorizonX. "The opportunities are truly mind blowing when you consider that previously stranded and unactionable data is now actionable. Companies will be able to act on data in real-time or easily upload raw data to the cloud for further analysis. The velocity at which BRYCK gets data into the hands of users will change industries; from advancing autonomous vehicle algorithms and sensor data analysis, to predictive maintenance algorithms and insights. I\'m excited that AEI HorizonX, working alongside Boeing, is a key partner to support Tsecond."',
          "To Know More, visit www.tsecond.ai.",
          "About Tsecond: Founded in 2020, Tsecond is a AEI HorizonX portfolio company working to accelerate the value of the global datasphere by addressing the complexities of mass data generation. Tsecond solutions focus on the speed, efficiency and security of data collection, enabling big data to be processed, analyzed and actioned faster than ever before. Headquartered in San Jose, California, Tsecond is funded by AEI HorizonX, TSECINV Group, Dhanani Private Equity Group, KK&N Investors and individual investors. To Know More about Tsecond and any of its products please visit www.tsecond.us",
          "About AEI HorizonX: HorizonX was formed as the corporate venture capital arm of Boeing in 2017 and is now managed by AE Industrial Partners, a private equity firm specializing in aerospace, defense & government services, space, power generation and specialty industrial markets. AEI HorizonX has been an active participant in venture capital within its core strategic areas of focus, investing in more than 40 startups globally and building countless relationships and partnerships across the aerospace, technology and investing ecosystem. AE Industrial Partners invests in market-leading companies that can benefit from its deep industry knowledge, operating experience and relationships throughout its target markets. AE Industrial Partners is a signatory to the United Nations Principles for Responsible Investment and the ILPA Diversity in Action initiative. Know More at www.aeroequity.com.",
        ],
      },
    },
  ],

  topBlogs: [
    {
      id: 9,
      BreadcrumbTitle: "Tsecond & DEVCOM",
      issource: false,
      redirectUrl: "/partners/devcom",
      title:
        "Tsecond Inc. Signs Cooperative Research & Development Agreement with U.S. Army DEVCOM C5ISR Center",
      slug: "tsecond-devcom-crada-agreement",
      description:
        "Tsecond Inc. enters into a Cooperative Research & Development Agreement (CRADA) with the U.S. Army Combat Capabilities Development Command C5ISR Center to evaluate reduced-SWaP AI computing systems for Army-relevant missions.",
      image: "/usecaseOPT/tsecond-press-release-rounded.png",
      tags: ["DEVCOM", "Defense", "CRADA", "AI Computing", "C5ISR", "Edge AI"],
      readTime: "10 min",
      date: "Nov 24, 2025",
      author: {
        name: "Dr. Raj Iyer",
        role: "President, Global Public Sector Markets",
        avatar: "/aboutimages/optimise/tsec-team-4-raj.webp",
      },
      content: {
        introduction: [
          "Tsecond Inc., a defense tech company specializing in mission-critical, low SWaP edge AI and storage infrastructure, today announced it has entered into a Cooperative Research & Development Agreement (CRADA) with the U.S. Army Combat Capabilities Development Command (DEVCOM) Command, Control, Communications, Computers, Cyber, Intelligence, Surveillance and Reconnaissance (C5ISR) Center.",
          "The CRADA establishes a collaborative framework for evaluating the performance of Tsecond's reduced-SWaP (size, weight and power) AI computing system in support of U.S. Army-relevant missions. The research effort will focus on assessing the execution of AI/ML-based Aided Target Detection and Recognition (AITDR) models under realistic operational workloads.",
          "The agreement, executed under the authority of the Federal Technology Transfer Act of 1986, will allow joint testing, demonstrations and exploratory research between Tsecond and the C5ISR Center. The collaboration aligns with the Army's mission to advance next-generation technologies for intelligence, surveillance and reconnaissance, ensuring U.S. forces maintain a decisive edge in contested and data-intensive environments.",
        ],
        keyAdvantages: {
          title: "Devcom-Enabled AI for Mission Intelligence",
          points: [
            {
              title: "Real-Time Edge Intelligence",
              description:
                "Devcom and Tsecond work together to bring advanced AI and data processing capabilities directly to the tactical edge, enabling defense and government teams to act on critical information in real time. By combining ruggedized storage, secure data movement and accelerated analytics, the solution transforms raw sensor data into mission-ready intelligence, even in bandwidth-constrained or disconnected environments.",
            },
            {
              title: "High-Rate Stream Processing",
              description:
                "This integrated architecture supports high-rate streams from full-motion video, radar and other ISR platforms, applying AI models for detection, classification and alerting without needing constant connectivity to central data centers. The result is faster decisions, reduced analyst workload and a more resilient intelligence pipeline that keeps pace with rapidly evolving mission demands.",
            },
            {
              title: "Field-Validated Technology",
              description:
                "For Tsecond, the CRADA represents an opportunity to incorporate direct field feedback into future iterations of its products, ensuring its edge AI infrastructure continues to meet the stringent performance, security and interoperability standards demanded by modern defense operations.",
            },
            {
              title: "Long-Term Development Commitment",
              description:
                "The collaboration enables real-world validation of BRYCK's capabilities in mission-critical scenarios, providing valuable insights that will shape the next generation of edge AI solutions for defense applications. The CRADA has an initial duration of three years, with the potential for extension up to five years, allowing for comprehensive testing and iterative development cycles.",
            },
          ],
        },
        continuation: [
          '"This collaboration with the U.S. Army C5ISR Center represents a significant milestone in advancing ruggedized, high-performance AI computing for defense applications. By combining our expertise in portable petabyte-scale storage and real-time AI inferencing with the Army\'s mission-driven requirements, we aim to accelerate the deployment of advanced solutions for the tactical edge," said Dr. Raj Iyer, President, Global Public Sector Markets at Tsecond.',
          "By working directly with the Army's premier research and development organization, Tsecond gains access to operational requirements and use cases that are essential for developing technology solutions that truly meet warfighter needs. This partnership ensures that BRYCK's edge AI infrastructure is tested and refined under real-world conditions.",
          "Tsecond is a defense tech company specializing in mission-critical, low SWaP edge AI and storage infrastructure. Its flagship product, BRYCK, is engineered for secure, high-speed and rugged edge AI processing, enabling customers to operate efficiently in the most complex and mission-critical environments.",
        ],
        callToAction: {
          text: "For more information about Tsecond and its BRYCK platform:",
          links: [
            {
              text: "Contact Tsecond",
              url: "mailto:pr@tsecond.ai",
            },
            {
              text: "Learn About BRYCK",
              url: "/products/bryck",
            },
          ],
        },
      },
    },
    {
      id: 10,
      BreadcrumbTitle: "Tsecond & BigBear.ai",
      issource: false,
      redirectUrl: "/partners/bigbear-ai",
      title: "BigBear.ai Shares Rise After AI Partnership With Tsecond",
      slug: "bigbear-ai-tsecond-partnership-us-military",
      description:
        "BigBear.ai and Tsecond partner to deliver AI-enabled infrastructure for mission-critical U.S. military operations by combining BigBear.ai's ConductorOS with Tsecond's BRYCK platform.",
      image: "/usecaseOPT/bbai1.webp",
      tags: ["BigBear.ai", "Partnership", "U.S. Military", "Edge AI", "BRYCK"],
      readTime: "5 min",
      date: "Oct 13, 2025",
      author: {
        name: "Chris Wack",
        role: "Wall Street Journal Reporter",
        avatar: "/aboutimages/shadowman.jpeg",
      },
      content: {
        introduction: [
          "BigBear.ai shares were 17% higher, at $8.46, after the company entered into a strategic partnership with Tsecond to deliver AI-enabled infrastructure for mission-critical operations for the U.S. military.",
          "The AI technology company said the collaboration combines BigBear.ai's ConductorOS orchestration platform with Tsecond's BRYCK platform, enabling U.S. national security organizations to deploy AI more rapidly and reliably.",
          "BigBear.ai said the joint technology will provide mission-ready infrastructure that simplifies deployment and management of AI, allowing tactical teams to make faster, more informed decisions without dependence on full connectivity or cloud compute.",
        ],
        keyAdvantages: {
          title: "Key Benefits of the BigBear.ai and Tsecond Joint Solution:",
          points: [
            {
              title: "Enhanced Situational Awareness",
              description:
                "The company said key benefits include quicker situational awareness through real-time, multidomain sensor data processing and ",
            },
            {
              title: "Disconnected Operations",
              description:
                "Enables enhanced threat detection and decision-making in contested or disconnected environments.",
            },
          ],
        },
      },
    },
    {
      id: 11,
      BreadcrumbTitle: "Tsecond & Picture Shop",
      issource: false,
      whitepaperurl: "/whitepapers/Tsecond_Picture Shop_Whitepaper_v1.7.pdf",
      title:
        "Picture Shop Accelerates Its Dailies Workflow With Tsecond's BRYCK Storage",
      slug: "picture-shop-accelerates-dailies-workflow-with-bryck",
      description:
        "Picture Shop, one of Hollywood's top dailies operations, integrated Tsecond's BRYCK Platform to double ingest speeds and enable concurrent processes like color grading and MD5 calculations, cutting turnaround time from 14 hours to under 8.",
      image: "/blogOPT/postperspective_bryck.png",
      tags: [
        "Picture Shop",
        "Dailies Workflow",
        "Media & Entertainment",
        "BRYCK",
        "Post Production",
      ],
      readTime: "15 min",
      date: "Nov 21, 2023",
      author: {
        name: 'David "TekDave" Graubard',
        role: "Industry Publication",
        avatar: "/blogOPT/Dave TekDave Graubard.jpg",
      },
      content: {
        introduction: [
          "Today's film and television productions generate massive amounts of data, including video footage, audio recordings, metadata, reference images and 3D scans. Transferring, managing and processing all this media, while keeping pace with the ultra-dynamic creative process, is a daunting technical and operational challenge. And sometimes just thinking about it keeps Dave \"TekDave\" Graubard up at night. That's because, as global senior systems engineer at Picture Shop, Graubard is responsible for keeping one of Hollywood's top dailies operations running smoothly night after night.",
          '"Five terabytes per show per night is not uncommon anymore," Graubard says of the average amount of raw footage captured by the series and films Picture Shop supports. "Most shows will shoot somewhere between two and three, or even between three and four hours of footage a day. And the volume of data depends upon what camera they\'re using. So, if it\'s an ARRI 65 or ARRI 35, it\'s going to be a bigger load."',
          "Picture Shop's Dave \"TekDave\" Graubard It's clear to Graubard that with cinema cameras continuing to evolve towards greater resolution and color precision, Picture Shop's dailies teams will need to manage greater volumes of footage every year. Faced with this ever-growing influx of data, Graubard is on a perpetual quest to accelerate Picture Shop's dailies processing workflow to make sure that the productions' editors, producers and directors always find the previous day's footage ready for review early the next morning. \"In dailies, we live from night to night,\" he remarks.",
          'The pressure to deliver consistently is enormous, as turnaround is of paramount concern. "One of the major concerns for filmmakers is that their dailies will be delivered on time," notes David Waters, managing director of Picture Shop in Hollywood.',
        ],
        keyAdvantages: {
          title: "BRYCK's Core Design and Performance Impact:",
          points: [
            {
              title: "Modular Performance",
              description:
                'The NVMe-based BRYCK Platform is a secure, portable storage solution that offers up to 1PB of capacity and very high throughput (40 GB/s) in a rugged, compact and tamper-proof form factor. The NVMe drives are contained in a brick-shaped 4"x4"x9.5" enclosure that connects via a tray to a high-performance server through which the workstations can access the storage. This modular design enables rapid and safe physical transit of large volumes of data; the high-capacity portable BRYCK storage can move from tray to tray.',
            },
            {
              title: "Ingest Speed Improvement",
              description:
                '"Looking at it super simply, with 16-gig fibre channel drives, we were pretty much topping out at around 800 to 900 megabytes per second at ingest. With the 25-gig NVMe drives in the BRYCK, we\'re able to copy at 1500 to1600 megabytes a second. So twice as fast, nearly. It gives us a 50% benefit in just the ingest," says Graubard.',
            },
            {
              title: "Concurrent Workflows",
              description:
                '"What the BRYCK really allows us to do is carry out multiple concurrent processes at once. That\'s the big benefit. So, yes, we can ingest faster, but as we\'re ingesting, we can also do MD5 calculations, which then allows us to actually start color grading while we\'re still ingesting," he explains. "It was something that we were not able to do at the same time (with our previous storage topology) because it would drag down the speed of the drives."',
            },
            {
              title: "Efficiency and Simplicity",
              description:
                "These efficiencies achieved by accelerating processes and performing them in parallel add up — in all, Picture Shop estimates that leveraging BRYCK enables the team to get their night's work done in under eight hours, rather than the usual 12 to 14 hours. BRYCK's ability to sustain many concurrent streams also allows Graubard to simplify Picture Shop's storage topology. \"We're doing six shows a night on average [on a single 128TB BRYCK] and our calculation is that the BRYCK should be able to handle eight shows easily [with four operators working concurrently].\"",
            },
          ],
        },
        continuation: [
          "When Graubard learned about Tsecond's BRYCK storage platform and its ultra-fast read and write performance, he saw an opportunity to shave hours off the turnaround time for dailies creation and delivery by parallelizing processes that previously had to be performed sequentially. The dailies colorists' Mac, Linux and Windows workstations — running Colorfront's OSD and ExD, as well as Baselight's Daylight — connected to BRYCK over 25 GbE network via StorNex.",
          'Graubard worked with the Tsecond engineering team, which is led by CTO Manalavan Krishnan, to integrate BRYCK within their existing and familiar StorNext environment, rather than utilizing SMB or NFS. "It worked well for us and it allowed us to continue to work in the way that our workflows were designed," notes Graubard.',
          "Picture Shop counts Hollywood's leading studios, producers and streamers among its customers, who have come to expect high quality dailies delivered on time through workflows that adapt to the unique needs and circumstances of their projects. Every night, Picture Shop's colorists and their support team execute a slew of technical and creative processes to validate the footage they've received and prepare it for editing and review the next day, including: Ingesting and verifying the video and audio files received from set. Performing technical quality control (QC) of the footage. Processing media by extracting, resizing and framing the image, adding metadata, balancing color and syncing audio. Rendering and encoding deliverables. Backing-up the original footage to LTO tapes for safekeeping and future finishing.",
          "BRYCK's performance and high throughput also allows the data back-up process to start earlier and to happen concurrently with other throughput-intensive operations such as color correction and rendering. The creation of deliverables can also begin earlier, as concurrent encoding operations do not degrade the playback performance that is crucial for the colorists to do their work. \"Anything that allows colorists to do multiple things at one time, without having to sit around and wait for a task to complete, improves their night,\" notes Graubard. \"They're under pressure. So, when they can complete their night in the time allotted to them, they're happy. They're elated.\"",
          "Moving to BRYCK also yields greater resiliency and stability, which are critical when dealing with precious original camera data. BRYCK's self-healing software provides automatic error detection and recovery, as well as data protection from hardware failure beyond typical RAID 5 and RAID 6 configurations.",
          "At this point, Graubard feels the BRYCK has been thoroughly battle-tested. \"The important thing is that in the four or five months since the initial integration, I haven't had to jump in and fix anything,\" says Graubard, who feels his time and energy are better used resolving project specific challenges or innovating new efficiencies. \"What I'm looking for is not spending engineering time dealing with hardware. One of the great things about the BRYCK is that we're not seeing shifts in performance; whether it's 80% full, 40% full — the speeds that we need are there and they're continuing to be there.\"",
          "Graubard and the Picture Shop team are now eager to leverage the BRYCK platform's capacity, performance and resiliency across other post production workflows. \"In everything that we're looking at right now — whether it's computers, infrastructure, storage, network — it's all about efficiency,\" notes Waters. \"How can we make this a more efficient place for both our talent and our clients to work?\" For Picture Shop, BRYCK is the answer. © 2023 postPerspective. All Rights Reserved.",
        ],
      },
    },
    {
      id: 12,
      BreadcrumbTitle: "Tsecond",
      issource: true,
      title:
        "Tsecond Names Former U.S. Army CIO to Spearhead Public Sector Growth",
      slug: "raj-iyer-president-public-sector",
      description:
        "Defense tech veteran joins Tsecond leadership as militaries modernize their infrastructure for decision dominance at the tactical edge. Tsecond appoints Raj Iyer, former U.S. Army CIO, as President of Public Sector Markets.",
      image: "/blogOPT/tsecondarmycio.png",
      tags: [
        "Raj Iyer",
        "U.S. Army CIO",
        "Public Sector",
        "Edge AI",
        "Leadership",
      ],
      readTime: "7 min",
      date: "Jul 08, 2025",
      author: {
        name: "Tsecond",
        role: "News Release",
        avatar: "/blogOPT/tsecond_fav.webp",
      },
      content: {
        introduction: [
          "Tsecond, a global innovator in AI-powered edge infrastructure and creator of the BRYCK platform, a small form factor low power edge AI inferencing device, today announced the appointment of Raj Iyer as its new president, public sector markets. The news comes as defense agencies globally continue to accelerate the adoption of cutting-edge AI tools and technology to strengthen the speed and precision of decision-making in the military.",
          "Tsecond has rapidly expanded across the media & entertainment (M&E), enterprise and government sectors since 2020. Its solutions are already used by Boeing, MSG Sphere, Picture Shop and the Ministry of Defense in India. In his new role, Iyer will lead the charge in growing the Tsecond engineering, marketing and sales teams for the federal market. He will be key in architecting the company’s strategy for engaging with government partners—shaping how Tsecond collaborates with agencies to co-design, test and scale solutions that meet the evolving demands of mission-critical environments.",
          "“We're proud of our trajectory and the opportunities ahead for Tsecond. Raj’s extensive experience in strategy and technology will contribute greatly to driving the company’s next phase of growth,” said Sahil Chawla, co-founder and CEO at Tsecond. “His unique understanding of how to solve the biggest pain points faced by government and defense teams will be instrumental in driving meaningful outcomes for our public sector customers around the world.”",
        ],
        keyAdvantages: {
          title: "Raj Iyer's Experience and Strategic Focus:",
          points: [
            {
              title: "U.S. Army CIO Leadership",
              description:
                "Iyer brings over three decades of experience at the intersection of defense, consulting and technology. During his time as the U.S. Army’s first chief information officer, he led one of the largest digital transformation efforts in the federal space. His leadership modernized IT infrastructure, advanced cyber readiness and accelerated mission agility across the U.S. Army worldwide. He has also held partner-level roles at Big Four firms and led large-scale transformation initiatives for federal agencies.",
            },
            {
              title: "Addressing Edge Data Challenges",
              description:
                "Today, government agencies are creating more data at the edge than at the enterprise. This offers a tremendous opportunity to leverage this data for decision making at the point of data collection, but requires solutions that can operate efficiently in constrained environments, said Iyer.",
            },
            {
              title: "Vision for Mission-Centric Infrastructure",
              description:
                "Joining Tsecond presents an exciting opportunity to shape the future of mission-centric infrastructure for these customers, who need unmatched agility, expertise and flexibility. I'm excited to build on the company’s strong foundation and drive our next phase of growth—one focused on helping governments around the world lay the infrastructure needed to harness the full potential of AI in serving citizens and protecting national interests.",
            },
          ],
        },
        continuation: [
          "About Tsecond: Tsecond specializes in compact, lightweight, high-performance, high capacity and rugged edge infrastructure. Tsecond’s products enable AI inferencing, storage and data mobility in a single device in edge environments. From the depths of the oceans to the heights of space, on the move or in flight, Tsecond’s Edge Solutions enable rapid decision making when and where it matters the most. Trusted by industry leaders like Boeing, Picture Shop, Be4Post and the government & defense sectors in India and the USA, Tsecond is writing the next chapter in its growth story. Media Contact: Tsecond@karbocom.com",
        ],
      },
    },
  ],

  // recommendations: [
  //   {
  //     id: 10,
  //     title: 'Machine Learning at Scale: Infrastructure Considerations',
  //     slug: 'machine-learning-infrastructure',
  //     description: 'Essential infrastructure requirements for scaling machine learning operations from research to production.',
  //     image: "/blogOPT/blog-image.webp",
  //     tags: ['Machine Learning', 'MLOps', 'Infrastructure'],
  //     readTime: '21 min',
  //     date: 'Dec 8, 2024',
  //     likes: 387,
  //     comments: 64,
  //     author: {
  //       name: 'Dr. Bhakti Reddy',
  //       role: 'Chief Technology Officer',
  //       avatar: '/blogOPT/Avatar-image.svg',
  //     },
  //     content: {
  //       introduction: [
  //         "Scaling machine learning from research experiments to production deployments requires careful infrastructure planning. What works for a single data scientist training models on a laptop quickly breaks down when deploying at enterprise scale.",
  //         "The challenges are multifaceted: managing massive training datasets, orchestrating distributed training across multiple GPUs or machines, tracking experiments and models and deploying models to production with monitoring and retraining pipelines.",
  //         "We've seen organizations struggle with these challenges. The key is understanding that ML infrastructure isn't just about compute—storage, networking and data pipelines are equally critical to success."
  //       ],
  //       keyAdvantages: {
  //         title: "Successful ML infrastructure must address several key requirements:",
  //         points: [
  //           {
  //             title: "Data Pipeline Performance:",
  //             description: "Training speed is often limited by data loading rather than GPU compute. High-performance storage eliminates this bottleneck."
  //           },
  //           {
  //             title: "Experiment Management:",
  //             description: "Tracking thousands of experiments requires infrastructure that can store and serve model checkpoints, metrics and artifacts efficiently."
  //           },
  //           {
  //             title: "Production Deployment:",
  //             description: "Moving models from training to production requires careful orchestration, versioning and monitoring—all dependent on reliable storage infrastructure."
  //           }
  //         ]
  //       },
  //       continuation: [
  //         "Organizations that treat ML infrastructure as a strategic investment rather than an afterthought see dramatically better outcomes. Faster iteration cycles, more experiments and higher-quality models are all enabled by the right foundation.",
  //         "As ML models grow larger and more complex, infrastructure requirements will only intensify. Planning for scale from the beginning ensures you're ready for whatever comes next."
  //       ],
  //       callToAction: {
  //         text: "Build ML infrastructure that scales",
  //         links: [
  //           { text: "ML Solutions", url: "#" },
  //           { text: "Architecture Guide", url: "#" }
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     id: 11,
  //     title: 'Autonomous Vehicles: Managing Petabytes of Sensor Data',
  //     slug: 'autonomous-vehicle-data-management',
  //     description: 'How autonomous vehicle development requires specialized storage solutions for massive sensor data collection and analysis.',
  //     image: "/blogOPT/blog-image.webp",
  //     tags: ['Autonomous Vehicles', 'Sensors', 'Data Management'],
  //     readTime: '18 min',
  //     date: 'Dec 2, 2024',
  //     likes: 456,
  //     comments: 92,
  //     author: {
  //       name: 'Dr. Bhakti Reddy',
  //       role: 'Chief Technology Officer',
  //       avatar: '/blogOPT/Avatar-image.svg',
  //     },
  //     content: {
  //       introduction: [
  //         "Autonomous vehicles are perhaps the most data-intensive application in existence. A single test vehicle can generate terabytes of sensor data per day from cameras, lidar, radar and other sensors—all of which must be captured, stored and analyzed.",
  //         "Traditional approaches to handling this data quickly break down. Test vehicles need onboard storage that can handle sustained writes at hundreds of megabytes per second, in environments with extreme temperature variations, constant vibration and shock.",
  //         "Beyond capture, the real challenge is the data pipeline: getting massive datasets from vehicles to central storage, processing it through labeling and training pipelines and managing the resulting models and their continuous improvement."
  //       ],
  //       keyAdvantages: {
  //         title: "Autonomous vehicle data management requires specialized capabilities:",
  //         points: [
  //           {
  //             title: "Ruggedized On-Vehicle Storage:",
  //             description: "Mil-spec components and thermal management ensure reliable operation in automotive environments where temperatures and vibration would destroy standard drives."
  //           },
  //           {
  //             title: "Efficient Data Transfer:",
  //             description: "When vehicles return from testing, rapid data offload is critical. High-speed interfaces enable offloading day's worth of data in minutes."
  //           },
  //           {
  //             title: "Cloud Integration:",
  //             description: "Seamless integration with cloud-based labeling, training and simulation platforms ensures data flows efficiently through the entire development pipeline."
  //           }
  //         ]
  //       },
  //       continuation: [
  //         "BRYCK devices have been deployed in autonomous vehicle programs worldwide. Their combination of ruggedness, performance and capacity makes them uniquely suited to this demanding application.",
  //         "As autonomous vehicle development accelerates, data management will become increasingly critical. Organizations that get this right will move faster, train better models and reach deployment sooner."
  //       ],
  //       callToAction: {
  //         text: "Learn about automotive solutions",
  //         links: [
  //           { text: "Automotive Page", url: "#" },
  //           { text: "Technical Specs", url: "#" }
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     id: 12,
  //     title: 'Government and Defense: Meeting Stringent Security Requirements',
  //     slug: 'government-defense-security',
  //     description: 'How Tsecond solutions meet the unique security and compliance requirements of government and defense applications.',
  //     image: "/blogOPT/blog-image.webp",
  //     tags: ['Government', 'Defense', 'Security Compliance'],
  //     readTime: '15 min',
  //     date: 'Nov 28, 2024',
  //     likes: 234,
  //     comments: 41,
  //     author: {
  //       name: 'Dr. Bhakti Reddy',
  //       role: 'Chief Technology Officer',
  //       avatar: '/blogOPT/Avatar-image.svg',
  //     },
  //     content: {
  //       introduction: [
  //         "Government and defense applications have security requirements that go far beyond what commercial enterprises typically need. Data must be protected at the highest levels, with complete audit trails, tamper evidence and often physical security measures.",
  //         "These requirements extend beyond just encryption. Government buyers need to know about supply chain security, manufacturing location, component sourcing and the entire security posture of vendors they work with.",
  //         "Tsecond has worked closely with defense and intelligence agencies to ensure our solutions meet their stringent requirements. This includes various certifications, security audits and ongoing compliance validation."
  //       ],
  //       keyAdvantages: {
  //         title: "Our government and defense solutions provide multiple layers of security:",
  //         points: [
  //           {
  //             title: "Hardware-Based Security:",
  //             description: "Encryption implemented at the hardware level with FIPS 140-2 validated modules ensures data is protected even against sophisticated attacks."
  //           },
  //           {
  //             title: "Secure Supply Chain:",
  //             description: "Component sourcing and manufacturing processes are carefully controlled and audited to prevent supply chain compromises."
  //           },
  //           {
  //             title: "Compliance Documentation:",
  //             description: "Complete documentation packages support government procurement processes and security audits."
  //           }
  //         ]
  //       },
  //       continuation: [
  //         "Working with government and defense customers has made us better at security across the board. The lessons learned in these demanding environments benefit all our customers.",
  //         "As threats evolve, so do our security measures. Continuous improvement and proactive security research ensure we stay ahead of emerging threats."
  //       ],
  //       callToAction: {
  //         text: "Explore government solutions",
  //         links: [
  //           { text: "Government Page", url: "#" },
  //           { text: "Security Documentation", url: "#" }
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     id: 13,
  //     title: 'Scientific Research: Enabling Discovery Through Data',
  //     slug: 'scientific-research-data',
  //     description: 'How high-performance storage infrastructure is accelerating scientific discovery across multiple disciplines.',
  //     image: "/blogOPT/blog-image.webp",
  //     tags: ['Scientific Research', 'Discovery', 'Academia'],
  //     readTime: '20 min',
  //     date: 'Nov 24, 2024',
  //     likes: 312,
  //     comments: 58,
  //     author: {
  //       name: 'Dr. Bhakti Reddy',
  //       role: 'Chief Technology Officer',
  //       avatar: '/blogOPT/Avatar-image.svg',
  //     },
  //     content: {
  //       introduction: [
  //         "Scientific research is increasingly data-driven. Whether it's genomics, astronomy, climate science, or particle physics, researchers are generating and analyzing datasets at scales that were unimaginable just a decade ago.",
  //         "The challenge for research institutions is providing infrastructure that enables rather than constrains discovery. Researchers need to focus on science, not on wrestling with data management and storage limitations.",
  //         "We've partnered with leading research institutions to deploy storage infrastructure that keeps pace with scientific instruments and enables new kinds of analysis. The result is accelerated discovery and more efficient use of research funding."
  //       ],
  //       keyAdvantages: {
  //         title: "Research infrastructure must balance several competing requirements:",
  //         points: [
  //           {
  //             title: "Extreme Performance:",
  //             description: "Scientific instruments generate data at rates that can overwhelm traditional storage. High-performance solutions ensure no data is lost during capture."
  //           },
  //           {
  //             title: "Massive Capacity:",
  //             description: "Long-term research projects accumulate petabytes of data that must remain accessible for analysis and validation."
  //           },
  //           {
  //             title: "Cost Effectiveness:",
  //             description: "Research budgets are constrained. Solutions must deliver the required performance and capacity within realistic budget constraints."
  //           }
  //         ]
  //       },
  //       continuation: [
  //         "From telescope arrays capturing the cosmos to DNA sequencers unlocking genetic secrets, BRYCK storage enables scientific discovery. Researchers get the performance they need without the complexity of managing traditional storage infrastructure.",
  //         "As scientific instruments become more sophisticated and datasets grow larger, storage infrastructure will play an increasingly critical role in enabling discovery. We're committed to ensuring storage never limits what's possible."
  //       ],
  //       callToAction: {
  //         text: "Support your research",
  //         links: [
  //           { text: "Research Solutions", url: "#" },
  //           { text: "Academic Pricing", url: "#" }
  //         ]
  //       }
  //     }
  //   },
  //   {
  //     id: 14,
  //     title: 'Scientific Research: Enabling Discovery Through Data',
  //     slug: 'scientific-research-data',
  //     description: 'How high-performance storage infrastructure is accelerating scientific discovery across multiple disciplines.',
  //     image: "/blogOPT/blog-image.webp",
  //     tags: ['Scientific Research', 'Discovery', 'Academia'],
  //     readTime: '20 min',
  //     date: 'Nov 24, 2024',
  //     likes: 312,
  //     comments: 58,
  //     author: {
  //       name: 'Dr. Bhakti Reddy',
  //       role: 'Chief Technology Officer',
  //       avatar: '/blogOPT/Avatar-image.svg',
  //     },
  //     content: {
  //       introduction: [
  //         "Scientific research is increasingly data-driven. Whether it's genomics, astronomy, climate science, or particle physics, researchers are generating and analyzing datasets at scales that were unimaginable just a decade ago.",
  //         "The challenge for research institutions is providing infrastructure that enables rather than constrains discovery. Researchers need to focus on science, not on wrestling with data management and storage limitations.",
  //         "We've partnered with leading research institutions to deploy storage infrastructure that keeps pace with scientific instruments and enables new kinds of analysis. The result is accelerated discovery and more efficient use of research funding."
  //       ],
  //       keyAdvantages: {
  //         title: "Research infrastructure must balance several competing requirements:",
  //         points: [
  //           {
  //             title: "Extreme Performance:",
  //             description: "Scientific instruments generate data at rates that can overwhelm traditional storage. High-performance solutions ensure no data is lost during capture."
  //           },
  //           {
  //             title: "Massive Capacity:",
  //             description: "Long-term research projects accumulate petabytes of data that must remain accessible for analysis and validation."
  //           },
  //           {
  //             title: "Cost Effectiveness:",
  //             description: "Research budgets are constrained. Solutions must deliver the required performance and capacity within realistic budget constraints."
  //           }
  //         ]
  //       },
  //       continuation: [
  //         "From telescope arrays capturing the cosmos to DNA sequencers unlocking genetic secrets, BRYCK storage enables scientific discovery. Researchers get the performance they need without the complexity of managing traditional storage infrastructure.",
  //         "As scientific instruments become more sophisticated and datasets grow larger, storage infrastructure will play an increasingly critical role in enabling discovery. We're committed to ensuring storage never limits what's possible."
  //       ],
  //       callToAction: {
  //         text: "Support your research",
  //         links: [
  //           { text: "Research Solutions", url: "#" },
  //           { text: "Academic Pricing", url: "#" }
  //         ]
  //       }
  //     }
  //   }
  // ]
};

export function getAllArticles() {
  const sources = [
    ...(blogData.blogmain || []),
    ...(blogData.topBlogs || []),
    ...(blogData.articles || []),
  ];
  const seen = new Set();
  const deduped = [];
  for (const item of sources) {
    if (item && item.slug && !seen.has(item.slug)) {
      seen.add(item.slug);
      deduped.push(item);
    }
  }
  return deduped;
}

export function getArticleBySlug(slug) {
  const all = getAllArticles();
  return all.find((a) => a.slug === slug) || null;
}

