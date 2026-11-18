
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
      <a
        href="#home"
        className="text-xl font-extrabold tracking-tight"
      >
        rocio
        <span className="text-[#D86B9E]">.dev ✳</span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition hover:text-[#D86B9E] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-[#D86B9E]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
