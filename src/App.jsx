import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Milestones from "./components/Milestones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CertificatesModal from "./components/CertificatesModal";

export default function App() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] font-sans selection:bg-[#d6c5b3] selection:text-black">
      <Navbar onOpenCertificates={() => setIsCertModalOpen(true)} />
      <main>
        <Hero />
        <About onOpenCertificates={() => setIsCertModalOpen(true)} />
        <Experience />
        <Projects />
        <Milestones onOpenCertificates={() => setIsCertModalOpen(true)} />
        <Contact />
      </main>
      <Footer />

      {/* Interactive Certificates Modal */}
      <CertificatesModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />
    </div>
  );
}
