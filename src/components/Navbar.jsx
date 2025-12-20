export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-white">Anuj Mishra</h1>
        <div className="flex space-x-6 text-gray-400">
          {["about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="relative text-gray-400 hover:text-white transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
