import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skill from "./components/Skill"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

