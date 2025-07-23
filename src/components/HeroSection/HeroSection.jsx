"use client"
import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

// Enhanced Hero Section with better structure and animations
function HeroSection() {
  const router = useRouter()

  // Social links configuration
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/QM-Hadi",
      color: "hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-muddassir-65527a342",
      color: "hover:bg-blue-800",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mudassirmutalib@gmail.com",
      color: "hover:bg-red-800",
    },
  ]

  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Handle resume download
  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a")
      link.href = "/placeholder.svg?height=800&width=600&text=Muhammad+Muddassir+Resume"
      link.download = "Muhammad_Muddassir_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Resume download will be available soon!")
    }
  }

  // Handle hire me action
  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire Inquiry - Let's Work Together!")
    const body = encodeURIComponent(
      "Hi Muhammad,\n\nI would like to discuss a project with you. Please let me know your availability.\n\nBest regards",
    )
    window.location.href = `mailto:mudassirmutalib@gmail.com?subject=${subject}&body=${body}`
  }

  // Handle navigation to contact page
  const handleContactNavigation = () => {
    try {
      router.push("/contact")
    } catch (error) {
      // Fallback to email if navigation fails
      window.location.href = "mailto:mudassirmutalib@gmail.com"
    }
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920&text=Professional+Developer+Workspace"
          alt="Professional workspace background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Enhanced Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-30 px-4 sm:px-6 lg:px-8 py-4 lg:py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl lg:text-2xl font-bold text-white tracking-wide cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MUDDASSIR
            </span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactNavigation}
            className="group bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-semibold px-4 py-2 lg:px-6 lg:py-3 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Enhanced Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-sm font-medium text-blue-200 shadow-lg">
              <span className="animate-pulse">👋</span>
              Welcome to my portfolio
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Hey, I'm{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Muhammad Muddassir
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Frontend & MERN Stack Developer
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-3xl mx-auto">
              Crafting beautiful, responsive web experiences with modern technologies
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {["React", "Node.js", "MongoDB", "Express", "Next.js"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMe}
              className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 rounded-lg text-white font-semibold px-8 py-4 shadow-lg hover:shadow-xl border border-blue-500 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Hire Me!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="group w-full sm:w-auto bg-transparent hover:bg-white/10 transition-all duration-300 rounded-lg text-white font-semibold px-8 py-4 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
 