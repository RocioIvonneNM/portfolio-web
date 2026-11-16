import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
 return <main className="min-h-screen bg-[#FFFBF4] text-[#243653]">
  <Navbar /><Hero /><AboutSection /><ExperienceSection /><TechStackSection /><ProjectsSection /><ContactSection />
  <footer className="px-6 pb-8 text-center text-sm text-[#526178]">Made with ♡, creativity &amp; lots of coffee — Rocío Ivonne</footer>
 </main>;
}
