export default function Projects() {
  const projects = [
    {
      title: "Auto-PR-CLI",
      problem:
        "Manual code review and pull request creation slows down teams.",
      solution:
        "Built an AI-powered CLI that scans repositories and auto-creates pull requests.",
      tech: ["Node.js","Cline","coderabbit", "CLI"],
      github: "https://github.com/anujmishra03/auto-pr-cli",
      // live: "#",
      youtube: "https://youtu.be/-ZwdcMcMsTk?si=nBuDGBHmiZUJ-_kM",
    },
    {
      title: "SIH AI Simulation",
      problem:
        "Lack of real-time AI simulation tools for smart traffic and safety.",
      solution:
        "Developed an AI-based simulation platform during SIH hackathon.",
      tech: ["React", "Node.js", "AI", "Simulation"],
      github: "https://github.com/anujmishra03/SIH-AI-simulation-25",
    },
    {
      title: "auto-devops-ai-core",
      problem:
        "Managing infrastructure manually is error-prone and time-consuming.",
      solution:
        "Built an AI-driven DevOps core system to automate workflows, monitoring, and CI/CD decisions.",
      tech: ["DevOps", "AI", "Automation"],
      github: "https://github.com/anujmishra03/auto-devops-ai-core",
    },
  ]

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>

            <p className="text-gray-400 mt-4">
              <strong>Problem:</strong> {p.problem}
            </p>
            <p className="text-gray-400 mt-2">
              <strong>Solution:</strong> {p.solution}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 bg-gray-800 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS (SAFE RENDERING) */}
            <div className="mt-6 flex gap-4 text-blue-400">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>

              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              )}

              {p.youtube && (
                <a href={p.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
