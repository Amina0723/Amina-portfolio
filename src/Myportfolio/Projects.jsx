import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle, XCircle } from "lucide-react";

import projectImg1 from "../assets/cap.png";
import projectImg2 from "../assets/Capture7.png";
import projectImg4 from "../assets/webdesign.png";
import projectImg5 from "../assets/brandpic.png";
import projectImg6 from "../assets/Capture11.png";
import projectImg7 from "../assets/Capture8.png";
import projectImg8 from "../assets/Capture1.png";
import projectImg9 from "../assets/news.png";
import projectImg10 from "../assets/imgg.png";
import projectImg11 from "../assets/imgg1.png";
import projectImg12 from "../assets/imgg3.png";

const tabs = ["Tab1", "Tab2", "Tab3", "Tab4"];

const tabCards = {
  Tab1: [
    {
      img: projectImg10,
      title: "Restaurant Management System",
      desc: "A full-stack MERN application with smart table booking, interactive menu, cart system, user authentication, feedback system, and user dashboard.",
      video: "/videos/final1.mp4",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/j1j8agyy0h4?start=1&end=7&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=j1j8agyy0h4",
      img: projectImg1,
      title: "Tic Tac Toe Game",
      desc: "A classic two-player game built with React. Features responsive design, turn-based logic, and win/draw detection.",
      video: "/videos/tictak.mp4",
    },
    {
      img: projectImg6,
      title: "Website Design",
      desc: "Crafted a modern, responsive website design focusing on user experience, clean layouts, and intuitive navigation using Figma and React.",
      video: "/videos/website.mp4",
    },
  ],
  Tab2: [
    {
      img: projectImg4,
      title: "Web Design UI/UX",
      desc: "A modern responsive website design created with Figma and built in React.",
      video: "/videos/web.mp4",
    },
    {
      img: projectImg1,
      title: "Rock, Paper, Scissors Game",
      desc: "A simple interactive game built with JavaScript and React. Users play against the computer with real-time score tracking and animations.",
      video: "/videos/rock.mp4",
    },
    {
      img: projectImg2,
      title: "Portfolio Website",
      desc: "A responsive React-based portfolio showcasing my projects, skills, and contact info.",
      video: "/videos/portfolio.mp4",
    },
  ],
  Tab3: [
    {
      img: projectImg7,
      title: "Website Design",
      desc: "Developed and designed a responsive website with seamless UI/UX using Figma and React.",
      video: "/videos/website1.mp4",
    },
    {
      img: projectImg8,
      title: "Professional CV Design",
      desc: "Designed a professional CV layout with clean typography, structured sections, and elegant visuals.",
      video: "/videos/cv.mp4",
    },
    {
      img: projectImg12,
      title: "MERN User Control Panel",
      desc: "An interactive user form to add, update, and delete users with a connected MongoDB backend.",
      video: "/videos/form.mp4",
    },
  ],
  Tab4: [
    {
      img: projectImg11,
      title: "Full-Stack User Form",
      desc: "A full-stack MERN app allowing add/edit/delete user data with real-time updates.",
      video: "/videos/form1.mp4",
    },
    {
      img: projectImg5,
      title: "Brand Page Design Project",
      desc: "Developed a clean brand logo with consistent design elements.",
      video: "/videos/logo.mp4",
    },
    {
      img: projectImg9,
      title: "News & Article Page",
      desc: "Built a clean, intuitive article/news layout with SaaS-style design.",
      video: "/videos/vid.mp4",
    },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [showProjects, setShowProjects] = useState(false);
  const [revealedCardIndex, setRevealedCardIndex] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);

  const sectionRef = useRef(null);

  const resetToVideoSection = () => {
    setShowProjects(false);
    setActiveTab("Tab1");
    setRevealedCardIndex(null);
  };

  const handleCardClick = (index) => {
    setRevealedCardIndex(revealedCardIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full text-cyan-400"
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp3262647.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-90 min-h-screen w-full p-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-12 text-cyan-400 text-center transition-all duration-500 cursor-pointer"
            onClick={resetToVideoSection}
          >
            {showProjects ? "Explore Some of My Projects" : "A Glimpse of My Work"}
          </h2>

          {!showProjects && (
            <>
              <motion.div
                className="mb-12 mx-auto rounded-lg overflow-hidden shadow-lg w-full max-w-4xl"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={videoVariants}
              >
                <video
                  src="https://ik.imagekit.io/diefvstl4/WhatsApp%20Video%202025-05-25%20at%2019.39.27_bb005fc8.mp4?updatedAt=1748186039489"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-64 object-contain rounded-lg"
                />
              </motion.div>

              <div className="flex justify-center">
                <button
                  onClick={() => setShowProjects(true)}
                  className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-black py-3 px-6 rounded-full transition text-lg font-medium shadow-[0_0_12px_4px_rgba(34,211,238,0.6)] hover:shadow-[0_0_20px_6px_rgba(34,211,238,0.9)]"
                >
                  See Projects <ArrowRightCircle className="w-6 h-6" />
                </button>
              </div>
            </>
          )}

          {showProjects && (
            <>
              <div className="flex justify-center mb-4">
                <button
                  onClick={resetToVideoSection}
                  className="flex items-center gap-2 mb-10 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition text-md font-medium shadow-[0_0_10px_3px_rgba(239,68,68,0.6)] hover:shadow-[0_0_16px_5px_rgba(239,68,68,0.9)]"
                >
                  <XCircle className="w-5 h-5" /> Close Projects
                </button>
              </div>

              <div className="flex justify-center mb-8 space-x-4 mt-2 flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setRevealedCardIndex(null);
                    }}
                    className={`px-6 py-2 rounded-full font-medium transition text-cyan-400 ${
                      activeTab === tab
                        ? "bg-cyan-600 shadow-[0_0_12px_4px_rgba(34,211,238,0.7)]"
                        : "bg-black hover:bg-cyan-700 hover:shadow-[0_0_12px_4px_rgba(34,211,238,0.4)]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                  {tabCards[activeTab].map((data, i) => {
                    const isRevealed = revealedCardIndex === i;
                    return (
                      <motion.div
                        key={i}
                        variants={cardVariants}
                        className={`relative bg-black rounded-xl p-4 flex flex-col overflow-hidden group transition-all duration-300 cursor-pointer min-h-[480px] ${
                          isRevealed ? "z-50" : "z-10"
                        }`}
                        onClick={() => handleCardClick(i)}
                        style={{
                          border: "1.5px solid rgba(34, 211, 238, 0.5)",
                          boxShadow: isRevealed
                            ? "0 0 20px 5px rgba(34, 211, 238, 0.7)"
                            : "0 0 3px 1px rgba(34, 211, 238, 0.3)",
                        }}
                      >
                        <div className="relative w-full h-56 rounded-md mb-4 overflow-hidden bg-black flex items-center justify-center">
                          {data.type === "video" ? (
                            <iframe
                              src={data.src}
                              title={data.title}
                              allow="autoplay; encrypted-media"
                              className="absolute inset-0 w-full h-full object-contain"
                              frameBorder="0"
                              allowFullScreen
                            />
                          ) : (
                            <img
                              src={data.img}
                              alt={data.title}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          )}

                          <motion.div
                            className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-6 text-center"
                            initial={{ y: "0%", opacity: 1 }}
                            animate={
                              isRevealed
                                ? { y: "-100%", opacity: 0 }
                                : { y: "0%", opacity: 1 }
                            }
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          >
                            <h4 className="text-2xl font-bold text-cyan-400 mb-3 drop-shadow-lg">
                              {data.title}
                            </h4>
                            <p className="text-cyan-300 text-base mb-4 font-semibold drop-shadow-md">
                              Click to Reveal
                            </p>
                            <ArrowRightCircle className="w-10 h-10 text-cyan-500 animate-bounce drop-shadow-md" />
                          </motion.div>
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                          {data.title}
                        </h3>
                        <p className="text-cyan-300 flex-grow">{data.desc}</p>
                        <div className="mt-4">
                          <button
                            onClick={() => data.video && setVideoSrc(data.video)}
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-black py-2 px-4 rounded transition"
                          >
                            View Demo
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </div>

      {videoSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center">
          <div className="relative w-full max-w-3xl p-4">
            <video src={videoSrc} controls autoPlay className="w-full rounded-lg shadow-lg" />
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setVideoSrc(null)}
            >
              <XCircle className="w-8 h-8 text-cyan-400 hover:text-red-500" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
