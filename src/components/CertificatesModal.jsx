import { useState, useEffect } from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight, Award, ShieldCheck } from "lucide-react";

export const certificatesData = [
  {
    id: "codechef-dsa",
    title: "BCS301: Data Structures",
    issuer: "CodeChef Pro",
    date: "February 2025",
    certId: "e5b901b",
    image: "/certificates/codechef-dsa.png",
    description:
      "Successfully completed all lessons, algorithmic problem-solving projects, and core data structure implementations with CodeChef.",
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025 — Internal Shortlist",
    issuer: "Ministry of Education & ABESIT",
    date: "2025",
    certId: "REF: 290/2025-26/1.76",
    image: "/certificates/sih-2025-shortlist.png",
    description:
      "Awarded to team Six Bytes for qualifying and being shortlisted in the internal hackathon for Smart India Hackathon 2025.",
  },
  {
    id: "linux-aws",
    title: "Basic Fundamentals of Linux & AWS Cloud Computing",
    issuer: "ABESIT CRC Training & AICTE",
    date: "Aug 2025 – Nov 2025",
    certId: "36 Hrs Program",
    image: "/certificates/linux-aws-training.png",
    description:
      "Completed intensive 36-hour hands-on training program covering Linux shell scripting, system administration, and AWS cloud architecture.",
  },
  {
    id: "supervised-ml",
    title: "Foundations of Supervised Machine Learning with Python",
    issuer: "ABESIT, IEEE & Innovation Council",
    date: "Jan 2026 – Apr 2026",
    certId: "34 Hrs Program",
    image: "/certificates/supervised-ml-python.png",
    description:
      "Completed 34-hour specialized training on supervised algorithms, model evaluation, and scikit-learn implementations in Python.",
  },
];

export default function CertificatesModal({ isOpen, onClose, initialIndex = 0 }) {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        if (selectedCert) {
          setSelectedCert(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedCert, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSelectedCert(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentIndex = selectedCert
    ? certificatesData.findIndex((c) => c.id === selectedCert.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < certificatesData.length - 1) {
      setSelectedCert(certificatesData[currentIndex + 1]);
    } else {
      setSelectedCert(certificatesData[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCert(certificatesData[currentIndex - 1]);
    } else {
      setSelectedCert(certificatesData[certificatesData.length - 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      {/* Lightbox Preview if a certificate is clicked */}
      {selectedCert ? (
        <div className="relative max-w-5xl w-full bg-[#101014] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
          {/* Top header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-[#0c0c0f]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-white text-base font-serif tracking-tight">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                title="Open image in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                title="Back to gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image display */}
          <div className="relative flex-1 bg-black/50 p-4 sm:p-8 flex items-center justify-center overflow-auto">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-zinc-800/60"
            />

            {/* Left / Right Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-900/80 border border-zinc-700/80 text-white hover:bg-zinc-800 transition"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-900/80 border border-zinc-700/80 text-white hover:bg-zinc-800 transition"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption footer */}
          <div className="px-6 py-4 bg-[#0c0c0f] border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400">
            <span>{selectedCert.description}</span>
            <span className="text-zinc-500">
              {currentIndex + 1} of {certificatesData.length}
            </span>
          </div>
        </div>
      ) : (
        /* Grid Gallery View of all 4 certificates */
        <div className="relative max-w-5xl w-full bg-[#0e0e12] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[88vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/80 bg-[#0a0a0d]">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-xl font-serif text-white tracking-tight">
                  Verified Certifications &amp; Accreditations
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Official credentials &amp; training certificates of Anuj Mishra
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificates Grid */}
          <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer rounded-xl border border-zinc-800 bg-[#141418] hover:border-amber-500/50 hover:bg-[#18181e] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Image thumbnail with hover zoom */}
                <div className="relative aspect-[4/3] bg-black/60 overflow-hidden border-b border-zinc-800/80">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-zinc-300 border border-zinc-700/80">
                    Click to Enlarge ↗
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="text-amber-400/90 font-medium">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h4 className="text-base font-serif text-white group-hover:text-amber-200 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal bottom status */}
          <div className="px-6 py-4 bg-[#0a0a0d] border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>4 Verified Certificates Available</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
