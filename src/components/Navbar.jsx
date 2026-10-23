import { useState } from "react";
import { ArrowUpRight, Menu, X, Award } from "lucide-react";

export default function Navbar({ onOpenCertificates }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "MILESTONES", href: "#milestones" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/60 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="text-base font-medium tracking-tight text-white hover:text-sand-200 transition-colors"
        >
          Anuj Mishra
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-widest text-zinc-400">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={onOpenCertificates}
            className="hover:text-amber-300 transition-colors duration-200 uppercase flex items-center gap-1 text-zinc-400 cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>CERTIFICATES</span>
          </button>

          <a
            href="/resume.pdf"
            download="Anuj_Mishra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 hover:text-sand-300 transition-colors"
          >
            RESUME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0e] border-b border-zinc-800 px-6 py-5 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-mono tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCertificates();
            }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-300 hover:text-amber-200 transition-colors"
          >
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATES (4)</span>
          </button>

          <a
            href="/resume.pdf"
            download="Anuj_Mishra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-sand-300 hover:text-sand-200 pt-2 border-t border-zinc-800/80"
          >
            DOWNLOAD RESUME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
