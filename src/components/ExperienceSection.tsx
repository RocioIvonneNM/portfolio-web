import { experience } from "@/data/portfolio";
const colors: Record<string,string> = { lilac: "bg-[#D9C7FA]", yellow: "bg-[#FFF0B9]", blue: "bg-[#B8DDFF]" };
export default function ExperienceSection() {
 return <section id="experience" className="scroll-mt-10 bg-white/75 py-24"><div className="mx-auto max-w-6xl px-6">
  <p className="text-sm font-bold tracking-widest text-[#C9578E]">MY JOURNEY ✦</p>
  <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">How I got here</h2>
  <p className="mt-4 max-w-2xl text-[#526178]">Every step taught me something new — from my first Java apps to cloud-connected products.</p>
  <div className="mt-10 space-y-5">{experience.map(item => <article key={item.organization} className="flex flex-col gap-5 rounded-[2rem] border border-[#E9E6EF] bg-white p-6 shadow-sm sm:flex-row sm:p-8">
   <div className={`${colors[item.accent]} h-fit shrink-0 rounded-2xl px-5 py-4 text-sm font-extrabold sm:w-44`}>{item.period}</div>
   <div><h3 className="text-xl font-extrabold sm:text-2xl">{item.organization}</h3><p className="mt-1 font-semibold text-[#C9578E]">{item.position}</p><p className="mt-3 leading-7 text-[#526178]">{item.description}</p></div>
  </article>)}</div>
 </div></section>;
}
