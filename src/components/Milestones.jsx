import { Trophy, Rocket, GitPullRequest, Award, ArrowUpRight } from "lucide-react";

export default function Milestones({ onOpenCertificates }) {
  const milestones = [
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: "Winner, Hacknovate 7.0",
      description:
        "Won 1st place in the national hackathon for architecting VITAL, an autonomous AI healthcare voice check-in assistant.",
      link: "https://www.linkedin.com/posts/anuj-mishra-680042295_abesit-hacknovate7-web3-ugcPost-7446924967935586304-Z3G9",
      tag: "1st Place",
      actionText: "View Post",
    },
    {
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      title: "SIH 2025 Shortlist",
      description:
        "Selected in ABESIT internal shortlist for the Smart India Hackathon MathWorks challenge on AI traffic simulation.",
      link: "https://www.linkedin.com/posts/anuj-mishra-680042295_sih2025-smartindiahackathon-teamwork-ugcPost-7372948207775109120-hZth",
      tag: "Top Teams",
      actionText: "View Post",
    },
    {
      icon: <GitPullRequest className="w-5 h-5 text-blue-400" />,
      title: "Open Source PRs",
      description:
        "Merged production code into Tambo AI (#1883) & Cal.com (#30135), streamlining developer tooling and scheduling codebases.",
      link: "https://github.com/anujmishra03",
      tag: "Merged",
      actionText: "View GitHub",
    },
    {
      icon: <Award className="w-5 h-5 text-purple-400" />,
      title: "Certifications & Academics",
      description:
        "B.Tech CSE at ABESIT (CGPA: 8.0). Certified in CodeChef Data Structures (BCS301), Linux/AWS Cloud & Supervised ML.",
      isCertificateTrigger: true,
      tag: "4 Credentials",
      actionText: "Show Certificates",
    },
  ];

  return (
    <section id="milestones" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
      {/* Section Label */}
      <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
        04 — MILESTONES
      </div>

      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Milestones
            </h2>
            <p className="mt-4 text-zinc-400 font-light text-base sm:text-lg">
              Key recognitions, hackathon victories, and verified academic credentials.
            </p>
          </div>

          <button
            onClick={onOpenCertificates}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700/80 text-sand-200 text-xs font-mono hover:bg-zinc-800 hover:border-amber-500/50 transition-all self-start sm:self-auto"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>View All Certificates (4)</span>
          </button>
        </div>

        {/* 4 Cards Grid matching Screenshot page 4 bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m) => {
            if (m.isCertificateTrigger) {
              return (
                <button
                  key={m.title}
                  onClick={onOpenCertificates}
                  className="rounded-xl border border-zinc-800/80 bg-[#0e0e11] hover:border-amber-500/60 hover:bg-[#131318] transition-all duration-300 p-6 flex flex-col justify-between group text-left cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:scale-105 group-hover:border-amber-500/40 transition-all">
                        {m.icon}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-amber-400 bg-amber-950/40 border border-amber-800/60 px-2 py-0.5 rounded uppercase">
                        {m.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif text-white group-hover:text-amber-200 transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-amber-300 group-hover:text-amber-200 transition-colors">
                    <span>{m.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              );
            }

            return (
              <a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-800/80 bg-[#0e0e11] hover:border-zinc-700 hover:bg-[#121216] transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:scale-105 transition-transform">
                      {m.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif text-white group-hover:text-sand-200 transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                  <span>{m.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
