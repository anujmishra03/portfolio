import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Code2, Github, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "anujmishra2038@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/anujmishra03",
      icon: <Github className="w-4 h-4" />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/anuj-mishra-680042295",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/hinamitchy/",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      download: "Anuj_Mishra_Resume.pdf",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center border-t border-zinc-800/60">
      {/* Section Label */}
      <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
        05 — CONTACT
      </div>

      {/* Main Serif Heading matching Screenshot page 5 */}
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-tight">
        Let&apos;s build something.
      </h2>

      {/* Subtext matching Screenshot page 5 */}
      <p className="mt-6 text-zinc-400 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        Open to SDE roles, internships, and interesting conversations.
        <br />
        <span className="text-zinc-500 text-sm font-mono mt-1 inline-block">
          Class of 2027 • Based in Ghaziabad, India
        </span>
      </p>

      {/* Email Box matching the sand/tan styled box in Screenshot page 5 */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="relative group inline-block">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 px-8 py-4 rounded-md bg-[#d2c4b4] hover:bg-[#decbbe] text-black font-medium text-base sm:text-lg shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            title="Click to copy email address"
          >
            <Mail className="w-5 h-5 text-zinc-900" />
            <span className="font-mono text-sm sm:text-base tracking-tight">{email}</span>
            {copied ? (
              <span className="flex items-center gap-1 text-xs font-sans font-semibold text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded">
                <Check className="w-3.5 h-3.5" /> Copied!
              </span>
            ) : (
              <Copy className="w-4 h-4 text-zinc-700 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        <p className="mt-2 text-xs font-mono text-zinc-600">
          Click button to copy email address or write directly
        </p>
      </div>

      {/* Social Links Row matching Screenshot page 5 */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono tracking-widest text-zinc-400">
        {socialLinks.map((link, idx) => (
          <div key={link.label} className="flex items-center gap-6 sm:gap-8">
            <a
              href={link.href}
              download={link.download}
              target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            {idx < socialLinks.length - 1 && (
              <span className="text-zinc-700 select-none hidden sm:inline">/</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
