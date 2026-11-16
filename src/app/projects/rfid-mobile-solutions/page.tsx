
import Link from "next/link";
import {
  Shirt,
  ScanBarcode,
  RadioTower,
  Footprints,
} from "lucide-react";

const solutions = [
  {
    title: "IDLinens — Hospital RFID",
    description:
      "Multi-tenant textile management with specialized workflows for registration, circulation, laundry operations, and item localization.",
    slug: "idlinens",
    color: "bg-[#F8B8D6]",
    icon: Shirt,
  },
  {
    title: "Multi-Tenant RFID Platform",
    description:
      "Configurable asset management, RFID scanning, inventory reconciliation, and container-based operations.",
    slug: "rfid-general",
    color: "bg-[#B8DDFF]",
    icon: ScanBarcode,
  },
  {
    title: "RFID Desktop Reader",
    description:
      "Android RFID application integrating Bluetooth and USB readers for asset registration, location-based transactions, and container reconciliation with item-level return verification.",
    slug: "desktop",
    color: "bg-[#FFF0B9]",
    icon: RadioTower,
  },
  {
    title: "RFID Shoe Tagging",
    description:
      "Footwear identification workflows with RFID tag writing, reading, and validation.",
    slug: "shoe-tagging",
    color: "bg-[#D9C7FA]",
    icon: Footprints,
  },
];

export default function RFIDSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] px-6 py-12 text-[#243653]">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="text-sm font-semibold text-[#B14E80] hover:underline"
        >
          ← Back to projects
        </Link>

        {/* HERO */}
        <div className="mt-12 rounded-[2.5rem] bg-[#FFF0B9] p-8 md:p-14">
          <p className="text-sm font-bold tracking-widest text-[#B14E80]">
            MOBILE DEVELOPMENT · IOT · RFID
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            RFID Mobile Solutions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#526178]">
            A collection of RFID applications and hardware integrations
            developed to support enterprise asset management, inventory,
            product identification, and operational workflows.
          </p>
        </div>

        {/* SOLUTIONS */}
        <div className="mt-14">
          <h2 className="text-3xl font-extrabold">
            Explore the solutions ✿
          </h2>

          <p className="mt-3 text-[#526178]">
            Four different implementations, each designed to solve
            specific operational challenges.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.slug}
                  className="group overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* ICON HEADER */}
                  <div
                    className={`${solution.color} flex h-56 items-center justify-center md:h-60`}
                  >
                    <Icon
                      size={92}
                      strokeWidth={1.35}
                      className="text-[#243653] transition duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3 className="text-2xl font-extrabold">
                      {solution.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#526178]">
                      {solution.description}
                    </p>

                    <Link
                      href={`/projects/rfid-mobile-solutions/${solution.slug}`}
                      className="mt-7 inline-flex rounded-full border border-[#243653] px-5 py-3 text-sm font-bold transition hover:bg-[#243653] hover:text-white"
                    >
                      View project ↗
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mt-14 text-sm text-[#526178]">
          Professional case studies. Interfaces may be adapted for
          portfolio presentation, with sensitive information removed.
        </p>
      </div>
    </main>
  );
}
