import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaGithub, FaNodeJs, FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiJavascript,
} from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const backgroundStyle = {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    background: "#0d1117",
    overflow: "hidden",
  };

  const starStyle = {
    position: "absolute",
    width: "2px",
    height: "2px",
    backgroundColor: "white",
    borderRadius: "50%",
    opacity: 0.7,
    animation: "twinkle 2s infinite ease-in-out alternate",
  };

  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        style={{
          ...starStyle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${1.5 + Math.random() * 2}s`,
        }}
      />
    ));
  }, []);

  const techIcons = [
    { icon: <FaReact />, color: "#61DBFB", top: "8%", left: "5%" },
    { icon: <SiTailwindcss />, color: "#38bdf8", top: "15%", left: "80%" },
    { icon: <FaGithub />, color: "#ffffff", top: "90%", left: "45%" },
    { icon: <SiMongodb />, color: "#4DB33D", top: "60%", left: "85%" },
    { icon: <FaNodeJs />, color: "#3C873A", top: "75%", left: "70%" },
    { icon: <SiJavascript />, color: "#f7df1e", top: "35%", left: "90%" },
    { icon: <FaCss3Alt />, color: "#38bdf8", top: "85%", left: "15%" },
  ];

  const styleTag = (
    <style>
      {`
        @keyframes twinkle {
          from { opacity: 0.3; transform: scale(1); }
          to { opacity: 1; transform: scale(1.5); }
        }
        @keyframes glowText {
          from { text-shadow: 0 0 4px #00ffff88; }
          to { text-shadow: 0 0 10px #00ffffcc; }
        }
        .gradient-text {
          background: linear-gradient(to right, #00ffff, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glowText 4s ease-in-out infinite alternate;
        }
      `}
    </style>
  );

  return (
    <>
      {styleTag}

      <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
        <div style={backgroundStyle}></div>
        {stars}
      </div>

      <motion.div
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                fontSize: "2.5rem",
                color: tech.color,
                top: tech.top,
                left: tech.left,
              }}
              animate={{
                y: [0, -10, 10, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>

        {/* Text Section */}
        <motion.div
          className="z-10 flex-1 flex flex-col items-center md:items-start"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Heading */}
          <motion.h1
            className="gradient-text text-4xl md:text-5xl font-bold mt-8 mb-4 text-center md:text-left"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* Amina Line */}
          <p className="text-white text-lg md:text-2xl font-bold mb-2 text-center md:text-left">
            Hye 👋 I'm Amina |{" "}
            <span className="gradient-text">
              <Typewriter
                words={["MERN Stack Developer", "MongoDB", "Express.js", "React.js", "Node.js"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>

          {/* Image (Mobile first) */}
          <div className="md:hidden my-4">
            <img
              src="/img.png"
              alt="Amina"
              onLoad={() => setImageLoaded(true)}
              className="w-[250px] rounded-3xl object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-white text-sm md:text-base max-w-xl text-center md:text-left mt-2 mb-6 opacity-80">
            I build scalable full-stack web applications with MongoDB, Express,
            React, and Node.js. Passionate about clean code, great UI, and
            creating meaningful digital experiences.
          </p>

          {/* Button */}
          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 bg-cyan-300 text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px #00ffff55",
                "0 0 20px #00ffffaa",
                "0 0 10px #00ffff55",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Explore My Work
          </motion.a>
        </motion.div>

        {/* Image for desktop */}
        <motion.div
          className="z-10 hidden md:flex flex-1 justify-end"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img
            src="/img.png"
            alt="Amina"
            onLoad={() => setImageLoaded(true)}
            className="w-[450px] rounded-3xl object-cover"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
