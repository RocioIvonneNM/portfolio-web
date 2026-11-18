
"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Complete business platforms, tailored applications, and software built around your needs.",
    icon: Code2,
    color: "#FFF0B9",
  },
  {
    title: "Modules & System Improvements",
    description:
      "New features, independent modules, modernization, and improvements to existing software.",
    icon: Layers3,
    color: "#F8B8D6",
  },
  {
    title: "Cloud & API Integrations",
    description:
      "Backend services, REST APIs, cloud infrastructure, databases, and third-party integrations.",
    icon: Cloud,
    color: "#B8DDFF",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent assistants, RAG applications, automated workflows, and AI-powered solutions.",
    icon: BrainCircuit,
    color: "#D9C7FA",
  },
  {
    title: "Mobile & IoT Solutions",
    description:
      "Mobile applications, RFID solutions, inventory tracking, and connected devices.",
    icon: Smartphone,
    color: "#CDEEDB",
  },
  {
    title: "Adaptation & Support",
    description:
      "Customization, system integrations, maintenance, and improvements as your business grows.",
    icon: Sparkles,
    color: "#FFE0CC",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFBF4] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A6759D]">
            Software Development Services
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#243653] md:text-5xl">
            Your idea, my next challenge.
            <span className="text-[#D78CB4]"> ✨</span>
          </h2>

          <p className="text-lg leading-8 text-[#52617A]">
            Whether you need a complete platform, a single
            feature, or a completely new solution, I can
            help bring your ideas to life with technology
            tailored to your business.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-[#243653]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon
                    className="h-7 w-7 text-[#243653]"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[#243653]">
                  {service.title}
                </h3>

                <p className="leading-7 text-[#52617A]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-[#FFF0F5] px-7 py-10 text-center md:px-12">
          <h3 className="mb-3 text-2xl font-bold text-[#243653]">
            Have a project in mind?
          </h3>

          <p className="mx-auto mb-7 max-w-xl text-[#52617A]">
            From an initial idea to an existing system
            that needs improvements, let's explore
            what we can build together.
          </p>

          <a
            href="mailto:rocionegretemiranda@gmail.com?subject=Software%20Development%20Inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-[#243653] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#405577]"
          >
            Let's discuss your project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
