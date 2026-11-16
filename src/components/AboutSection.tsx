export default function AboutSection() {
  return <section id="about" className="mx-auto max-w-6xl scroll-mt-10 px-6 pb-24">
    <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-sm font-bold tracking-widest text-[#C9578E]">A LITTLE ABOUT ME ♡</p>
        <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">Developer, creator &amp; curious mind.</h2>
        <p className="mt-6 leading-8 text-[#526178]">I&apos;m Rocío, a Full Stack Developer working as an AI &amp; IoT Engineer at COMNET. I love building useful, thoughtful technology — from mobile apps that communicate with real-world devices to web platforms and cloud systems.</p>
        <p className="mt-4 leading-8 text-[#526178]">My journey began with Java and Android development, and grew into Flutter, backend APIs, cloud infrastructure, dashboards, and AI-powered applications. I believe technical work can be both rigorous and creative.</p>
      </div>
      <div className="relative rounded-[2.5rem] bg-[#F8B8D6] p-6 sm:p-9">
        <span aria-hidden="true" className="absolute -right-2 -top-6 text-6xl text-[#E9BD58]">✳</span>
        <div className="rounded-[2rem] bg-[#FFFBF4] px-5 py-10 text-center">
          <div aria-hidden="true" className="text-7xl">👩🏻‍💻</div>
          <h3 className="mt-5 text-2xl font-extrabold">Nice to meet you!</h3>
          <p className="mt-3 text-[#526178]">Code, creativity, cloud &amp; a little bit of magic ✨</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">{["Full Stack", "AI & IoT", "Cloud"].map(x => <span key={x} className="rounded-full bg-[#FFF0B9] px-3 py-2 text-xs font-bold">{x}</span>)}</div>
        </div>
      </div>
    </div>
  </section>;
}
