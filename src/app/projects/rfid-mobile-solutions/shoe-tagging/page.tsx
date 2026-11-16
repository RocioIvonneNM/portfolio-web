
import Image from "next/image";
import Link from "next/link";

const contributions = [
  {
    title: "RFID Reader Integration",
    description:
      "Integrated RFID reading and writing workflows with a Flutter application designed for Android tablets and an external desktop plate reader.",
  },
  {
    title: "RFID Tag Programming",
    description:
      "Developed an interface to write RFID identifiers to shoe tags, guiding operators through each step of the programming process.",
  },
  {
    title: "Pair-by-Pair Processing",
    description:
      "Implemented guided workflows for processing the right and left shoes individually while tracking progress within a production lot.",
  },
  {
    title: "RFID Writing Confirmation",
    description:
      "Built visual confirmation screens to display successful tag-writing operations and the RFID identifier associated with each shoe.",
  },
  {
    title: "Lot Validation",
    description:
      "Developed lot-level validation interfaces showing completed and pending shoe pairs, helping operators monitor processing progress.",
  },
  {
    title: "Lot Management",
    description:
      "Implemented workflows for saving production lots and completing their processing after the required shoe pairs have been validated.",
  },
];

const technologies = [
  "Flutter",
  "Dart",
  "Android",
  "RFID",
  "RFID Tag Writing",
  "Desktop RFID Reader",
  "Hardware Integration",
];

const screenshots = [
  {
    src: "/images/projects/shoe-tagging/inicio.png",
    title: "Application Start",
    description:
      "Start the RFID reading workflow from the Android tablet interface.",
  },
  {
    src: "/images/projects/shoe-tagging/escritura.png",
    title: "RFID Tag Writing",
    description:
      "Place the selected shoe on the desktop RFID reader and write its RFID identifier.",
  },
  {
    src: "/images/projects/shoe-tagging/validacion.png",
    title: "Writing Confirmation",
    description:
      "Confirm successful RFID tag programming and review the identifier written to the shoe.",
  },
  {
    src: "/images/projects/shoe-tagging/lotes-pendientes.jpg",
    title: "Pending Shoe Pairs",
    description:
      "Monitor shoe pairs that still require RFID validation within a production lot.",
  },
  {
    src: "/images/projects/shoe-tagging/lotes.jpg",
    title: "Validated Shoe Pairs",
    description:
      "Review completed pairs and track validation progress before finishing a lot.",
  },
];

export default function RFIDShoeTaggingPage() {
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
        <section className="mt-12 rounded-[2.5rem] bg-[#D9C7FA] p-8 md:p-14">
          <p className="text-sm font-bold tracking-widest text-[#70529B]">
            PROFESSIONAL CASE STUDY · MOBILE · IOT
          </p>

          <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">
            RFID Shoe Tagging
          </h1>

          <p className="mt-5 max-w-3xl text-xl font-semibold">
            RFID Reading, Writing & Lot Validation
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#43536A]">
            An Android application designed to support RFID
            identification and tag programming for footwear.
            It connects with a desktop RFID plate reader
            to process individual shoes, validate completed
            pairs, and manage production lots.
          </p>
        </section>

        {/* COVER */}
        <section className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-3 shadow-sm">
            <Image
              src="/images/projects/shoe-tagging/cover.png"
              alt="RFID Shoe Tagging application collage"
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
              RFID Shoe Tagging is an Android application
              developed to support RFID identification
              and tag-writing operations for footwear.
              The system guides operators through the
              processing of individual shoes using an
              external RFID reader.
            </p>

            <p className="mt-4 leading-8 text-[#526178]">
              Each production lot contains a defined
              number of shoe pairs. Operators can
              program the RFID tags associated with
              each shoe, verify successful operations,
              and monitor which pairs have been completed.
            </p>

            <p className="mt-4 leading-8 text-[#526178]">
              The application provides clear visual
              feedback throughout the workflow,
              making it easier to identify pending
              pairs and track lot completion.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#FFF0B9] p-8">
            <h3 className="text-2xl font-extrabold">
              Key Features ♡
            </h3>

            <ul className="mt-6 space-y-4 text-[#43536A]">
              <li>✿ Desktop RFID reader integration</li>
              <li>✿ RFID tag reading and writing</li>
              <li>✿ Guided shoe-by-shoe processing</li>
              <li>✿ Left and right shoe identification</li>
              <li>✿ RFID writing confirmation</li>
              <li>✿ Production lot tracking</li>
              <li>✿ Validated and pending pair status</li>
              <li>✿ Lot saving and completion workflows</li>
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
                    ? "bg-[#D9C7FA]"
                    : "bg-[#B8DDFF]"
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
            A closer look at the Android tablet interfaces
            developed for RFID shoe tagging, writing
            confirmation, and production lot validation.
          </p>

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <article
                key={screenshot.src}
                className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white p-4 shadow-sm"
              >
                <div className="overflow-hidden rounded-[1.5rem] bg-[#F7F2FF]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    width={1536}
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
