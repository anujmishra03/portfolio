import { ArrowDown, Github, Linkedin, Award, GitPullRequest } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "8.0", label: "CGPA (B.TECH CSE)" },
    { value: "2+", label: "MERGED OSS PRs" },
    { value: "1st", label: "HACKNOVATE 7.0" },
  ];

  return (
    <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
      {/* Intro Sub-badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
          Open to SDE Roles & Internships • 2027 Grad
        </span>
      </div>

      {/* Main Hero Headline */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white leading-[1.1]">
          Architecting scalable backend systems & agentic AI tooling.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Hi, I&apos;m <span className="text-white font-medium">Anuj Mishra</span> — a Computer Science
          undergraduate at ABESIT, Hacknovate 7.0 winner, and active open-source contributor
          to Tambo AI and Cal.com.
        </p>
      </div>

      {/* Badges / Quick Proof Points */}
      <div className="flex flex-wrap items-center gap-3 mb-16">
        <a
          href="https://www.linkedin.com/posts/anuj-mishra-680042295_abesit-hacknovate7-web3-ugcPost-7446924967935586304-Z3G9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-amber-200/90 hover:border-amber-500/50 hover:bg-zinc-800/80 transition-all"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Winner — Hacknovate 7.0</span>
        </a>

        <a
          href="https://www.linkedin.com/posts/anuj-mishra-680042295_sih2025-smartindiahackathon-teamwork-ugcPost-7372948207775109120-hZth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-emerald-200/90 hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Shortlisted — SIH 2025 Internal</span>
        </a>

        <a
          href="https://github.com/anujmishra03"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all"
        >
          <GitPullRequest className="w-3.5 h-3.5 text-blue-400" />
          <span>Active Open Source Contributor</span>
        </a>
      </div>

      {/* Stats Row + Scroll Indicator matching Page 1 screenshot */}
      <div className="pt-8 border-t border-zinc-800/70 flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-500 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Cue */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors uppercase self-start md:self-end"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
