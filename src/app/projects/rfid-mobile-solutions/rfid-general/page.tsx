
import Image from "next/image";
import Link from "next/link";


const contributions = [
  {
    title: "Flexible Inventory Management",
    description:
      "Developed RFID inventory workflows that support location-based inventories, custom-field inventories, and combined criteria. Users can create, resume, and review inventory sessions, reconcile physical readings with database records, and generate PDF reports when inventories are closed.",
  },
  {
    title: "Inventory Reconciliation",
    description:
      "Implemented comparison workflows to identify matching assets, missing items, unexpected detections, and assets registered under different locations. Supported reviewing and confirming location corrections.",
  },
  {
    title: "Location-Based Transactions",
    description:
      "Built RFID entry and exit workflows that register asset movements against selected destinations, including specific locations and sublocations, while maintaining transaction history.",
  },
  {
    title: "Container-Based Operations",
    description:
      "Developed workflows to group outgoing assets into containers and reconcile their return against the original contents, identifying matching, missing, and additional items.",
  },
  {
    title: "RFID Item Localization",
    description:
      "Integrated RFID scanning to locate tagged garments, display their registered locations, and summarize detected quantities by garment type.",
  },
  {
    title: "Cloud and Dashboard Integration",
    description:
      "Connected mobile operations to a multi-tenant cloud API and web dashboard, supporting asset-level traceability, transaction history, inventory analytics, and configurable business modules.",
  },
];


const technologies = [
  "Flutter",
  "Dart",
  "Android",
  "RFID",
  "Chainway",
  "REST APIs",
  "Google Cloud",
  "Firestore",
];



const screenshotGroups = [
  {
    title: "Inventory Management",
    description:
      "Flexible inventory workflows, RFID scanning, physical reconciliation, and historical records.",
    images: [
      {
        src: "/images/projects/rfid-general/inventory-setup.png",
        title: "Flexible Inventory Setup",
        description:
          "Configure inventories by location, custom field, or both.",
      },
      {
        src: "/images/projects/rfid-general/inventory-scanning.png",
        title: "RFID Inventory Scanning",
        description:
          "Monitor RFID scanning progress and detected assets.",
      },
      {
        src: "/images/projects/rfid-general/inventory-reconciliation.png",
        title: "Inventory Reconciliation",
        description:
          "Compare physical readings against database records.",
      },
      {
        src: "/images/projects/rfid-general/location-correction.png",
        title: "Location Correction",
        description:
          "Review and select assets with location discrepancies.",
      },
      {
        src: "/images/projects/rfid-general/inventory-history.png",
        title: "Inventory History",
        description:
          "Review inventory sessions and completed inventory reports.",
      },
    ],
  },
  {
    title: "Transactions & Containers",
    description:
      "Location-based asset movements and container reconciliation.",
    images: [
      {
        src: "/images/projects/rfid-general/transactions-menu.png",
        title: "Entry & Exit Transactions",
        description:
          "Access inbound, outbound, and asset registration workflows.",
      },
      {
        src: "/images/projects/rfid-general/location-transaction.png",
        title: "Location-Based Transactions",
        description:
          "Register RFID movements against selected locations.",
      },
      {
        src: "/images/projects/rfid-general/container-reconciliation.png",
        title: "Container Reconciliation",
        description:
          "Compare received assets with expected container contents.",
      },
      
    ],
  },


{
  title: "RFID Item Localization",
  description:
    "Real-time RFID detection, garment identification, and registered location tracking.",
  images: [
    {
      src: "/images/projects/rfid-general/localization-scanning.png",
      title: "Live RFID Localization",
      description:
        "Scan nearby RFID tags, adjust reader power, and display detected quantities grouped by garment type, including registered and unregistered items.",
    },
    {
      src: "/images/projects/rfid-general/localization-details.png",
      title: "Garment Details & Locations",
      description:
        "Explore detected garments by category and review individual RFID identifiers alongside their registered database locations.",
    },
  ],
},

];



export default function RFIDGeneralPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href="/projects/rfid-mobile-solutions"
          className="text-sm font-bold text-[#B14E80] hover:underline"
        >
          ← Back to RFID Solutions
        </Link>

        {/* HERO */}
        <section className="mt-12 rounded-[2.5rem] bg-[#B8DDFF] p-8 md:p-14">
          <p className="text-sm font-bold tracking-widest text-[#315D91]">
            PROFESSIONAL CASE STUDY · MOBILE · IOT
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            RFID General
          </h1>

          <p className="mt-5 text-xl font-semibold">
            Multi-Tenant RFID Platform
          </p>

        
<p className="mt-5 max-w-3xl text-lg leading-8 text-[#43536A]">
  A configurable, multi-tenant RFID platform connecting
  mobile inventory, asset transactions, container tracking,
  item localization, and cloud-based analytics. Designed
  to adapt to different operational environments through
  flexible workflows and modular business capabilities.
</p>

        </section>

        {/* COVER */}
        <section className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-3 shadow-sm">
            <Image
              src="/images/projects/rfid-general/cover.png"
              alt="RFID General application collage"
              width={1600}
              height={900}
              className="h-auto w-full rounded-[1.5rem]"
              priority
            />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-widest text-[#C9578E]">
              THE PROJECT ✳
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Project Overview
            </h2>

          
<p className="mt-5 leading-8 text-[#526178]">
  RFID General is a configurable enterprise solution
  designed to manage the lifecycle and movement of
  tagged assets across multiple locations. It supports
  physical inventory, operational transactions, container
  reconciliation, and item localization.
</p>

<p className="mt-4 leading-8 text-[#526178]">
  The Flutter application communicates with a multi-tenant
  cloud backend, while a connected web dashboard provides
  transaction history, inventory comparisons, reporting,
  and analytics modules tailored to operational needs.
</p>

          </div>

          <div className="rounded-[2rem] bg-[#D9C7FA] p-8">
            <h3 className="text-2xl font-extrabold">
              Key Features ♡
            </h3>

<ul className="mt-6 space-y-4 text-[#43536A]">
  <li>✿ Inventory by location, custom fields, or both</li>
  <li>✿ Open inventories and historical records</li>
  <li>✿ PDF reports for completed inventories</li>
  <li>✿ Physical vs. database reconciliation</li>
  <li>✿ RFID entry and exit transactions</li>
  <li>✿ Container dispatch and return reconciliation</li>
  <li>✿ RFID item localization and garment counts</li>
  <li>✿ Cloud synchronization and asset traceability</li>
  <li>✿ Configurable dashboard and analytics modules</li>
</ul>

          </div>
        </section>

        {/* CONTRIBUTIONS */}
        <section className="mt-20">
          <p className="text-sm font-bold tracking-widest text-[#C9578E]">
            MY ROLE ✳
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            What I Built
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {contributions.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[2rem] p-7 ${
                  index % 2 === 0
                    ? "bg-[#B8DDFF]"
                    : "bg-[#FFF0B9]"
                }`}
              >
                <h3 className="text-xl font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#43536A]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>


{/* SYSTEM ARCHITECTURE */}
<section className="mt-20">
  <p className="text-sm font-bold tracking-widest text-[#C9578E]">
    SYSTEM DESIGN ✳
  </p>

  <h2 className="mt-3 text-3xl font-extrabold">
    How Everything Connects
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-[#526178]">
    The platform connects RFID hardware and mobile workflows
    with cloud services and a web dashboard, allowing physical
    asset movements to become traceable digital records.
  </p>

  <div className="mt-8 grid gap-3 md:grid-cols-4">
    {[
      {
        title: "RFID Hardware",
        detail: "Handheld and connected RFID readers",
      },
      {
        title: "Flutter Application",
        detail: "Inventory, transactions and localization",
      },
      {
        title: "Cloud API",
        detail: "Authentication, assets and transactions",
      },
      {
        title: "Web Dashboard",
        detail: "Monitoring, reports and analytics",
      },
    ].map((item, index) => (
      <div
        key={item.title}
        className={`rounded-[1.5rem] p-6 ${
          [
            "bg-[#D9C7FA]",
            "bg-[#B8DDFF]",
            "bg-[#FFF0B9]",
            "bg-[#F8B8D6]",
          ][index]
        }`}
      >
        <p className="text-xs font-bold text-[#526178]">
          STEP 0{index + 1}
        </p>

        <h3 className="mt-3 text-lg font-extrabold">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#43536A]">
          {item.detail}
        </p>
      </div>
    ))}
  </div>
</section>


        {/* TECH STACK */}
        <section className="mt-20">
          <p className="text-sm font-bold tracking-widest text-[#C9578E]">
            TECH STACK ✳
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            Technologies Used
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-[#FFF0B9] px-5 py-3 text-sm font-bold"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

{/* CONNECTED ECOSYSTEM */}
<section className="mt-20">
  <p className="text-sm font-bold tracking-widest text-[#C9578E]">
    CONNECTED ECOSYSTEM ✳
  </p>

  <h2 className="mt-3 text-3xl font-extrabold">
    Beyond the Mobile Application
  </h2>

  <p className="mt-4 max-w-3xl leading-8 text-[#526178]">
    The mobile application is part of a connected RFID
    ecosystem. Operations performed through the handheld
    reader are processed by a multi-tenant cloud API and
    made available through a web dashboard.
  </p>

  <div className="mt-8 grid gap-5 md:grid-cols-3">
    {[
      {
        title: "Asset Traceability",
        description:
          "Review individual RFID assets, registered locations, and transaction history.",
        color: "bg-[#B8DDFF]",
      },
      {
        title: "Inventory Analytics",
        description:
          "Monitor inventory sessions, compare physical and expected assets, and access reports.",
        color: "bg-[#FFF0B9]",
      },
      {
        title: "Configurable Modules",
        description:
          "Support specialized operational modules, including textile management, garment distribution, laundry cycles, and historical analytics when enabled.",
        color: "bg-[#D9C7FA]",
      },
    ].map((item) => (
      <article
        key={item.title}
        className={`${item.color} rounded-[2rem] p-7`}
      >
        <h3 className="text-xl font-extrabold">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#43536A]">
          {item.description}
        </p>
      </article>
    ))}
  </div>
</section>

    
{/* GALLERY */}
<section className="mt-20">
  <p className="text-sm font-bold tracking-widest text-[#C9578E]">
    APP PREVIEW ✳
  </p>

  <h2 className="mt-3 text-3xl font-extrabold">
    Inside the Application
  </h2>

  <p className="mt-4 max-w-2xl leading-7 text-[#526178]">
    Explore the main workflows of the RFID mobile platform,
    from inventory management to operational transactions.
  </p>

  <div className="mt-12 space-y-16">
    {screenshotGroups.map((group, groupIndex) => (
      <div key={group.title}>
        <div
          className={`rounded-[2rem] p-7 ${
         
[
  "bg-[#B8DDFF]",
  "bg-[#FFF0B9]",
  "bg-[#D9C7FA]",
][groupIndex]

          }`}
        >
          <h3 className="text-2xl font-extrabold">
            {group.title}
          </h3>

          <p className="mt-3 text-[#43536A]">
            {group.description}
          </p>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.images.map((screenshot) => (
            <article
              key={screenshot.src}
              className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-4 shadow-sm"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-[#F1F7FF]">
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  width={540}
                  height={960}
                  className="h-auto w-full"
                />
              </div>

              <h4 className="mt-5 text-lg font-extrabold">
                {screenshot.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#526178]">
                {screenshot.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


        {/* BACK */}
        <div className="mt-20 border-t border-[#E9E6EF] pt-10">
          <Link
            href="/projects/rfid-mobile-solutions"
            className="inline-flex rounded-full border border-[#243653] px-6 py-3 text-sm font-bold transition hover:bg-[#243653] hover:text-white"
          >
            ← Explore more RFID projects
          </Link>
        </div>
      </div>
    </main>
  );
}
