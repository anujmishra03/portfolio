/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { Book, School } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 max-w-5xl mx-auto px-4 text-gray-300"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-white"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="mb-6 leading-relaxed"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm a passionate developer who enjoys building clean user interfaces,
        meaningful projects, and DevOps tools. I actively participate in
        hackathons, contribute to open-source, and focus on creating
        real-world, scalable solutions.
      </motion.p>

      {/* Education */}
      <div className="space-y-6">
        {/* College */}
        <motion.div
          className="flex items-center mb-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <Book className="mr-2 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">College</h3>
        </motion.div>

        <motion.p
          className="ml-6 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am currently a <span className="text-gray-200 font-medium">3rd-year B.Tech student</span> at{" "}
          <span className="text-gray-200 font-medium">
            ABES Institute of Technology (ABESIT)
          </span>, where I am strengthening my foundations in
          software development, system design, and modern engineering
          practices.
        </motion.p>

        {/* Schooling */}
        <motion.div
          className="flex items-center mb-2 mt-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <School className="mr-2 text-green-400" />
          <h3 className="text-xl font-semibold text-white">Schooling</h3>
        </motion.div>

        <motion.div
          className="ml-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-2">
            I completed my schooling from{" "}
            <span className="font-medium text-gray-200">NRPS</span>.
          </p>

          <ul className="list-disc ml-5 space-y-1">
            <li>
              Class X – <span className="text-gray-200">83.33%</span>
            </li>
            <li>
              Class XII – <span className="text-gray-200">83.33%</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
