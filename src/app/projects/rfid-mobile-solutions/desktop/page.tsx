
import Image from "next/image";
import Link from "next/link";

const contributions = [
  {
    title: "RFID Hardware Integration",
    description:
      "Integrated Chainway R3 Bluetooth and Air41 USB desktop RFID readers with a Flutter application, enabling flexible RFID scanning from Android tablets.",
  },
  {
    title: "RFID Product Registration",
    description:
      "Developed workflows to identify RFID tags, associate them with product types, and register tagged assets.",
  },
  {
    title: "Location-Based Transactions",
    description:
      "Built inbound and outbound workflows that record RFID-tagged asset movements against selected locations.",
  },
  {
    title: "Container Creation & Dispatch",
    description:
      "Implemented container creation and outbound operations, allowing operators to assign an identifier to a group of scanned RFID assets.",
  },
  {
    title: "Container Return Reconciliation",
    description:
      "Developed return verification workflows that compare scanned RFID tags against the original container contents to identify matching, missing, and unexpected assets.",
  },
  {
    title: "Cloud Connectivity",
    description:
      "Connected RFID operations with backend services for asset registration, transaction history, and item-level traceability.",
  },
];

const technologies = [
  "Flutter",
  "Dart",
  "Android",
  "RFID",
  "Chainway R3",
  "Air41 USB",
  "Bluetooth",
  "USB HID",
  "REST APIs",
];

const screenshots = [
  {
    src: "/images/projects/rfid-desktop/menu.png",
    title: "Application Dashboard",
    description:
      "Access RFID product registration and inbound and outbound transactions from an Android tablet.",
  },
  {
    src: "/images/projects/rfid-desktop/conexion.jpg",
    title: "RFID Reader Selection",
    description:
      "Select a compatible Bluetooth or USB RFID reader for tablet-based scanning.",
  },
  {
    src: "/images/projects/rfid-desktop/lectura.jpg",
    title: "Bluetooth Reader Configuration",
    description:
      "Discover compatible Bluetooth devices, connect an RFID reader, and configure reading power.",
  },
  {
    src: "/images/projects/rfid-desktop/contenedores.jpg",
    title: "Container Reconciliation",
    description:
      "Compare returning RFID-tagged assets against the original container contents and identify missing items.",
  },
];

export default function RFIDDesktopPage() {
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
        <section className="mt-12 rounded-[2.5rem] bg-[#FFF0B9] p-8 md:p-14">
          <p className="text-sm font-bold tracking-widest text-[#A97727]">
            PROFESSIONAL CASE STUDY · ANDROID · IOT
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            RFID Desktop Reader
          </h1>

          <p className="mt-5 max-w-3xl text-xl font-semibold">
            Bluetooth & USB RFID Integration
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#43536A]">
            An Android application connecting RFID hardware with
            product registration, asset transactions, and
            container-based reconciliation. Designed to simplify
            batch reading and improve operational traceability.
          </p>
        </section>

        {/* COVER */}
        <section className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-3 shadow-sm">
            <Image
              src="/images/projects/rfid-desktop/cover.png"
              alt="RFID Desktop Reader application collage"
              width={1800}
              height={800}
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
              RFID Desktop Reader is an Android application
              developed to manage RFID-tagged assets using
              external readers connected through Bluetooth
              or USB.
            </p>

            <p className="mt-4 leading-8 text-[#526178]">
              Operators can register products, process entry
              and exit transactions, and manage groups of
              tagged items through identifiable containers.
            </p>

            <p className="mt-4 leading-8 text-[#526178]">
              With a compatible USB desktop reader, multiple
              RFID-tagged items can be placed on a reading
              surface and detected without scanning each
              item individually.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#FFF0B9] p-8">
            <h3 className="text-2xl font-extrabold">
              Key Features ♡
            </h3>

            <ul className="mt-6 space-y-4 text-[#43536A]">
              <li>✿ Bluetooth and USB RFID connectivity</li>
              <li>✿ RFID product registration</li>
              <li>✿ Batch RFID tag reading</li>
              <li>✿ Location-based entry and exit transactions</li>
              <li>✿ Container creation and identification</li>
              <li>✿ Container dispatch and return tracking</li>
              <li>✿ Automatic return reconciliation</li>
              <li>✿ Missing and unexpected asset detection</li>
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
                    ? "bg-[#FFF0B9]"
                    : "bg-[#D9C7FA]"
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

        {/* CONTAINER RECONCILIATION */}
        <section className="mt-20">
          <p className="text-sm font-bold tracking-widest text-[#C9578E]">
            CORE FUNCTIONALITY ✳
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            Container-Based RFID Reconciliation
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-[#526178]">
            Containers allow operators to group RFID-tagged
            items into a single outbound operation. Each
            container has an identifier and stores the exact
            RFID tags included when the items leave.
          </p>

          <p className="mt-4 max-w-3xl leading-8 text-[#526178]">
            When the items return, the operator selects the
            corresponding container and scans the returning
            assets. The application compares the detected
            RFID tags with the original records, identifying
            which items match and which are missing.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#FFF0B9] p-7 md:p-9">
            <h3 className="text-xl font-extrabold">
              Example: Container Return
            </h3>

            <p className="mt-3 leading-7 text-[#43536A]">
              A container is dispatched with five tagged
              garments. When it returns, only three of the
              original garments are detected. The application
              identifies the three matching items and
              reports the remaining two as missing.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white p-5 text-center">
                <p className="text-3xl font-extrabold">
                  5
                </p>
                <p className="mt-2 text-sm font-semibold text-[#526178]">
                  Expected
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 text-center">
                <p className="text-3xl font-extrabold text-[#4CAF50]">
                  3
                </p>
                <p className="mt-2 text-sm font-semibold text-[#526178]">
                  Matching
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 text-center">
                <p className="text-3xl font-extrabold text-[#D98B25]">
                  2
                </p>
                <p className="mt-2 text-sm font-semibold text-[#526178]">
                  Missing
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-[#526178]">
              Illustrative example of a partially returned container.
            </p>
          </div>
        </section>

        {/* TECHNOLOGIES */}
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

{/* SCREENSHOTS */}
<section className="mt-20">
  <p className="text-sm font-bold tracking-widest text-[#C9578E]">
    APP PREVIEW ✳
  </p>

  <h2 className="mt-3 text-3xl font-extrabold">
    Inside the Application
  </h2>

  <p className="mt-4 max-w-2xl leading-7 text-[#526178]">
    A closer look at the Android tablet application,
    RFID reader connectivity, and container
    reconciliation workflows.
  </p>

  <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
    {screenshots.map((screenshot) => (
      <article
        key={screenshot.src}
        className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-4 shadow-sm"
      >
        <div className="overflow-hidden rounded-[1.5rem] bg-[#FFF7FA]">
          <Image
            src={screenshot.src}
            alt={screenshot.title}
            width={540}
            height={960}
            className="h-auto w-full"
          />
        </div>

        <h3 className="mt-5 text-lg font-extrabold">
          {screenshot.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#526178]">
          {screenshot.description}
        </p>
      </article>
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
