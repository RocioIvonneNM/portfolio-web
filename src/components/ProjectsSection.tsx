
import Link from "next/link";
import {
  Smartphone,
  Cloud,
  LayoutDashboard,
  Bot,
  FileSearch,
  Building2,
} from "lucide-react";

import { projects } from "@/data/portfolio";

const colors: Record<string, string> = {
  pink: "bg-[#F8B8D6]",
  blue: "bg-[#B8DDFF]",
  yellow: "bg-[#FFF0B9]",
  lilac: "bg-[#D9C7FA]",
};

const projectIcons: Record<
  string,
  React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>
> = {
  "rfid-mobile-solutions": Smartphone,
  "multi-tenant-cloud-api": Cloud,
  "enterprise-dashboard": LayoutDashboard,
  "nuevamente": Bot,
  "document-similarity": FileSearch,
  "finabien-apps": Building2,
};


export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-10 bg-white/75 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold tracking-widest text-[#C9578E]">
          MY WORK ✳
        </p>

        <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
          Things I&apos;ve built
        </h2>

        <p className="mt-4 max-w-2xl text-[#526178]">
          A collection of professional case studies and academic
          projects. Some source code is private, but the
          engineering stories are worth sharing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = projectIcons[project.slug];

            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                {/* ICON HEADER */}
                <div
                  className={`${colors[project.accent]} flex h-40 items-center justify-center`}
                  aria-hidden="true"
                >
                  {Icon ? (
                    <Icon
                      size={76}
                      strokeWidth={1.4}
                      className="text-[#243653] transition duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-7xl">
                      {project.symbol}
                    </span>
                  )}
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex h-[calc(100%-10rem)] flex-col p-6">
                  <p className="text-xs font-extrabold tracking-widest text-[#B14E80]">
                    {project.eyebrow}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#526178]">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#FFF4D6] px-3 py-1 text-xs font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex w-fit rounded-full border border-[#243653] px-4 py-2 text-sm font-bold transition hover:bg-[#243653] hover:text-white"
                  >
                    View case study ↗
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
