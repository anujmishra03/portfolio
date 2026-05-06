export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Building <span className="text-blue-500">real-world</span> web & DevOps
          solutions.
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Hi, I’m <span className="text-white font-semibold">Anuj Mishra</span> —
          a full-stack developer passionate about React, backend systems,
          DevOps automation, and open-source.
        </p>

        {/* Achievement Section */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/posts/anuj-mishra-680042295_abesit-hacknovate7-web3-ugcPost-7446924967935586304-Z3G9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdf5UABjRIYG2ByzMFFjTXw7Q-SzWzS82w"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600/20 text-green-400 border border-green-500 rounded-full text-sm font-medium hover:bg-green-600/30 transition"
          >
            🏆 Winner - Hacknovate 7.0
          </a>

          <a
            href="https://www.linkedin.com/posts/anuj-mishra-680042295_sih2025-smartindiahackathon-teamwork-ugcPost-7372948207775109120-hZth?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdf5UABjRIYG2ByzMFFjTXw7Q-SzWzS82w"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-yellow-600/20 text-yellow-400 border border-yellow-500 rounded-full text-sm font-medium hover:bg-yellow-600/30 transition"
          >
            🚀 Shortlisted - SIH Internal 2025
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download="Anuj_Mishra_Resume.pdf"
            className="px-6 py-3 border border-gray-700 hover:bg-gray-800 transition rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}