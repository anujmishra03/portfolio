import { GraduationCap, Award } from "lucide-react";

export default function About({ onOpenCertificates }) {
  const skillCategories = [
    {
      category: "LANGUAGES",
      skills: ["Java", "JavaScript", "TypeScript"],
    },
    {
      category: "BACKEND & DATABASES",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "JWT",
        "OAuth",
        "SQL",
        "PostgreSQL (Supabase)",
      ],
    },
    {
      category: "FRONTEND & AI",
      skills: [
        "React",
        "Next.js 15",
        "Tailwind CSS",
        "LangChain",
        "RAG",
        "Groq (LLaMA 3)",
      ],
    },
    {
      category: "DEVOPS, TOOLS & SYSTEMS",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "CI/CD",
        "Postman",
        "cURL",
        "Linux (WSL)",
        "Vim",
        "System Design",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-800/60">
      {/* Section Label matching screenshot format */}
      <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-8">
        01 — ABOUT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            The engineer behind the code
          </h2>

          <div className="space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
            <p>
              I&apos;m a Computer Science undergraduate at{" "}
              <span className="text-zinc-200 font-normal">ABESIT, Ghaziabad</span> (B.Tech, 2027)
              with a deep focus on data structures, distributed backend systems, and agentic AI.
            </p>
            <p>
              Winner of <span className="text-zinc-200 font-normal">Hacknovate 7.0</span> for building
              an autonomous voice check-in healthcare agent, and an active open-source contributor
              with production pull requests merged into{" "}
              <span className="text-zinc-200 font-normal">Tambo AI</span> and{" "}
              <span className="text-zinc-200 font-normal">Cal.com</span>.
            </p>
            <p>
              I love turning complex problems into elegant developer tools, resilient APIs, and
              real-time AI pipelines that make an immediate real-world difference.
            </p>
          </div>

          {/* Education Box */}
          <div className="pt-6 border-t border-zinc-800/80 space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-sand-300 mt-1 shrink-0" />
              <div>
                <h4 className="text-white text-sm font-medium">
                  ABES Institute of Technology, Ghaziabad
                </h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  B.Tech in Computer Science & Engineering (2023 – 2027) • CGPA: 8.0
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-8">
              <div>
                <h4 className="text-zinc-300 text-xs font-medium">
                  New Rainbow Public School, Ghaziabad
                </h4>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">
                  Senior Secondary (Class XII) • 83.33%
                </p>
              </div>
            </div>

            <div className="pt-2 pl-8">
              <button
                onClick={onOpenCertificates}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>View Verified Certificates (4) ↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Categorized Skill Pills matching Screenshot page 1 */}
        <div className="lg:col-span-6 space-y-8 bg-zinc-950/40 p-6 sm:p-8 rounded-2xl border border-zinc-800/80">
          {skillCategories.map((group) => (
            <div key={group.category} className="space-y-3">
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                {group.category}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-[#121215] border border-zinc-800/80 text-zinc-300 text-xs font-medium hover:border-zinc-600 hover:text-white transition-all cursor-default"
                  >
                    {skill}
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
