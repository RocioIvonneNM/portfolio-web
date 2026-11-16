
import Image from "next/image";
import Link from "next/link";

const contributions = [
  {
    title: "RFID Hardware Integration",
    description:
      "Integrated RFID readers with Flutter applications to support tag detection and continuous scanning.",
  },
  {
    title: "Textile Lifecycle Workflows",
    description:
      "Developed workflows for garment registration, circulation, laundry dispatch, and storage operations.",
  },
  {
    title: "Item Localization",
    description:
      "Implemented RFID-based item localization features to help operators identify and locate tagged textiles.",
  },
  {
    title: "Cloud Connectivity",
    description:
      "Connected mobile workflows with cloud services for asset management and transaction processing.",
  },
];

const technologies = [
  "Flutter",
  "Dart",
  "Android",
  "RFID",
  "Hardware SDKs",
  "REST APIs",
  "Google Cloud",
];


const screenshots = [
  {
    src: "/images/projects/idlinens/registro.png",
    title: "Garment Registration",
    description:
      "Registering new RFID-tagged textiles through the mobile application.",
  },
  {
    src: "/images/projects/idlinens/lectura.png",
    title: "RFID Scanning",
    description:
      "Continuous RFID scanning and automatic detection of tagged garments.",
  },
  {
    src: "/images/projects/idlinens/localizacion.png",
    title: "Item Localization",
    description:
      "RFID localization workflows with reading progress and item identification.",
  },
  {
    src: "/images/projects/idlinens/detalle-localizacion.png",
    title: "Garment Details",
    description:
      "Detailed information about identified garments and their registered locations.",
  },
  {
    src: "/images/projects/idlinens/movimiento.png",
    title: "Laundry Operations",
    description:
      "Confirmation of textile movements between operational locations.",
  },
  {
    src: "/images/projects/idlinens/menu.png",
    title: "Application Navigation",
    description:
      "Main application menu providing access to textile management workflows.",
  },
];


export default function IDLinensPage() {
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
        <section className="mt-12 rounded-[2.5rem] bg-[#F8B8D6] p-8 md:p-14">
          <p className="text-sm font-bold tracking-widest text-[#93426C]">
            PROFESSIONAL CASE STUDY · MOBILE · IOT
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            IDLinens
          </h1>

          <p className="mt-5 max-w-3xl text-xl font-semibold">
            RFID Textile Management
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#43536A]">
            A mobile solution designed to support textile tracking
            through RFID technology, connecting physical operations
            with digital asset management workflows.
          </p>
        </section>

        {/* COVER */}
        <section className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-3 shadow-sm">
            <Image
              src="/images/projects/idlinens/cover.png"
              alt="IDLinens RFID application interface collage"
              width={1400}
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
              Managing large volumes of textiles requires reliable
              identification and visibility across operational
              locations. RFID technology helps simplify the
              identification of tagged items and supports more
              efficient movement tracking.
            </p>

            <p className="mt-4 leading-8 text-[#526178]">
              This project involved developing Flutter-based mobile
              workflows for RFID scanning, garment registration,
              movement processing, and item localization.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#FFF0B9] p-8">
            <h3 className="text-2xl font-extrabold">
              Key Features ♡
            </h3>

            <ul className="mt-6 space-y-4 text-[#43536A]">
              <li>✿ RFID tag reading and identification</li>
              <li>✿ Garment registration</li>
              <li>✿ Circulation and laundry workflows</li>
              <li>✿ Storage movement tracking</li>
              <li>✿ RFID item localization</li>
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
            A closer look at the mobile interfaces and RFID
            workflows developed for this project.
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
