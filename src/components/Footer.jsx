/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  const links = [
    {
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      href: "https://github.com/anujmishra03",
      label: "GitHub",
      icon: <Github className="w-6 h-6" />,
    },
    {
      href: "https://youtube.com/@yourchannel",
      label: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 text-center">
      <motion.h2
        className="text-4xl font-bold"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        Let’s Build Something Impactful
      </motion.h2>

      <motion.p
        className="mt-4 text-gray-400"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Open to internships, hackathons, and open-source collaborations.
      </motion.p>

      <div className="mt-8 flex justify-center gap-6 text-blue-400">
        {links.map(({ href, label, icon }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold bg-gray-800 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            {icon}
            {label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
