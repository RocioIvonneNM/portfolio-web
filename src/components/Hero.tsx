export default function Hero() {
  return <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pt-12">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FFF0B9] px-8 py-16 md:px-16 md:py-20">
      <span aria-hidden="true" className="absolute right-8 top-6 text-5xl text-[#D86B9E]">✳</span>
      <p className="mb-5 font-semibold tracking-widest text-[#805E23]">✦ HELLO, WORLD!</p>
      <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">Hi, I&apos;m Rocío! <span className="text-[#D86B9E]">✿</span></h1>
      <h2 className="mt-6 max-w-3xl text-3xl font-bold text-[#C9578E] md:text-5xl">I build things with code &amp; creativity.</h2>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#43536A]">Full Stack Developer &amp; AI/IoT Engineer passionate about creating beautiful digital experiences, intelligent applications, and technology that solves real-world problems.</p>
      <div className="mt-9 flex flex-wrap gap-4">
        <a href="#projects" className="rounded-full bg-[#243653] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#374C70]">Explore my work ↗</a>
        <a href="#contact" className="rounded-full bg-white px-7 py-3 font-semibold transition hover:-translate-y-1">Say hello ♡</a>
      </div>
      <span aria-hidden="true" className="absolute bottom-6 right-10 hidden text-6xl text-[#9BC9EF] md:block">✦</span>
    </div>
  </section>;
}
