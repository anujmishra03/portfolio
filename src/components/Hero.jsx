// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center text-center">
//       <div>
//         <h1 className="text-5xl font-bold">
//           Hi, I'm <span className="text-blue-500">Anuj Mishra</span>
//         </h1>

//         <p className="mt-4 text-gray-400 text-xl max-w-2xl mx-auto">
//           Frontend Developer | Backend Developer | React | Tailwind | MongoDB |
//           DevOps Enthusiast
//         </p>

//         <div className="mt-8 flex gap-4 justify-center">
//           {/* Resume Download */}
//           <a
//             href="/resume.pdf"
//             download="Anuj_Mishra_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
//           >
//             Download Resume
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com/anujmishra03"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-3 border border-gray-700 hover:bg-gray-800 transition rounded-lg"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }
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
