
import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import backGroundImg from "../../Images/Hero_Img.avif";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate(); // ✅ Correct hook usage

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/QM-Hadi",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-muddassir-65527a342",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mudassirmutalib@gmail.com",
    },
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backGroundImg}
          alt="Professional workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-full z-30 px-4 sm:px-6 lg:px-8 py-4 lg:py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl lg:text-2xl font-bold text-white tracking-wide"
          >
            MUDDASSIR
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-semibold px-4 py-2 lg:px-6 lg:py-3 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium text-blue-200">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Muhammad Muddassir
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Frontend & MERN Stack Developer
            <br />
            <span className="text-base sm:text-lg md:text-xl text-gray-300 font-normal">
              Crafting beautiful, responsive web experiences with modern technologies
            </span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href =
                  "mailto:mudassirmutalib@gmail.com?subject=Hire%20Inquiry&body=Hi%20Muhammad,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.";
              }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl border border-blue-500"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Hire Me!
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Resume.pdf";
                link.download = "Muhammad_Muddassir_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 transition-all duration-300 rounded-lg text-white font-semibold px-8 py-4 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
            >
              <Download className="inline-block w-5 h-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
