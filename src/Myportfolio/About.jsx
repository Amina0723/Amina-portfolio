import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaWordpress,
  FaFileWord, FaFileExcel, FaFilePowerpoint,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiJavascript,
} from "react-icons/si";

export default function AboutPage() {
  const [showSkills, setShowSkills] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const skillsRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (showSkills && skillsRef.current) {
      const top = skillsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - 150, behavior: "smooth" });
    }
  }, [showSkills]);

  useEffect(() => {
    if (isInView) {
      setShowSkills(false);
      setActiveSkill(null);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 18 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1.2 } },
  };

  const buttonAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0px rgba(0, 255, 255, 0)",
      "0 0 20px rgba(0, 255, 255, 0.7)",
      "0 0 0px rgba(0, 255, 255, 0)",
    ],
  };

  const bgStyle = {
    backgroundImage: `url('https://media.istockphoto.com/id/1388635225/photo/businessman-click-on-skills.jpg?s=612x612&w=0&k=20&c=lsCABr8nyaj9E2gFnAuo5V0V_JnGz4d43IZVheP7eoo=')`,
    backgroundSize: "cover",
    backgroundPosition: hovered ? "center 55%" : "center 50%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    transition: "background-position 0.6s ease",
  };

  const skills = [
    { title: "HTML", icon: <FaHtml5 size={40} />, gradient: "bg-gradient-to-r from-teal-600 via-cyan-800 to-blue-800" },
    { title: "CSS", icon: <FaCss3Alt size={40} />, gradient: "bg-gradient-to-r from-blue-900 via-cyan-600 to-teal-800" },
    { title: "TailwindCSS", icon: <SiTailwindcss size={40} />, gradient: "bg-gradient-to-r from-teal-600 to-cyan-600" },
    { title: "React.js", icon: <FaReact size={40} />, gradient: "bg-gradient-to-r from-blue-900 to-[#987D9B]" },
    { title: "JavaScript", icon: <SiJavascript size={40} />, gradient: "bg-gradient-to-r from-[#16423C] via-[#088395] to-[#40A578]" },
    { title: "Node.js", icon: <FaNodeJs size={40} />, gradient: "bg-gradient-to-r from-cyan-500 to-teal-600" },
    { title: "Express", icon: <SiExpress size={40} />, gradient: "bg-gradient-to-r from-gray-400 to-blue-800" },
    { title: "MongoDB", icon: <SiMongodb size={40} />, gradient: "bg-gradient-to-r from-[#134B70] to-green-200" },
    { title: "GitHub", icon: <FaGithub size={40} />, gradient: "bg-gradient-to-r from-blue-800 via-teal-800 to-cyan-800" },
    { title: "WordPress", icon: <FaWordpress size={40} />, gradient: "bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900" },
    { title: "Word", icon: <FaFileWord size={40} />, gradient: "bg-gradient-to-r from-blue-500 to-blue-700" },
    { title: "Excel", icon: <FaFileExcel size={40} />, gradient: "bg-gradient-to-r from-green-600 to-green-900" },
    { title: "PowerPoint", icon: <FaFilePowerpoint size={40} />, gradient: "bg-gradient-to-r from-red-600 to-red-800" },
  ];

  return (
    <div className="min-h-screen relative text-white font-sans" style={bgStyle}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <section ref={sectionRef} className="relative flex flex-col items-center justify-center px-8 py-20">
        <motion.div
          className="max-w-xl text-center border-4 border-cyan-600 rounded-xl mx-8 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-cyan-600">Amina</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg">
            I’m a Full Stack Developer with expertise in the following technologies:
          </p>
        </motion.div>

        <motion.div
          className="mt-12 w-full text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.button
            onClick={() => setShowSkills(!showSkills)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-400 transition rounded-full font-medium relative z-10"
            animate={buttonAnimation}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Learn More About My Technical Skills
          </motion.button>
        </motion.div>

        {showSkills && (
          <motion.div
            ref={skillsRef}
            className="mt-12 w-full overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-600 text-center">
              My Technical Skills
            </h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.title}
                  {...skill}
                  activeSkill={activeSkill}
                  setActiveSkill={setActiveSkill}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </section>
    </div>
  );
}

function SkillCard({ title, icon, gradient, activeSkill, setActiveSkill }) {
  const isMobile = window.innerWidth <= 768;
  const isActive = activeSkill === title;

  const skillPercentages = {
    HTML: 90, CSS: 85, TailwindCSS: 80, "React.js": 85,
    JavaScript: 88, "Node.js": 80, Express: 75, MongoDB: 70,
    GitHub: 85, WordPress: 60, Word: 70, Excel: 75, PowerPoint: 65,
  };

  const percentage = skillPercentages[title] || 80;

  const handleHoverStart = () => {
    if (!isMobile) setActiveSkill(title);
  };

  const handleHoverEnd = () => {
    if (!isMobile) setActiveSkill(null);
  };

  const handleClick = () => {
    if (isMobile) setActiveSkill(isActive ? null : title);
  };

  return (
    <motion.div
      className={`rounded-xl p-6 text-sm sm:text-base font-semibold text-white cursor-pointer transition-shadow duration-300 flex flex-col items-center justify-center ${gradient} ${
        isActive ? "shadow-[0_0_30px_8px_rgba(0,155,155,0.6)]" : "shadow-md"
      }`}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      animate={isActive ? { scale: 1.05, rotate: 5 } : { scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div
        className="mb-2 flex justify-center items-center"
        animate={isActive ? { rotate: 180 } : { rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <span>{title}</span>

      {isActive && (
        <div className="w-full mt-3">
          <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
            <motion.div
              className="bg-cyan-400 h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="text-right text-cyan-300 font-semibold mt-1 text-sm">
            {percentage}%
          </div>
        </div>
      )}
    </motion.div>
  );
}
