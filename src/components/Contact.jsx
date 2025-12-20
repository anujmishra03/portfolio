/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { Linkedin, Github, Youtube } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      href: "https://linkedin.com/in/anuj-mishra-680042295",
      label: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:bg-blue-700",
    },
    {
      href: "https://github.com/anujmishra03",
      label: "GitHub",
      icon: <Github className="w-6 h-6" />,
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      href: "https://youtube.com/@_.solo_warrior",
      label: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      color: "hover:bg-red-600",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center"
    >
      <motion.h2
        className="text-5xl font-extrabold text-white mb-4 tracking-tight"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        Connect With Me
      </motion.h2>

      <motion.p
        className="text-gray-400 text-lg mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Feel free to reach out on any of my social platforms.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map(({ href, label, icon, color }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-800 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 ${color}`}
            aria-label={label}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            {icon}
            <span className="text-lg">{label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
