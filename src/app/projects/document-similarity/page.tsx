
import Link from "next/link";
import {
  ArrowLeft,
  FileSearch,
  Upload,
  ScanSearch,
  ShieldCheck,
  History,
  Code2,
} from "lucide-react";

const technologies = ["Java", "HTML", "CSS", "SQL", "PDF Processing"];

const features = [
  {
    icon: Upload,
    title: "PDF Document Upload",
    description:
      "Supported the submission of PDF documents for preliminary comparison and review.",
  },
  {
    icon: ScanSearch,
    title: "Document Comparison",
    description:
      "Integrated document comparison functionality into an existing institutional web platform.",
  },
  {
    icon: ShieldCheck,
    title: "Visual Classification",
    description:
      "Presented review results using a red, yellow, and green visual classification system.",
  },
  {
    icon: History,
    title: "Review History",
    description:
      "Supported consultation of previously processed documents and their results.",
  },
];

export default function DocumentSimilarityPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#68518E] transition hover:opacity-70"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        {/* HERO */}
        <section className="mt-10 rounded-[32px] bg-[#F0EAF9] p-8 sm:p-12">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#68518E]">
            <FileSearch size={22} />
            Graduation Project · 2024
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Document Similarity & Classification System
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526178]">
            An internal web module designed to support
            preliminary document comparison, similarity
            review, and visual classification of results.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#68518E]">
              Backend & Web Development
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#68518E]">
              SEP · Institutional Project
            </span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#B14E80]">
            Project Overview
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Supporting Document Review
          </h2>

          <p className="mt-5 leading-8 text-[#526178]">
            This graduation project involved extending an
            existing institutional web platform with a
            document similarity and classification module.
            The objective was to support preliminary review
            processes through document comparison and
            accessible visualization of results.
          </p>

          <p className="mt-4 leading-8 text-[#526178]">
            The system included PDF document handling,
            role-based access, a comparison interface,
            visual result classification, and consultation
            of previous reviews.
          </p>
        </section>

        {/* CONTRIBUTIONS */}
        <section className="mt-16 rounded-[30px] border border-[#E9E6EF] bg-white p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-[#B14E80]">
            My Contributions
          </p>

          <h2 className="mt-3 text-3xl font-black">
            What I Developed
          </h2>

          <ul className="mt-7 space-y-4 text-[#526178]">
            {[
              "Developed and integrated functionality within an existing Java-based web platform.",
              "Implemented interfaces for uploading and reviewing PDF documents.",
              "Worked with SQL-based data management and review history.",
              "Supported role-based access and permissions.",
              "Implemented visual classification of document comparison results.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 leading-7">
                <span className="mt-1 font-bold text-[#B14E80]">✳</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FEATURES */}
        <section className="mt-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#B14E80]">
            Core Functionality
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Key Features
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[26px] border border-[#E9E6EF] bg-white p-7"
                >
                  <div className="inline-flex rounded-2xl bg-[#F0EAF9] p-3">
                    <Icon size={25} className="text-[#68518E]" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#526178]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <Code2 className="text-[#68518E]" />
            <h2 className="text-3xl font-black">
              Technologies
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-[#F0EAF9] px-5 py-2 text-sm font-bold text-[#68518E]"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* AVAILABILITY */}
        <section className="mt-16 rounded-[28px] bg-[#FFF0B9] p-8">
          <h2 className="text-2xl font-black">
            Internal Institutional Project
          </h2>

          <p className="mt-4 leading-8 text-[#526178]">
            This module was developed for internal institutional
            use. Screenshots and source code are not publicly
            available. The functionality supported preliminary
            document review and was not intended to provide
            a definitive legal determination of plagiarism.
          </p>
        </section>

        <footer className="mt-16 border-t border-[#E9E6EF] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-bold text-[#68518E]"
          >
            <ArrowLeft size={17} />
            Back to all projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
