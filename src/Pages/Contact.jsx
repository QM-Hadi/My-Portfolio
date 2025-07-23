"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  User,
  MessageSquare,
} from "lucide-react"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle") // "idle" | "success" | "error"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mudassirmutalib@gmail.com",
      href: "mailto:mudassirmutalib@gmail.com",
      description: "Drop me a line anytime",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 1234567",
      href: "tel:+923001234567",
      description: "Call for urgent matters",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      href: "https://maps.google.com/?q=Lahore,Pakistan",
      description: "Available for local meetings",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const subject = encodeURIComponent("Contact Form - New Message")
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:mudassirmutalib@gmail.com?subject=${subject}&body=${body}`

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-sm font-medium text-blue-200">
                <Mail className="w-4 h-4" />
                Let's Connect
              </span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work
              together to create something extraordinary.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours and I'm
                  always excited to discuss new opportunities.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group block p-6 bg-gray-800/40 backdrop-blur-sm border ${info.borderColor} rounded-2xl hover:bg-gray-700/40 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-xl ${info.bgColor} border ${info.borderColor}`}>
                        <info.icon className={`w-6 h-6 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-300 font-medium mb-1">{info.value}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-r from-green-600/10 to-emerald-600/10 backdrop-blur-sm border border-green-500/20 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-white">Available for New Projects</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm currently accepting new projects and collaborations. Let's discuss how I can help bring your
                  vision to life!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={cardVariants} initial="hidden" animate="visible" className="relative">
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Send a Message
                  </h2>
                  <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-3 text-gray-300">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-3 text-gray-300">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-3 text-gray-300">
                      <MessageSquare className="w-4 h-4" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-700/70 resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 transition-all duration-300 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-300"
                    >
                      <CheckCircle className="w-6 h-6" />
                      <div>
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm text-green-400">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className="mt-6 p-4 bg-red-600/20 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-300"
                    >
                      <AlertCircle className="w-6 h-6" />
                      <div>
                        <p className="font-semibold">Something went wrong!</p>
                        <p className="text-sm text-red-400">Please try again or contact me directly.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's turn your ideas into reality. I'm here to help you build something extraordinary that stands out
                in the digital world.
              </p>
              <motion.a
                href="mailto:mudassirmutalib@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Muhammad,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20project.%20Let's%20discuss!"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl text-lg"
              >
                <Mail className="w-6 h-6" />
                Let's Work Together
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
