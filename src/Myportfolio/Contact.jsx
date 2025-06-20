import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Refs for fade-in on scroll
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  const headingInView = useInView(headingRef, { once: false, margin: "-50px" });
  const infoInView = useInView(infoRef, { once: false, margin: "-50px" });
  const formInView = useInView(formRef, { once: false, margin: "-50px" });
  const socialInView = useInView(socialRef, { once: false, margin: "-50px" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Fill all fields");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const floatVariant = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  // Falling fade-in animation variant
  const fallFadeInVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hidden: { opacity: 0, y: -50 },
  };

  const inputFocus = {
    boxShadow: "0 0 12px 3px #22d3ee",
  };

  const buttonPulse = {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 6px rgba(34, 211, 238, 0.4)",
      "0 0 18px rgba(6, 182, 212, 0.8)",
      "0 0 6px rgba(34, 211, 238, 0.4)",
    ],
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-tr from-black via-gray-900 to-cyan-900 text-cyan-300 overflow-hidden font-sans"
      style={{ perspective: 1000 }}
    >
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-12 left-8 w-16 h-16 rounded-full bg-cyan-500 opacity-40 mix-blend-screen"
        variants={floatVariant}
        animate="animate"
        style={{ filter: "blur(40px)" }}
      />
      <motion.div
        className="absolute top-52 right-24 w-24 h-24 rounded-full bg-cyan-400 opacity-30 mix-blend-screen"
        variants={floatVariant}
        animate="animate"
        transition={{ delay: 2, duration: 7, repeat: Infinity, repeatType: "mirror" }}
        style={{ filter: "blur(60px)" }}
      />
      <motion.div
        className="absolute bottom-24 left-1/2 w-20 h-20 rounded-full bg-cyan-600 opacity-30 mix-blend-screen"
        variants={floatVariant}
        animate="animate"
        transition={{ delay: 4, duration: 5, repeat: Infinity, repeatType: "mirror" }}
        style={{ filter: "blur(50px)" }}
      />

      <section className="relative z-10 max-w-4xl mx-auto p-8 sm:p-12 md:p-20">
        <motion.h1
          ref={headingRef}
          className="text-5xl font-extrabold text-center mb-10 tracking-wide drop-shadow-lg text-cyan-400"
          variants={fallFadeInVariant}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
        >
          Contact <span className="text-cyan-300">Me</span>
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          ref={infoRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center md:text-left"
          variants={fallFadeInVariant}
          initial="hidden"
          animate={infoInView ? "visible" : "hidden"}
        >
          <ContactInfoCard
            icon={<FaEnvelope size={28} className="text-cyan-400" />}
            title="Email"
            detail="aminasajjad19@gmail.com"
          />
          <ContactInfoCard
            icon={<FaPhoneAlt size={28} className="text-cyan-400" />}
            title="Phone"
            detail="0341 2345678"
          />
          <ContactInfoCard
            icon={<FaMapMarkerAlt size={28} className="text-cyan-400" />}
            title="Location"
            detail="Gujrat, Pakistan"
          />
        </motion.div>

        {/* Contact Form (smaller width) */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-80 rounded-xl p-8 shadow-lg max-w-2xl mx-auto"
          variants={fallFadeInVariant}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          noValidate
        >
          <motion.div className="mb-6">
            <label className="block mb-2 font-semibold text-cyan-300" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-gray-900 text-cyan-200 font-medium outline-none focus:ring-0"
              whileFocus={inputFocus}
            />
          </motion.div>
          <motion.div className="mb-6">
            <label className="block mb-2 font-semibold text-cyan-300" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-gray-900 text-cyan-200 font-medium outline-none focus:ring-0"
              whileFocus={inputFocus}
            />
          </motion.div>
          <motion.div className="mb-6">
            <label className="block mb-2 font-semibold text-cyan-300" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-gray-900 text-cyan-200 font-medium resize-none outline-none focus:ring-0"
              whileFocus={inputFocus}
            />
          </motion.div>

          {/* Error message */}
          {error && (
            <motion.p
              className="mb-4 text-center text-red-500 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            className="w-full py-4 bg-cyan-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-400"
            animate={buttonPulse}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Send Message <FaPaperPlane size={20} />
          </motion.button>

          {submitted && !error && (
            <motion.p
              className="mt-4 text-center text-green-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thanks for reaching out! I will get back to you soon.
            </motion.p>
          )}
        </motion.form>

        {/* Social Media */}
      
      </section>
    </div>
  );
}

function ContactInfoCard({ icon, title, detail }) {
  return (
    <motion.div
      className="bg-cyan-900 bg-opacity-40 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg"
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px #22d3ee" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-1 text-cyan-300">{title}</h3>
      <p className="text-sm text-cyan-200">{detail}</p>
    </motion.div>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors"
      whileHover={{ scale: 1.3, color: "#22d3ee" }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}
