
const projects = [
  {
    title: "RFID & Inventory Management",
    description:
      "Mobile applications and cloud solutions for intelligent asset tracking.",
    tech: ["Flutter", "Dart", "RFID", "Google Cloud"],
    color: "bg-[#F8B8D6]",
    symbol: "✿",
  },
  {
    title: "Multi-Tenant Cloud API",
    description:
      "Scalable backend architecture for assets, transactions, and business operations.",
    tech: ["Node.js", "Express", "Firestore"],
    color: "bg-[#B8DDFF]",
    symbol: "✳",
  },
  {
    title: "AI-Powered Applications",
    description:
      "Intelligent assistants and automated monitoring tools for enterprise workflows.",
    tech: ["AI Agents", "Flutter", "Cloud"],
    color: "bg-[#D9C7FA]",
    symbol: "✦",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          rocio<span className="text-[#E68DB7]">.dev ✳</span>
        </a>

        <div className="flex items-center gap-5 text-sm font-medium">
          <a href="#about" className="hover:text-[#D86B9E]">
            About
          </a>
          <a href="#projects" className="hover:text-[#D86B9E]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#D86B9E]">
            Contact
          </a>
        </div>
      </nav>

      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FFF0B9] px-8 py-20 md:px-16">
          <div className="absolute right-8 top-8 text-5xl text-[#E68DB7]">
            ✳
          </div>

          <p className="mb-5 font-semibold tracking-widest text-[#805E23]">
            ✦ HELLO, WORLD!
          </p>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
            Hi, I&apos;m Rocío!
            <span className="ml-3 inline-block text-[#E68DB7]">✿</span>
          </h1>

          <h2 className="mt-6 max-w-3xl text-3xl font-bold text-[#D86B9E] md:text-5xl">
            I build things with code & creativity.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#43536A]">
            Full Stack Developer & AI/IoT Engineer passionate about creating
            beautiful digital experiences, intelligent applications, and
            technology that solves real-world problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#243653] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#374C70]"
            >
              Explore my work ↗
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 font-semibold text-[#243653] transition hover:-translate-y-1"
            >
              Say hello ♡
            </a>
          </div>

          <div className="absolute bottom-7 right-10 hidden text-6xl text-[#9BC9EF] md:block">
            ✦
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="font-semibold text-[#D86B9E]">A LITTLE ABOUT ME ✿</p>
          <h2 className="mt-3 text-4xl font-extrabold">
            Developer, creator & curious mind
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#59677D]">
            I&apos;m a software developer working as an AI & IoT Engineer at
            COMNET. I enjoy connecting frontend, backend, cloud technologies,
            and smart devices to create meaningful solutions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: "⌘", title: "Full Stack", color: "bg-[#F8B8D6]" },
            { icon: "☁", title: "Cloud & APIs", color: "bg-[#B8DDFF]" },
            { icon: "✧", title: "AI & IoT", color: "bg-[#D9C7FA]" },
          ].map((item) => (
            <div
              key={item.title}
              className={`${item.color} rounded-[2rem] p-9 text-center transition hover:-translate-y-2`}
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-white/70 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-semibold text-[#D86B9E]">MY WORK ✳</p>
          <h2 className="mt-3 text-4xl font-extrabold">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-[#59677D]">
            A little collection of projects, ideas, and technology.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-[#E9E6EF] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`${project.color} flex h-44 items-center justify-center text-8xl`}
                >
                  {project.symbol}
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-extrabold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#59677D]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#FFF4D6] px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-[#D9C7FA] px-8 py-16 text-center">
          <p className="font-semibold">LET&apos;S CONNECT ♡</p>
          <h2 className="mt-4 text-4xl font-extrabold">
            Let&apos;s create something amazing!
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#43536A]">
            Interested in my work? Explore my projects and connect with me on
            GitHub.
          </p>

          <a
            href="https://github.com/RocioIvonneNM"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#243653] px-8 py-3 font-semibold text-white transition hover:-translate-y-1"
          >
            Visit my GitHub ↗
          </a>
        </div>
      </section>

      <footer className="pb-8 text-center text-sm text-[#59677D]">
        Made with ♡, creativity & lots of coffee — Rocío Ivonne
      </footer>
    </main>
  );
}
