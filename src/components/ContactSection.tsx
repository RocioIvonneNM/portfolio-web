
import {
  Mail,
  BriefcaseBusiness,
  Phone,
  Code2,
  ExternalLink,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    description: "Send me a message",
    value: "rocionegretemiranda@gmail.com",
    href: "mailto:rocionegretemiranda@gmail.com",
    icon: Mail,
    color: "bg-[#FFF0B9]",
  },
  {
    title: "LinkedIn",
    description: "Let's connect professionally",
    value: "View my profile",
    href: "https://www.linkedin.com/in/rocio-ivonne-negrete-miranda-891806436",
icon: BriefcaseBusiness,    color: "bg-[#B8DDFF]",
  },
  {
    title: "Phone",
    description: "Get in touch",
    value: "+52 55 4442 9986",
    href: "tel:+525544429986",
    icon: Phone,
    color: "bg-[#DFF3E9]",
  },
  {
    title: "GitHub",
    description: "Explore my code",
    value: "View my projects",
    href: "https://github.com/RocioIvonneNM",
icon: Code2,    color: "bg-[#F8B8D6]",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-10 px-6 py-24"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#D9C7FA] px-8 py-16 text-center sm:px-14">
        {/* DECORATION */}
        <span
          aria-hidden="true"
          className="absolute right-8 top-5 text-5xl text-[#E68DB7]"
        >
          ✿
        </span>

        {/* HEADER */}
        <p className="font-bold tracking-widest">
          LET&apos;S CONNECT ♡
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold md:text-5xl">
          Let&apos;s create something amazing!
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#43536A]">
          Interested in collaborating or discussing a
          professional opportunity? Feel free to reach out!
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={
                  contact.href.startsWith("https")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("https")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/70 bg-white/85 p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div
                  className={`${contact.color} flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl`}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    className="text-[#243653]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-[#243653]">
                    {contact.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#526178]">
                    {contact.description}
                  </p>

                  <p className="mt-2 break-words text-sm font-semibold text-[#68518E]">
                    {contact.value}
                  </p>
                </div>

                <ExternalLink
                  size={18}
                  className="shrink-0 text-[#68518E] transition group-hover:translate-x-1"
                />
              </a>
            );
          })}
        </div>

        {/* FOOTER MESSAGE */}
        <p className="mt-9 text-sm font-medium text-[#43536A]">
          Open to new opportunities, creative projects,
          and meaningful collaborations. ✨
        </p>
      </div>
    </section>
  );
}
