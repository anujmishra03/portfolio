import { ArrowUpRight, GitPullRequest, Code2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Tambo AI",
      role: "Open Source Contributor",
      subtitle: "Developer Tooling & Self-Hosting Workflow",
      period: "Merged PR #1883",
      location: "Remote / Open Source",
      accentBorder: "border-amber-900/40 hover:border-amber-600/60",
      accentBg: "from-amber-950/10 to-transparent",
      badgeColor: "text-amber-300 bg-amber-950/40 border-amber-800/60",
      link: "https://github.com/tambo-ai",
      bullets: [
        "Improved self-hosting workflows by adding npm scripts that simplify local setup and deployment for operators.",
        "Rewrote sections of OPERATORS.md to make self-hosting instructions clearer, reproducible, and production-ready.",
        "Engineered standardized CLI commands to streamline operator onboarding across heterogeneous environments.",
      ],
      tags: ["Node.js", "npm", "DevOps Tooling", "OPERATORS.md", "Open Source"],
    },
    {
      company: "Cal.com (Cal.diy)",
      role: "Open Source Contributor",
      subtitle: "Enterprise Scheduling & Core Codebase",
      period: "Merged PR #30135",
      location: "Remote / Open Source",
      accentBorder: "border-zinc-800 hover:border-zinc-700",
      accentBg: "from-zinc-900/20 to-transparent",
      badgeColor: "text-blue-300 bg-blue-950/40 border-blue-800/60",
      link: "https://github.com/calcom/cal.com",
      bullets: [
        "Identified and fixed issue #30135 with a focused, minimal-impact change inside the existing enterprise scheduling codebase.",
        "Collaborated with core maintainers and incorporated feedback through the GitHub code review process.",
        "Ensured zero regressions across production test suites before code integration.",
      ],
      tags: ["TypeScript", "Next.js", "React", "Code Review", "Production Fixes"],
    },
    {
      company: "Smart India Hackathon (SIH 2025)",
      role: "Team Lead & Simulation Developer",
      subtitle: "MathWorks Problem Statement • AI Traffic & Safety",
      period: "ABESIT Shortlist 2025",
      location: "Ghaziabad, India",
      accentBorder: "border-zinc-800 hover:border-zinc-700",
      accentBg: "from-zinc-900/20 to-transparent",
      badgeColor: "text-emerald-300 bg-emerald-950/40 border-emerald-800/60",
      link: "https://www.linkedin.com/posts/anuj-mishra-680042295_sih2025-smartindiahackathon-teamwork-ugcPost-7372948207775109120-hZth",
      bullets: [
        "Engineered an AI-driven simulation prototype modeling urban congestion, emergency green corridors, and collision prevention.",
        "Selected among the top internal shortlisted teams at ABESIT to represent the institute for the MathWorks national challenge.",
      ],
      tags: ["React", "Node.js", "AI Simulation", "Traffic Modeling", "MathWorks"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
      {/* Section Label */}
      <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
        02 — EXPERIENCE
      </div>

      <div className="space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Where I&apos;ve contributed
          </h2>
          <p className="mt-4 text-zinc-400 font-light text-base sm:text-lg">
            Hands-on production contributions to global open-source platforms and competitive
            engineering teams.
          </p>
        </div>

        {/* Experience Cards matching screenshot page 2 & 3 */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className={`relative rounded-xl border bg-gradient-to-b ${exp.accentBg} bg-[#0e0e11] p-6 sm:p-8 transition-all duration-300 ${exp.accentBorder}`}
            >
              {/* Header row: Company name & PR status badge */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/70 pb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      aria-label={`View ${exp.company}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="text-sm font-medium text-zinc-300 mt-1">
                    {exp.role}
                  </div>
                  <div className="text-xs text-zinc-500 font-mono mt-0.5">
                    {exp.subtitle}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider border ${exp.badgeColor}`}
                  >
                    <GitPullRequest className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="hidden sm:inline text-xs text-zinc-600 font-mono">
                    • {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet points with em-dash — matching screenshot */}
              <ul className="mt-6 space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-zinc-500 select-none shrink-0 mt-0.5">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tag pills */}
              <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#161619] border border-zinc-800 text-[11px] font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
