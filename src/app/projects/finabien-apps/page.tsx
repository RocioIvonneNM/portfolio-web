
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Smartphone,
  Monitor,
  ScanBarcode,
  Clock3,
  Package,
  Medal,
  Code2,
} from "lucide-react";

const androidFeatures = [
  {
    icon: ScanBarcode,
    title: "Barcode Registration",
    description:
      "Implemented barcode-based registration to support internal access tracking.",
  },
  {
    icon: Clock3,
    title: "Entry & Exit Tracking",
    description:
      "Recorded entries, exits, and associated time information.",
  },
];

const webFeatures = [
  {
    icon: Package,
    title: "Sports Inventory",
    description:
      "Developed functionality to register and manage sports-related inventory.",
  },
  {
    icon: Medal,
    title: "Prizes & Medals",
    description:
      "Supported administrative tracking of prizes, medals, and related items.",
  },
];

export default function FinabienPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#32658E] transition hover:opacity-70"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        {/* HERO */}
        <section className="mt-10 rounded-[32px] bg-[#EAF5FF] p-8 sm:p-12">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#32658E]">
            <Building2 size={22} />
            Social Service · 2023
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            FINABIEN
            <span className="mt-2 block text-[#32658E]">
              Internal Management Applications
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526178]">
            Two applications developed independently to
            support internal access registration, operational
            tracking, and administrative inventory processes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#32658E]">
              Independent Development
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#32658E]">
              Android & Web
            </span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#B14E80]">
            Project Overview
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Two Applications, Different Needs
          </h2>

          <p className="mt-5 leading-8 text-[#526178]">
            During my social service at FINABIEN, I developed
            two applications for internal institutional use.
            The first was an Android application focused on
            barcode-based access registration and time tracking.
            The second was a locally operated web application
            for managing sports-related inventory, prizes,
            and medals.
          </p>

          <p className="mt-4 leading-8 text-[#526178]">
            I was responsible for developing both applications,
            translating operational requirements into functional
            software solutions.
          </p>
        </section>

        {/* ANDROID APPLICATION */}
        <section className="mt-16 rounded-[30px] border border-[#E9E6EF] bg-white p-8 sm:p-10">
          <div className="inline-flex rounded-2xl bg-[#EAF5FF] p-4">
            <Smartphone size={30} className="text-[#32658E]" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#32658E]">
            Application 01 · Android
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Access & Attendance Registration
          </h2>

          <p className="mt-5 leading-8 text-[#526178]">
            An Android application built using Java and
            Android Studio to support access registration
            through barcode scanning, including entry and
            exit records, time information, and validation
            alerts.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {androidFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[24px] bg-[#F2F8FF] p-6"
                >
                  <Icon size={26} className="text-[#32658E]" />

                  <h3 className="mt-4 text-lg font-extrabold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526178]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Java", "Android Studio", "Barcode Scanning"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[#EAF5FF] px-4 py-2 text-xs font-bold text-[#32658E]"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>

        {/* WEB APPLICATION */}
        <section className="mt-8 rounded-[30px] border border-[#E9E6EF] bg-white p-8 sm:p-10">
          <div className="inline-flex rounded-2xl bg-[#FFF0B9] p-4">
            <Monitor size={30} className="text-[#8A6728]" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#8A6728]">
            Application 02 · Local Web
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Sports Inventory & Administrative Management
          </h2>

          <p className="mt-5 leading-8 text-[#526178]">
            A locally operated web application developed
            using Java, NetBeans, HTML, CSS, and MySQL.
            It supported internal inventory management
            for sports-related items and administrative
            tracking of prizes and medals.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {webFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[24px] bg-[#FFFAE9] p-6"
                >
                  <Icon size={26} className="text-[#8A6728]" />

                  <h3 className="mt-4 text-lg font-extrabold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526178]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Java", "NetBeans", "HTML", "CSS", "MySQL"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-[#FFF0B9] px-4 py-2 text-xs font-bold text-[#8A6728]"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>

        {/* RESPONSIBILITIES */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <Code2 size={28} className="text-[#32658E]" />
            <h2 className="text-3xl font-black">
              My Responsibilities
            </h2>
          </div>

          <ul className="mt-7 space-y-4 text-[#526178]">
            {[
              "Developed two independent applications for internal institutional requirements.",
              "Implemented Android functionality using Java and Android Studio.",
              "Built web interfaces using HTML and CSS.",
              "Worked with Java and MySQL for local web application functionality.",
              "Implemented operational registration and administrative inventory features.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 leading-7">
                <span className="mt-1 font-bold text-[#32658E]">✳</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* AVAILABILITY */}
        <section className="mt-16 rounded-[28px] bg-[#F0EAF9] p-8">
          <h2 className="text-2xl font-black">
            Internal Institutional Applications
          </h2>

          <p className="mt-4 leading-8 text-[#526178]">
            Both applications were developed for internal institutional use. This case study highlights their functionality, technologies, and my development responsibilities while respecting the confidentiality of institutional systems and information.
          </p>
        </section>

        <footer className="mt-16 border-t border-[#E9E6EF] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-bold text-[#32658E]"
          >
            <ArrowLeft size={17} />
            Back to all projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
