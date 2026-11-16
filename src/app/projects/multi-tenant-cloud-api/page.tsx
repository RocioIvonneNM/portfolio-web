
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Multi-Tenant Architecture",
    description:
      "Designed tenant-aware API workflows to support multiple organizations, with scoped access to assets, locations, personnel, and operational records.",
    color: "bg-[#E5F2FF]",
  },
  {
    number: "02",
    title: "Authentication & Authorization",
    description:
      "Implemented session validation, role-based permissions, and protected operations for different application users and business contexts.",
    color: "bg-[#FCE7F1]",
  },
  {
    number: "03",
    title: "Asset & Inventory Management",
    description:
      "Developed backend services for asset registration, RFID-related transactions, inventory sessions, stock validation, and movement history.",
    color: "bg-[#FFF0B9]",
  },
  {
    number: "04",
    title: "SAP Business One Integration",
    description:
      "Integrated SAP Service Layer workflows for purchasing, picking, warehouse movements, transfers, inventory operations, and serial-number validation.",
    color: "bg-[#EAE1FF]",
  },
  {
    number: "05",
    title: "Reporting & Automation",
    description:
      "Implemented scheduled operational reporting, inventory report generation, email delivery integrations, and supporting diagnostic workflows.",
    color: "bg-[#DFF5EC]",
  },
  {
    number: "06",
    title: "Cloud Operations",
    description:
      "Worked with Google Cloud Run, API Gateway, Firestore, deployment revisions, logs, and private connectivity for enterprise integrations.",
    color: "bg-[#E8EEFF]",
  },
];

const technologies = [
  "Node.js",
  "Express.js",
  "JavaScript",
  "REST APIs",
  "Google Cloud Run",
  "API Gateway",
  "Cloud Firestore",
  "Firebase Admin",
  "SAP Business One",
  "SAP Service Layer",
  "Google Cloud VPC",
  "Cloud VPN",
  "Cloud Logging",
  "Cloud Scheduler",
  "Git",
];

const challenges = [
  {
    title: "Multi-Tenant Data Access",
    description:
      "Supporting different organizations through shared backend infrastructure while applying tenant-specific access rules and permissions.",
  },
  {
    title: "Enterprise System Integration",
    description:
      "Connecting cloud-hosted services with a private SAP environment and coordinating application requests with enterprise business rules.",
  },
  {
    title: "Inventory Consistency",
    description:
      "Validating serial numbers, warehouse availability, document references, and transaction conditions before processing inventory workflows.",
  },
  {
    title: "Performance & Reliability",
    description:
      "Improving asset lookup and batch-processing paths, investigating request timeouts, and maintaining operational visibility through logs and diagnostics.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B14E80]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#243653] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#526178]">
          {description}
        </p>
      )}
    </div>
  );
}

function ArchitectureBox({
  label,
  description,
  color = "bg-white",
}: {
  label: string;
  description: string;
  color?: string;
}) {
  return (
    <div
      className={`${color} rounded-2xl border border-[#E7E6EE] px-5 py-5 text-center shadow-sm`}
    >
      <h3 className="font-extrabold text-[#243653]">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-[#526178]">
        {description}
      </p>
    </div>
  );
}

function DownArrow() {
  return (
    <div className="flex justify-center py-3 text-2xl font-bold text-[#7C8DA8]">
      ↓
    </div>
  );
}

export default function MultiTenantCloudAPIPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        {/* BACK NAVIGATION */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#B14E80] transition hover:underline"
        >
          ← Back to projects
        </Link>

        {/* HERO */}
        <section className="relative mt-10 overflow-hidden rounded-[2.5rem] bg-[#B8DDFF] px-7 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/30" />
          <div className="pointer-events-none absolute -bottom-28 right-20 h-72 w-72 rounded-full bg-[#D9C7FA]/50" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B14E80]">
              BACKEND DEVELOPMENT · CLOUD ARCHITECTURE
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Multi-Tenant
              <br />
              Cloud API
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#43536A]">
              A cloud-based backend connecting enterprise applications,
              RFID asset management, inventory workflows, and SAP
              Business One through secure REST APIs.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express",
                "Google Cloud",
                "Firestore",
                "SAP Integration",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-bold text-[#243653]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="01 / Project Overview"
              title="Building the backend behind connected operations"
            />

            <div className="space-y-5 text-base leading-8 text-[#526178]">
              <p>
                This project brings together backend services used by
                enterprise applications to manage physical assets,
                inventory, operational transactions, and business data
                across multiple organizations.
              </p>

              <p>
                I worked on the development and evolution of a
                Node.js and Express API deployed on Google Cloud,
                integrating Firestore data operations, authentication,
                role-based access, and specialized business workflows.
              </p>

              <p>
                The platform also connects with SAP Business One,
                allowing mobile warehouse applications to interact
                with enterprise documents, inventory records, and
                serial-number information through SAP Service Layer.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E9E6EF] bg-white p-7 shadow-sm md:p-9">
            <h3 className="text-xl font-extrabold">
              Project at a glance ✦
            </h3>

            <div className="mt-7 space-y-5">
              {[
                ["Role", "Backend & Cloud Development"],
                ["Project Type", "Enterprise Platform"],
                ["Architecture", "Multi-Tenant REST API"],
                ["Cloud Platform", "Google Cloud"],
                ["Database", "Cloud Firestore"],
                ["Enterprise Integration", "SAP Business One"],
                ["Connected Clients", "Android Apps & Web Dashboards"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-[#F0EDF3] pb-4 last:border-b-0"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B14E80]">
                    {label}
                  </p>
                  <p className="mt-2 font-semibold text-[#243653]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT I BUILT */}
        <section className="mt-24">
          <SectionHeading
            eyebrow="02 / My Contributions"
            title="What I Built"
            description="Backend capabilities developed to support real operational requirements, from asset management to enterprise system connectivity."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className={`${feature.color} rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span className="text-sm font-extrabold text-[#B14E80]">
                  {feature.number}
                </span>

                <h3 className="mt-5 text-xl font-extrabold leading-snug">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526178]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mt-24">
          <SectionHeading
            eyebrow="03 / System Architecture"
            title="How the platform connects"
            description="A simplified architectural view of the applications, cloud services, data storage, and enterprise integration layers."
          />

          <div className="rounded-[2.5rem] border border-[#E7E6EF] bg-[#F3F7FF] p-5 md:p-10">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 md:grid-cols-2">
                <ArchitectureBox
                  label="Android Applications"
                  description="RFID scanning, warehouse operations, inventory, and asset workflows"
                  color="bg-[#FCE7F1]"
                />
                <ArchitectureBox
                  label="Web Dashboard"
                  description="Asset management, reporting, operational monitoring, and administration"
                  color="bg-[#FFF0B9]"
                />
              </div>

              <DownArrow />

              <ArchitectureBox
                label="API Gateway / HTTP Access"
                description="API routing and access to backend services"
                color="bg-white"
              />

              <DownArrow />

              <ArchitectureBox
                label="Cloud Run · Node.js / Express"
                description="REST endpoints, authentication, tenant-aware business logic, inventory services, and integrations"
                color="bg-[#B8DDFF]"
              />

              <div className="grid grid-cols-2 gap-4 py-3 text-center text-2xl font-bold text-[#7C8DA8]">
                <span>↓</span>
                <span>↓</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <ArchitectureBox
                  label="Cloud Firestore"
                  description="Tenant-scoped assets, locations, transactions, sessions, and operational records"
                  color="bg-[#DFF5EC]"
                />
                <ArchitectureBox
                  label="Private SAP Connectivity"
                  description="VPC networking and VPN routing to SAP Business One Service Layer"
                  color="bg-[#EAE1FF]"
                />
              </div>
            </div>

            <p className="mt-7 text-center text-xs leading-6 text-[#66758B]">
              Simplified architecture for portfolio presentation.
              Individual applications use the relevant backend
              services and integrations.
            </p>
          </div>
        </section>

        {/* SAP INTEGRATION */}
        <section className="mt-24">
          <SectionHeading
            eyebrow="04 / Enterprise Integration"
            title="Connecting cloud services with SAP Business One"
            description="One of the most technically significant parts of the project was supporting warehouse workflows that interact with an enterprise ERP system."
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] bg-[#EAE1FF] p-8 md:p-10">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#B14E80]">
                SAP SERVICE LAYER
              </p>

              <h3 className="mt-4 text-2xl font-extrabold">
                Enterprise workflows through a cloud API
              </h3>

              <p className="mt-5 leading-8 text-[#526178]">
                Developed backend integration logic that communicates
                with SAP Business One Service Layer to retrieve
                business documents, validate inventory information,
                and process supported warehouse operations.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Purchase Orders",
                  "Picking Lists",
                  "Goods Receipts",
                  "Goods Issues",
                  "Stock Transfers",
                  "Inventory Counts",
                  "Serial Validation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-[#43536A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E9E6EF] bg-white p-8 md:p-10">
              <h3 className="text-2xl font-extrabold">
                Private connectivity & infrastructure
              </h3>

              <p className="mt-5 leading-8 text-[#526178]">
                Worked on the Google Cloud side of a private
                integration architecture involving VPC networking,
                VPN connectivity, routing, and infrastructure
                diagnostics.
              </p>

              <p className="mt-4 leading-8 text-[#526178]">
                The implementation supports communication between
                cloud-hosted API services and an SAP environment
                managed by a separate infrastructure team.
              </p>

              <div className="mt-7 rounded-2xl bg-[#F3F7FF] p-5">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#B14E80]">
                  Integration flow
                </p>

                <p className="mt-3 text-sm font-semibold leading-7">
                  Mobile Application
                  <span className="mx-2 text-[#B14E80]">→</span>
                  Cloud API
                  <span className="mx-2 text-[#B14E80]">→</span>
                  Private Network
                  <span className="mx-2 text-[#B14E80]">→</span>
                  SAP Service Layer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API EXAMPLE */}
        <section className="mt-24">
          <SectionHeading
            eyebrow="05 / Backend Engineering"
            title="API design & business logic"
            description="The backend exposes REST endpoints for different operational domains, keeping application interfaces separate from data access and business integrations."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-[#243653] p-7 text-white md:p-9">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#F8B8D6]" />
                <span className="h-3 w-3 rounded-full bg-[#FFF0B9]" />
                <span className="h-3 w-3 rounded-full bg-[#B8DDFF]" />
                <span className="ml-3 text-xs font-bold tracking-widest text-white/60">
                  API WORKFLOW
                </span>
              </div>

              <div className="mt-8 space-y-5 font-mono text-sm leading-7">
                <div>
                  <p className="text-[#B8DDFF]">
                    01 / REQUEST
                  </p>
                  <p className="mt-1 text-white/85">
                    Client sends an authenticated request
                  </p>
                </div>

                <div className="border-l-2 border-[#B8DDFF]/50 pl-5">
                  <p className="text-[#F8B8D6]">
                    02 / VALIDATION
                  </p>
                  <p className="mt-1 text-white/85">
                    Session, permissions and input checks
                  </p>
                </div>

                <div className="border-l-2 border-[#B8DDFF]/50 pl-5">
                  <p className="text-[#FFF0B9]">
                    03 / BUSINESS LOGIC
                  </p>
                  <p className="mt-1 text-white/85">
                    Inventory, asset or SAP operation
                  </p>
                </div>

                <div>
                  <p className="text-[#B8F0D4]">
                    04 / RESPONSE
                  </p>
                  <p className="mt-1 text-white/85">
                    Structured result and error handling
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#FFF0B9] p-8 md:p-10">
              <h3 className="text-2xl font-extrabold">
                Backend responsibilities
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  "REST endpoint implementation",
                  "Request and session validation",
                  "Tenant and role-based access",
                  "Database reads and updates",
                  "Inventory transaction processing",
                  "External ERP communication",
                  "Operational error handling",
                  "Reporting and scheduled tasks",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 font-bold text-[#B14E80]">
                      ✳
                    </span>
                    <p className="font-medium leading-7 text-[#43536A]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="mt-24">
          <SectionHeading
            eyebrow="06 / Engineering Challenges"
            title="Technical challenges & solutions"
            description="Beyond implementing features, this work involved managing data consistency, integration constraints, performance, and operational reliability."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="rounded-[2rem] border border-[#E9E6EF] bg-white p-8 shadow-sm"
              >
                <span className="text-sm font-extrabold text-[#B14E80]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-extrabold">
                  {challenge.title}
                </h3>

                <p className="mt-4 leading-8 text-[#526178]">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-24">
          <SectionHeading
            eyebrow="07 / Tech Stack"
            title="Technologies Used"
            description="Technologies and services used across the backend, infrastructure, and enterprise integration layers."
          />

          <div className="rounded-[2rem] bg-[#FCE7F1] p-8 md:p-10">
            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#E9D8E4] bg-white px-5 py-3 text-sm font-bold text-[#243653] shadow-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TAKEAWAY */}
        <section className="mt-24 overflow-hidden rounded-[2.5rem] bg-[#D9C7FA] p-8 md:p-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B14E80]">
            PROJECT TAKEAWAY
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
            From backend development to enterprise cloud integration
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#43536A]">
            This project strengthened my experience designing and
            maintaining backend services that connect mobile
            applications, cloud databases, operational workflows,
            and enterprise systems. It reflects my focus on
            practical backend engineering, cloud infrastructure,
            and reliable business integrations.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-5">
          <Link
            href="/#projects"
            className="inline-flex rounded-full border border-[#243653] px-6 py-3 text-sm font-bold transition hover:bg-[#243653] hover:text-white"
          >
            ← Back to all projects
          </Link>

          <Link
            href="/projects/enterprise-dashboard"
            className="inline-flex rounded-full bg-[#243653] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#B14E80]"
          >
            Explore the Web Dashboard ↗
          </Link>
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-[#7A879A]">
          Professional case study. Architecture is simplified and
          sensitive implementation details are intentionally omitted.
        </p>
      </div>
    </main>
  );
}
