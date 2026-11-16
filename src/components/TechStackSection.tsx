import { skills } from "@/data/portfolio";
const colors: Record<string,string> = { pink: "bg-[#F8B8D6]", yellow: "bg-[#FFF0B9]", blue: "bg-[#B8DDFF]", lilac: "bg-[#D9C7FA]" };
export default function TechStackSection() {
 return <section id="skills" className="mx-auto max-w-6xl scroll-mt-10 px-6 py-24">
  <p className="text-sm font-bold tracking-widest text-[#C9578E]">MY TOOLBOX ✳</p><h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Technologies I work with</h2>
  <p className="mt-4 max-w-2xl text-[#526178]">The tools I use to turn ideas into real applications.</p>
  <div className="mt-10 grid gap-5 md:grid-cols-2">{skills.map(group => <article key={group.group} className="rounded-[2rem] border border-[#E9E6EF] bg-white p-7 shadow-sm">
    <h3 className={`${colors[group.accent]} inline-block rounded-full px-5 py-2 font-extrabold`}>{group.group}</h3>
    <div className="mt-6 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-[#E9E6EF] bg-[#FFFBF4] px-4 py-2 text-sm font-medium">{item}</span>)}</div>
  </article>)}</div>
 </section>;
}
