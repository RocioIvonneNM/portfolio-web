
import Image from "next/image";
import Link from "next/link";

const base = "/images/projects/enterprise-dashboard";

const sections = [
  {
    number: "01",
    title: "Dashboard Management",
    description:
      "A centralized interface for managing RFID assets, locations, sublocations, transactions, and custom fields across multiple tenants.",
    accent: "#B8DDFF",
    images: [
      {
        src: "dashboard-overview.png",
        title: "Dashboard Overview",
        description: "Centralized access to operational modules.",
      },
      {
        src: "dashboard-assets.png",
        title: "Asset Management",
        description: "RFID asset records and inventory visibility.",
      },
      {
        src: "dashboard-locations.png",
        title: "Location Management",
        description: "Organization of assets across locations.",
      },
      {
        src: "dashboard-sublocations.png",
        title: "Sublocations",
        description: "Hierarchical organization of storage areas.",
      },
      {
        src: "dashboard-create-location.png",
        title: "Create Locations",
        description: "Configuration of new operational locations.",
      },
      {
        src: "dashboard-filters.png",
        title: "Advanced Filtering",
        description: "Search and filtering tools for asset records.",
      },
      {
        src: "dashboard-transactions.png",
        title: "Transaction History",
        description: "Tracking RFID movements and operational activity.",
      },
      {
        src: "historial individual de un activo.png",
        title: "Individual Asset History",
        description: "Detailed movement history for each RFID asset.",
      },
      {
        src: "para campos personalizados.png",
        title: "Custom Fields",
        description: "Flexible asset information configured by tenant.",
      },
    ],
  },
  {
    number: "02",
    title: "IDLinens — RFID Analytics",
    description:
      "An RFID-based textile management module that transforms garment readings and movements into interactive analytics, individual tracking, and operational reports.",
    accent: "#F8B8D6",
    images: [
      {
        src: "idlinens-overview.png",
        title: "Garment Distribution",
        description:
          "Interactive charts showing garment distribution by location and category.",
      },
      {
        src: "idlinens-category-chart.png",
        title: "Category Distribution",
        description:
          "Detailed visualization of garment categories within a location.",
      },
      {
        src: "idlinens-analytics.png",
        title: "Garment Analytics",
        description:
          "Laundry cycles, garment age, and inactivity metrics.",
      },
      {
        src: "idlinens-inactive.png",
        title: "Inactive Garments",
        description:
          "Monitoring garments with 15 or more days without activity.",
      },
      {
        src: "idlinens-detail.png",
        title: "RFID Garment Details",
        description:
          "Individual garment records with RFID identifiers, wash cycles, and last-seen information.",
      },
      {
        src: "idlinens-laundry.png",
        title: "Laundry Inventory",
        description:
          "Garments currently in laundry, categorized by type and location.",
      },
      {
        src: "idlinens-movements.png",
        title: "Daily Movements",
        description:
          "Daily check-in and check-out activity with access to movement reports.",
      },
    ],
  },
  {
    number: "03",
    title: "RFID Inventory Management",
    description:
      "A dedicated inventory workflow for comparing expected RFID assets against scanned items, identifying discrepancies, and generating inventory reports.",
    accent: "#FFF0B9",
    images: [
      {
        src: "inventory-overview.png",
        title: "Inventory Overview",
        description: "Open inventories and inventory history.",
      },
      {
        src: "inventory-create.png",
        title: "Create Inventory",
        description:
          "Inventory creation by location and sublocation.",
      },
      {
        src: "inventory-scanning.png",
        title: "RFID Scanning Results",
        description:
          "Comparison of expected and scanned RFID assets.",
      },
      {
        src: "inventory-detail.png",
        title: "Inventory Details",
        description:
          "Review of found, missing, and additional assets.",
      },
      {
        src: "inventory-report.png",
        title: "Inventory Reports",
        description:
          "Inventory results and downloadable PDF reports.",
      },
    ],
  },
  {
    number: "04",
    title: "RFID Container Management",
    description:
      "A module for organizing RFID-tagged assets into containers, assigning containers to employees, and tracking container transactions.",
    accent: "#D9C7FA",
    images: [
      {
        src: "containers-overview.png",
        title: "Container Overview",
        description:
          "Creation and management of RFID containers.",
      },
      {
        src: "containers-employee.png",
        title: "Employee Containers",
        description:
          "Container assignment and management by employee.",
      },
      {
        src: "containers-transactions.png",
        title: "Container Transactions",
        description:
          "Movement history and transaction monitoring.",
      },
    ],
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Google Cloud Run",
  "Cloud Firestore",
  "Firebase Authentication",
  "REST APIs",
  "RFID Integration",
];

export default function EnterpriseDashboardPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#243653]/70 transition hover:text-[#243653]"
        >
          ← Back to Portfolio
        </Link>

        {/* HERO */}
        <section className="relative mt-10 overflow-hidden rounded-[36px] border border-[#243653]/10 bg-gradient-to-br from-[#EAF5FF] via-[#FFF7FD] to-[#F2EBFF] px-7 py-14 sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B8DDFF]/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-60 w-60 rounded-full bg-[#F8B8D6]/40 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-[#243653]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              Full-Stack Development · RFID · Cloud
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Enterprise
              <span className="block text-[#8D78BB]">
                Dashboard
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#243653]/75 sm:text-lg">
              A multi-tenant web platform for RFID asset
              management, operational monitoring, inventory
              control, and interactive analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Multi-Tenant",
                "RFID Tracking",
                "Inventory",
                "Analytics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/75 px-4 py-2 text-sm font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D78BB]">
              The Project
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Project Overview
            </h2>
            <p className="mt-5 leading-8 text-[#243653]/75">
              Enterprise Dashboard is a web application
              connected to an RFID ecosystem that includes
              Android scanning devices, a cloud-based API,
              and a centralized database.
            </p>
            <p className="mt-4 leading-8 text-[#243653]/75">
              The platform allows authorized users to manage
              RFID assets, review transactions, analyze garment
              activity, conduct inventories, and manage
              containers through dedicated modules.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#243653]/10 bg-white p-7 shadow-sm sm:p-9">
            <h3 className="text-xl font-bold">
              Key Features
            </h3>

            <ul className="mt-5 space-y-4">
              {[
                "Tenant-based access and role permissions",
                "RFID asset tracking and movement history",
                "Dynamic locations and sublocations",
                "Interactive charts with detailed asset tables",
                "RFID inventory reconciliation",
                "Container and employee assignments",
                "PDF and Excel report exports",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-[#243653]/75"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9C7FA] text-xs font-bold text-[#243653]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHAT I BUILT */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D78BB]">
            My Contribution
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            What I Built
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Web Application",
                description:
                  "Developed dashboard interfaces for asset management, monitoring, filtering, and reporting.",
                color: "#EAF5FF",
              },
              {
                title: "Backend Integration",
                description:
                  "Connected the dashboard to REST APIs and cloud data services for RFID operations.",
                color: "#FFF0F6",
              },
              {
                title: "Data Visualization",
                description:
                  "Implemented interactive operational charts and detailed RFID data views.",
                color: "#F2EBFF",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[26px] border border-[#243653]/10 p-7"
                style={{ backgroundColor: card.color }}
              >
                <h3 className="text-lg font-bold">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#243653]/75">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mt-20 rounded-[30px] border border-[#243653]/10 bg-white p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D78BB]">
            System Integration
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            How It Works
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#243653]/75">
            RFID readings are captured through the Android
            application and sent to the cloud API. The backend
            processes asset movements and stores the
            corresponding records in Firestore. The dashboard
            retrieves this information to provide operational
            views, analytics, and detailed asset tracking.
          </p>

          <div className="mt-9 grid gap-3 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "RFID Devices",
                detail: "Capture RFID tags",
              },
              {
                step: "02",
                title: "Cloud API",
                detail: "Process requests",
              },
              {
                step: "03",
                title: "Firestore",
                detail: "Store asset data",
              },
              {
                step: "04",
                title: "Dashboard",
                detail: "Visualize operations",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-[#F7F5FC] p-5"
              >
                <span className="text-xs font-bold text-[#8D78BB]">
                  {item.step}
                </span>
                <h3 className="mt-3 font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#243653]/65">
                  {item.detail}
                </p>
                {index < 3 && (
                  <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-xl text-[#8D78BB] md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D78BB]">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Technologies Used
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#243653]/10 bg-white px-5 py-3 text-sm font-medium shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* SCREENSHOT GALLERIES */}
        <section className="mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8D78BB]">
            Project Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Inside the Application
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#243653]/70">
            Explore the main modules and workflows of the
            platform through screenshots of the application.
          </p>

          <div className="mt-12 space-y-20">
            {sections.map((section) => (
              <div key={section.number}>
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold"
                    style={{ backgroundColor: section.accent }}
                  >
                    {section.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold">
                      {section.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#243653]/70">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {section.images.map((item) => (
                    <article
                      key={item.src}
                      className="overflow-hidden rounded-[24px] border border-[#243653]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div
                        className="border-b border-[#243653]/10 p-3"
                        style={{
                          backgroundColor: section.accent + "45",
                        }}
                      >
                        <div className="overflow-hidden rounded-xl bg-white">
                          <Image
                            src={`${base}/${item.src}`}
                            alt={item.title}
                            width={1440}
                            height={1000}
                            className="h-auto w-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-base font-bold">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-[#243653]/65">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-24 border-t border-[#243653]/10 pt-9">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[#243653] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3B4F72]"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
