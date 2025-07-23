"use client"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"

function HeroSection() {
  const navigate = useNavigate()

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

  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a")
      link.href = "/Resume.pdf"
      link.download = "Muhammad_Muddassir_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Resume download will be available soon!")
    }
  }

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hire Inquiry - Let's Work Together!")
    const body = encodeURIComponent(
      "Hi Muhammad,\n\nI would like to discuss a project with you. Please let me know your availability.\n\nBest regards",
    )
    window.location.href = `mailto:mudassirmutalib@gmail.com?subject=${subject}&body=${body}`
  }

  const handleContactNavigation = () => {
    try {
      navigate("/contact")
    } catch (error) {
      window.location.href = "mailto:mudassirmutalib@gmail.com"
    }
  }

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Hero_Img.avif"
          alt="background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

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

      {/* <!-- Remaining code remains unchanged --> */}
    </div>
  )
}

export default HeroSection
