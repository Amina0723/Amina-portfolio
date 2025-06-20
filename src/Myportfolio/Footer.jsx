import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visible triggers animation
      }
    );

    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/yourhandle",
      label: "Twitter",
    },
  ];

  return (
    <motion.footer
      ref={footerRef}
      className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-cyan-400 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* bottom dark shadow gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40px",
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
          zIndex: 5,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base select-none z-10">
          &copy; {new Date().getFullYear()} Amina's Portfolio. All rights reserved.
        </p>

        <nav className="flex gap-8 z-10">
          {links.map(({ name, href }) => (
            <motion.a
              key={name}
              href={href}
              className="relative text-cyan-400 font-medium tracking-wide hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.15, textShadow: "0 0 8px #22d3ee" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {name}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex gap-6 z-10">
          {socialLinks.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.3, textShadow: "0 0 12px #22d3ee", rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
