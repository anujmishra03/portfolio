import { ArrowUpRight, Github, ExternalLink, Youtube, Sparkles } from "lucide-react";

export default function Projects() {
  const featuredProject = {
    badge: "FEATURED • AGENTIC AI & HEALTHCARE • HACKNOVATE 7.0 WINNER",
    title: "VITAL — Agentic AI Healthcare Assistant",
    description:
      "An autonomous voice check-in healthcare agent built to mitigate medical staff overload through natural, human-like patient calls. Features a LangChain RAG pipeline to prevent hallucinations and intelligently query symptoms — such as correlating early indicators like metallic taste with diabetes progression.",
    highlights: [
      "Autonomous Voice Check-ins: Twilio & Deepgram integration enabling real-time conversational phone triage.",
      "Intelligent Symptom Correlation: Contextual follow-up questioning that connects subtle symptoms to flag acute conditions early.",
      "RAG-Enhanced Clinical Grounding: LangChain vector pipeline strictly bounded by verified patient medical history.",
    ],
    tech: ["React", "Supabase", "Twilio", "Deepgram", "Algorand", "LangChain", "RAG"],
    github: "https://github.com/anujmishra03",
    live: "https://www.linkedin.com/posts/anuj-mishra-680042295_abesit-hacknovate7-web3-ugcPost-7446924967935586304-Z3G9",
  };

  const otherProjects = [
    {
      badge: "DEVELOPER TOOLING • AUTOMATION",
      title: "Auto-pr-cli",
      description:
        "High-performance developer CLI tool that automates pull request creation, validation, and formatting. Drastically cuts manual review cycles by generating branch validations, commit summaries, and changelog metadata.",
      tech: ["Node.js", "Git", "CLI tooling", "TypeScript"],
      github: "https://github.com/anujmishra03/auto-pr-cli",
      youtube: "https://youtu.be/-ZwdcMcMsTk?si=nBuDGBHmiZUJ-_kM",
    },
    {
      badge: "FULL-STACK • AI ASSISTANT",
      title: "Nutri Bud",
      description:
        "AI-powered nutrition and health platform for meal tracking and individualized dietary insights. Integrated with Supabase auth/database, Groq LLaMA 3 for dietary plans, and client-side jsPDF export.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Groq LLaMA 3", "jsPDF"],
      github: "https://github.com/anujmishra03",
    },
    {
      badge: "AI & SIMULATION • SIH 2025",
      title: "SIH AI Simulation",
      description:
        "Real-time AI simulation platform developed for Smart India Hackathon solving the MathWorks problem statement on urban traffic safety and dynamic congestion mitigation.",
      tech: ["React", "Node.js", "AI Simulation", "Tailwind CSS"],
      github: "https://github.com/anujmishra03/SIH-AI-simulation-25",
      live: "https://www.linkedin.com/posts/anuj-mishra-680042295_sih2025-smartindiahackathon-teamwork-ugcPost-7372948207775109120-hZth",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
      {/* Section Label */}
      <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
        03 — PROJECTS
      </div>

      <div className="space-y-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-zinc-400 font-light text-base sm:text-lg">
            A selection of production-grade developer tools, agentic AI systems, and full-stack
            platforms.
          </p>
        </div>

        {/* Featured Project Card matching Page 4 top */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0e0e11] hover:border-zinc-700 transition-all duration-300 p-6 sm:p-10 relative overflow-hidden group">
          {/* Subtle gradient background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sand-300/5 rounded-full blur-3xl pointer-events-none group-hover:bg-sand-300/10 transition-all"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-amber-300 bg-amber-950/40 border border-amber-800/60">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {featuredProject.badge}
              </span>

              <div className="flex items-center gap-4 text-xs font-mono">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                {featuredProject.live && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sand-300 hover:text-sand-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Post &amp; Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight">
              {featuredProject.title}
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light max-w-4xl">
              {featuredProject.description}
            </p>

            {/* Bullets */}
            <div className="space-y-2.5 pt-2">
              {featuredProject.highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base font-light">
                  <span className="text-sand-300 select-none shrink-0">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-[#161619] border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Grid for other projects matching Page 4 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-zinc-800/80 bg-[#0e0e11] hover:border-zinc-700 transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  {p.badge}
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-serif text-white tracking-tight">
                    {p.title}
                  </h4>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {p.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#161619] border border-zinc-800 text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono pt-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Code</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  {p.youtube && (
                    <a
                      href={p.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span>YouTube</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sand-300 hover:text-sand-200 transition-colors"
                    >
                      <span>Post</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
