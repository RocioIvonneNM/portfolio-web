
import Image from "next/image";
import Link from "next/link";

const project = {
  name: "NuevaMente",
  subtitle: "Multi-Agent AI Learning Platform",
  role: "Backend Developer & AI Engineer",
  context: "Alura Latam × No Country Hackathon · Team 30",
  video: "https://youtu.be/P3BMPgU3-N0",
  demo: "https://nuevamente-ia.streamlit.app/",
};

const imageBase = "/images/projects/nuevamente";

const contributions = [
  {
    title: "Backend Development",
    icon: "⚙️",
    description:
      "Developed backend functionality using Python and FastAPI to support the platform's AI-powered learning workflows.",
    color: "bg-[#E0F0EB]",
  },
  {
    title: "REST API Integration",
    icon: "🔗",
    description:
      "Built APIs connecting the backend services and AI generation workflows with the Streamlit frontend.",
    color: "bg-[#E8E6FA]",
  },
  {
    title: "Multi-Agent AI",
    icon: "🧠",
    description:
      "Worked on LangGraph workflows involving Researcher, Writer, and Reviewer agents.",
    color: "bg-[#FFF0CE]",
  },
  {
    title: "RAG & Context Retrieval",
    icon: "📚",
    description:
      "Improved retrieval of relevant information from institutional documents to support grounded educational content generation.",
    color: "bg-[#F9DFE9]",
  },
  {
    title: "AI Content Validation",
    icon: "✅",
    description:
      "Enhanced reviewer criteria for source fidelity, pedagogical quality, formatting, and revision of generated materials.",
    color: "bg-[#DCECF9]",
  },
  {
    title: "Team Collaboration",
    icon: "🌎",
    description:
      "Collaborated with a multidisciplinary Latin American team through Git branches, pull requests, and integration testing.",
    color: "bg-[#E7F1DD]",
  },
];

const features = [
  "Institutional document management",
  "Topic-based learning organization",
  "Student accounts and topic assignments",
  "AI-generated educational materials",
  "Personalized learning levels and formats",
  "Automated content review",
];


const gallery = [
  {
    src: "Document%20Management.png",
    title: "Document Management",
    description:
      "Upload and organize institutional documents used as the knowledge source for AI-powered learning.",
  },
  {
    src: "User%20%26%20Access%20Management.png",
    title: "User & Access Management",
    description:
      "Manage student accounts, permissions, and assigned learning topics.",
  },
  {
    src: "Personalized%20Learning.png",
    title: "Personalized Learning",
    description:
      "Students explore their assigned topics and access personalized educational experiences.",
  },
  {
    src: "AI-Generated%20Learning%20Materials.png",
    title: "AI-Generated Learning Materials",
    description:
      "Generate personalized learning content using RAG, AI agents, and selected learning preferences.",
  },
];


const technologies = [
  "Python",
  "FastAPI",
  "LangGraph",
  "Gemini",
  "RAG",
  "FAISS",
  "REST APIs",
  "Streamlit",
  "Git & GitHub",
];

export default function NuevaMentePage() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">

        {/* NAVIGATION */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-[#E5E3DE] bg-white px-5 py-3 text-sm font-semibold transition hover:bg-[#F0F7F3]"
        >
          ← Back to Portfolio
        </Link>

        {/* HERO */}
        <section className="pb-12 pt-14">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#D8EFE6] px-4 py-2 text-xs font-semibold text-[#205E55]">
              AI & Backend Engineering
            </span>
            <span className="rounded-full bg-[#EEE6FA] px-4 py-2 text-xs font-semibold text-[#645084]">
              Hackathon Project
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#438579]">
                Alura Latam × No Country
              </p>

              <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Nueva
                <span className="text-[#438579]">
                  Mente
                </span>
              </h1>

              <h2 className="mt-4 text-xl font-bold text-[#47665F] sm:text-2xl">
                {project.subtitle}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#596778]">
                An AI-powered educational platform that transforms
                institutional documents into personalized learning
                experiences using Retrieval-Augmented Generation,
                intelligent agents, and automated content validation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#205E55] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#164940]"
                >
                  ↗ Live Project
                </a>

                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C9DCD4] bg-white px-6 py-3 text-sm font-bold transition hover:bg-[#E7F3EE]"
                >
                  ▶ Watch Team Demo
                </a>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="overflow-hidden rounded-[32px] border border-[#D9E9E2] bg-gradient-to-br from-[#DDF1E8] via-[#F1F7EE] to-[#E9E2F8] p-6 shadow-sm sm:p-9">
              <div className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-lg">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-[#205E55] p-3 text-2xl text-white">
                    🎓
                  </div>

                  <div>
                    <p className="text-lg font-black text-[#205E55]">
                      NuevaMente
                    </p>
                    <p className="text-xs text-[#6F827B]">
                      AI-powered education
                    </p>
                  </div>
                </div>

                <Image
                 src={`${imageBase}/AI-Generated%20Learning%20Materials.png`}
                  alt="NuevaMente AI-generated learning materials"
                  width={1100}
                  height={800}
                  priority
                  className="h-auto w-full rounded-xl border border-[#DFE9E4]"
                />

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {["Documents", "AI Agents", "Learning"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#EFF7F2] px-2 py-3 text-xs font-bold text-[#36594F]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="grid gap-6 py-8 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#E7E3DE] bg-white p-7 sm:p-9">
            <h2 className="text-2xl font-black">
              Project Overview
            </h2>

            <p className="mt-5 leading-8 text-[#596778]">
              NuevaMente was developed during the Alura Latam
              and No Country Hackathon to help organizations
              transform existing documentation into accessible,
              personalized educational content.
            </p>

            <p className="mt-4 leading-8 text-[#596778]">
              The platform combines document management,
              student learning workflows, retrieval-based AI
              generation, and multi-agent content review.
            </p>

            <div className="mt-6 rounded-2xl bg-[#EFF7F2] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#438579]">
                My Role
              </p>
              <p className="mt-2 text-lg font-black">
                {project.role}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#65746F]">
                {project.context}
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="rounded-[28px] border border-[#E7E3DE] bg-white p-7 sm:p-9">
            <h2 className="text-2xl font-black">
              Key Features
            </h2>

            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="font-bold text-[#438579]">
                    ✓
                  </span>

                  <p className="text-sm leading-7 text-[#596778]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTRIBUTIONS */}
        <section className="py-16">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#438579]">
            My Contributions
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            What I Built
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#596778]">
            My work focused on backend engineering, AI agent
            orchestration, retrieval workflows, and integration
            between the platform&apos;s services and frontend.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contributions.map((item) => (
              <article
                key={item.title}
                className={`rounded-[26px] ${item.color} p-7 transition duration-300 hover:-translate-y-1`}
              >
                <div className="mb-6 inline-flex rounded-2xl bg-white/75 p-4 text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526174]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* AI ARCHITECTURE */}
        <section className="rounded-[30px] border border-[#DDE9E2] bg-[#F0F7F2] px-6 py-12 sm:px-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#438579]">
            Technical Architecture
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            How the AI System Works
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#596778]">
            The system retrieves relevant information from
            uploaded documents and uses specialized AI agents
            to create and review personalized learning materials.
          </p>

          <div className="mx-auto mt-9 max-w-4xl">
            <div className="rounded-2xl border border-[#D9E5DD] bg-white p-5 text-center">
              <h3 className="font-black">
                📄 Institutional Documents
              </h3>
              <p className="mt-2 text-sm text-[#6C7984]">
                PDF · Markdown · TXT
              </p>
            </div>

            <div className="py-3 text-center text-2xl text-[#438579]">
              ↓
            </div>

            <div className="rounded-2xl border border-[#C7E0D4] bg-[#DCEFE5] p-5 text-center">
              <h3 className="font-black">
                RAG & Vector Retrieval
              </h3>
              <p className="mt-2 text-sm text-[#526F63]">
                Relevant context from source documents
              </p>
            </div>

            <div className="py-3 text-center text-2xl text-[#438579]">
              ↓
            </div>

            <div className="rounded-2xl border border-[#D9E5DD] bg-white p-6">
              <h3 className="text-center text-lg font-black">
                Multi-Agent Workflow · LangGraph
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    name: "Researcher",
                    detail: "Retrieves relevant evidence",
                  },
                  {
                    name: "Writer",
                    detail: "Generates educational content",
                  },
                  {
                    name: "Reviewer",
                    detail: "Checks quality and fidelity",
                  },
                ].map((agent) => (
                  <div
                    key={agent.name}
                    className="rounded-xl bg-[#EDF5F0] p-5 text-center"
                  >
                    <p className="font-black text-[#205E55]">
                      {agent.name}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#65746F]">
                      {agent.detail}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-center text-xs leading-6 text-[#6C7984]">
                Generated content can be revised when it
                does not meet the review criteria.
              </p>
            </div>

            <div className="py-3 text-center text-2xl text-[#438579]">
              ↓
            </div>

            <div className="rounded-2xl bg-[#205E55] p-6 text-center text-white">
              <h3 className="text-lg font-black">
                🎓 Personalized Learning Materials
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Educational content adapted to the
                learner&apos;s level and selected format
              </p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="py-16">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#438579]">
            Tech Stack
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Technologies Used
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#D7E6DD] bg-white px-5 py-3 text-sm font-bold text-[#36594F]"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* REAL SCREENSHOTS */}
        <section className="py-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#438579]">
            Product Gallery
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Inside the Application
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#596778]">
            Real screenshots of NuevaMente&apos;s document
            management, administrative tools, student
            experience, and AI-powered learning interface.
          </p>

          <div className="mt-9 grid items-start gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <article
                key={item.src}
                className="overflow-hidden rounded-[24px] border border-[#E7E3DE] bg-white shadow-sm"
              >
                <div className="bg-[#F0F7F2] p-3">
                  <Image
                    src={`${imageBase}/${item.src}`}
                    alt={item.title}
                    width={1100}
                    height={900}
                    className="h-auto w-full rounded-xl"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#596778]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

       
{/* TEAM COLLABORATION */}
<section className="mt-14 rounded-[30px] border border-[#E4DDF0] bg-[#F0EAF9] p-7 sm:p-10">
  <div className="mx-auto max-w-3xl text-center">
    <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#68518E]">
      Team Collaboration
    </p>

    <h2 className="text-3xl font-black sm:text-4xl">
      Hackathon & Demo Day
    </h2>

    <p className="mt-5 leading-8 text-[#596778]">
      NuevaMente was developed collaboratively during
      the Alura Latam and No Country Hackathon.
      The team worked across backend engineering,
      AI development, frontend integration, and
      product presentation.
    </p>

    <p className="mt-4 leading-8 text-[#596778]">
      My contributions focused on backend APIs,
      AI agent workflows, RAG, and improving the
      reliability of generated educational content.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#205E55] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#164940]"
      >
        ↗ Explore Live Project
      </a>

      <a
        href={project.video}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#D8C9E8] bg-white px-6 py-3 text-sm font-bold text-[#68518E] transition hover:bg-[#F8F4FD]"
      >
        ▶ Watch Team Demo
      </a>
    </div>

    <p className="mt-5 text-xs text-[#81758F]">
      Collaborative hackathon project · Team presentation on YouTube
    </p>
  </div>
</section>

        {/* FOOTER */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7E3DE] pt-8">
          <Link
            href="/#projects"
            className="font-bold text-[#438579]"
          >
            ← Back to all projects
          </Link>

          <span className="text-sm text-[#7A8792]">
            NuevaMente · Collaborative AI Project
          </span>
        </div>
      </div>
    </main>
  );
}
