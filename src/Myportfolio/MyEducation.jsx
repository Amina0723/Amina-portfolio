import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "MSc – Master of Science",
    details: "Mathematics",
    subtitle: "UOG",
  },
  {
    title: "BSc – Bachelor of Science",
    details: "Double Maths & Computer Science",
    subtitle: "UOG",
  },
  {
    title: "ICS – Intermediate in Computer Science",
    details: "Maths, Statistics & Computer Science",
    subtitle: "Fatima Jinnah College",
  },
  {
    title: "Diploma in MERN Stack Development",
    details: "MongoDB, Express, React.js, Node.js",
    subtitle: "Adan IT Center",
  },
  {
    title: "WordPress Developer",
    desc: "Experienced in custom themes, performance optimization, and responsive design.",
    subtitle: "Adan IT Center",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function MyEducation() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimate(false);
      const timeout = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <section
      id="myEducation"
      ref={ref}
      className="min-h-screen py-16 px-6 md:px-20 bg-[#0d1117] text-white relative overflow-hidden"
    >
      {/* Glowing Merged Lights */}
      <div className="glow top-left" />
      <div className="glow bottom-right" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold gradient-text mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ duration: 1 }}
        >
          <FaGraduationCap className="inline mr-2 text-cyan-400" />
          My Education
        </motion.h2>

        {animate && (
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0f172a] border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-400/50 transition duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 animate-pulse">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1 italic">
                  {edu.subtitle}
                </p>
                <p className="text-gray-300 mt-2">
                  {edu.details || edu.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <style>
        {`
          .gradient-text {
            background: linear-gradient(to right, #00ffff, #38bdf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: glowText 4s ease-in-out infinite alternate;
          }

          @keyframes glowText {
            from { text-shadow: 0 0 6px #00ffff55; }
            to { text-shadow: 0 0 15px #00ffffaa; }
          }

          .glow {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, #00ffff44 0%, transparent 70%);
            filter: blur(100px);
            opacity: 0.6;
            animation: pulseGlow 5s ease-in-out infinite alternate;
            z-index: 1;
          }

          .glow.top-left {
            top: -100px;
            left: -100px;
          }

          .glow.bottom-right {
            bottom: -100px;
            right: -100px;
          }

          @keyframes pulseGlow {
            from {
              transform: scale(1);
              opacity: 0.5;
            }
            to {
              transform: scale(1.2);
              opacity: 0.9;
            }
          }
        `}
      </style>
    </section>
  );
}
