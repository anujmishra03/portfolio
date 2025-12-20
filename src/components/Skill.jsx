export default function Skills() {
  const skills = {
    Frontend: ["React", "Tailwind", "HTML", "CSS"],
    Backend: ["Node.js", "MongoDB", "REST APIs"],
    "DevOps & Tools": ["Git", "GitHub", "Docker", "CI/CD"],
  };

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-white">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, techs]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3 text-white">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg text-sm cursor-pointer
                               transition transform hover:bg-green-500 hover:text-white hover:scale-105 hover:shadow-lg"
                  >
                    {tech}
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
