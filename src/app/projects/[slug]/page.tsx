import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params; const project = projects.find(p => p.slug === slug);
 return { title: project ? `${project.title} | Rocío Ivonne` : "Project | Rocío Ivonne", description: project?.summary };
}
const colors: Record<string,string> = { pink: "bg-[#F8B8D6]", blue: "bg-[#B8DDFF]", yellow: "bg-[#FFF0B9]", lilac: "bg-[#D9C7FA]" };
export default async function ProjectPage({ params }: Props) {
 const { slug } = await params; const project = projects.find(p => p.slug === slug);
 if (!project) notFound();
 return <main className="min-h-screen bg-[#FFFBF4] px-6 py-10 text-[#243653]">
  <div className="mx-auto max-w-4xl"><div className="flex flex-wrap items-center justify-between gap-4"><Link href="/" className="text-xl font-extrabold">rocio<span className="text-[#D86B9E]">.dev ✳</span></Link><Link href="/#projects" className="rounded-full bg-white px-5 py-2 text-sm font-bold shadow-sm">← All projects</Link></div>
   <div className={`${colors[project.accent]} mt-12 rounded-[2.5rem] px-8 py-14 sm:px-12`}>
    <p className="text-sm font-extrabold tracking-widest">{project.eyebrow}</p><div aria-hidden="true" className="mt-5 text-6xl">{project.symbol}</div>
    <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{project.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8">{project.summary}</p>
   </div>
   <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr]"><div><p className="text-sm font-bold tracking-widest text-[#C9578E]">THE STORY ♡</p><h2 className="mt-3 text-3xl font-extrabold">Project overview</h2><p className="mt-5 leading-8 text-[#526178]">{project.overview}</p><h2 className="mt-10 text-2xl font-extrabold">What I worked on</h2><ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-[#526178]">{project.highlights.map(x => <li key={x}>{x}</li>)}</ul></div>
    <aside className="h-fit rounded-[2rem] border border-[#E9E6EF] bg-white p-7"><h2 className="font-extrabold">Project type</h2><p className="mt-2 text-sm text-[#526178]">{project.kind}</p><h2 className="mt-7 font-extrabold">Technologies</h2><div className="mt-4 flex flex-wrap gap-2">{project.tech.map(t => <span key={t} className="rounded-full bg-[#FFF0B9] px-3 py-2 text-xs font-semibold">{t}</span>)}</div><p className="mt-7 text-sm leading-6 text-[#526178]">{project.kind === "Professional case study" ? "Professional work is summarized at a high level to respect confidentiality. No private source code or client data is shared." : "Institutional source code is not publicly available."}</p></aside></div>
   <div className="border-t border-[#E9E6EF] py-8 text-center"><Link href="/#projects" className="font-bold text-[#B14E80]">← Back to all projects</Link></div>
  </div>
 </main>;
}
