"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Eye, Code, Smartphone, Monitor, Tablet, Filter } from "lucide-react"
import Ecommerce from "../../Images/Ecommerce Platform.jpg"
import Restaurant from "../../Images/Resturant.jpg"

function WebsitesDesigns() {
    const [activeFilter, setActiveFilter] = useState("All")
    const [hoveredProject, setHoveredProject] = useState < number | null > (null) // ✅ Fixed TypeScript typing

    // Portfolio projects data
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "E-Commerce",
            description: "Modern e-commerce platform with advanced filtering, cart functionality, and payment integration.",
            image: Ecommerce,
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: true,
        },
        {
            id: 2,
            title: "Restaurant Website",
            category: "Business",
            description: "Elegant restaurant website with online reservation system and menu showcase.",
            image: Restaurant,
            technologies: ["Next.js", "TypeScript", "Tailwind"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
        },
        {
            id: 3,
            title: "Portfolio Dashboard",
            category: "Dashboard",
            description: "Interactive dashboard for portfolio management with real-time analytics.",
            image: Ecommerce,
            technologies: ["React", "Chart.js", "Firebase"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: true,
        },
        {
            id: 4,
            title: "Social Media App",
            category: "Social",
            description: "Full-stack social media application with real-time messaging and posts.",
            image: Restaurant,
            technologies: ["MERN", "Socket.io", "JWT"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
        },
        {
            id: 5,
            title: "Learning Management System",
            category: "Education",
            description: "Comprehensive LMS with course management, quizzes, and progress tracking.",
            image: Ecommerce,
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: true,
        },
        {
            id: 6,
            title: "Real Estate Platform",
            category: "Business",
            description: "Property listing platform with advanced search and virtual tours.",
            image: Restaurant,
            technologies: ["React", "Express", "MySQL"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
        },
    ]

    // Filter categories
    const categories = ["All", "E-Commerce", "Business", "Dashboard", "Social", "Education"]

    // Filter projects based on active filter
    const filteredProjects =
        activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 },
        },
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 lg:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16">
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 text-sm font-medium text-blue-200">
                            <Monitor className="w-4 h-4" />
                            My Portfolio
                        </span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                            Website Designs
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
                    >
                        Explore my collection of responsive, modern websites built with cutting-edge technologies. Each project
                        showcases unique design solutions and seamless user experiences.
                    </motion.p>

                    {/* Responsive Icons */}
                    <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Smartphone className="w-5 h-5 text-green-400" />
                            <span className="text-sm">Mobile</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Tablet className="w-5 h-5 text-blue-400" />
                            <span className="text-sm">Tablet</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <Monitor className="w-5 h-5 text-purple-400" />
                            <span className="text-sm">Desktop</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === category
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
                                }`}
                        >
                            {index === 0 && <Filter className="w-4 h-4" />}
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                className={`group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${project.featured ? "lg:col-span-2" : ""
                                    }`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                                        FEATURED
                                    </div>
                                )}

                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                            >
                                                <Eye className="w-4 h-4" />
                                                Live Demo
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Code
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <motion.div
                                    className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"
                                    animate={{
                                        borderColor: hoveredProject === project.id ? "rgba(59, 130, 246, 0.5)" : "transparent",
                                    }}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 lg:p-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Let's collaborate to bring your vision to life with modern, responsive web solutions that engage your
                            audience.
                        </p>
                        <motion.a
                            href="mailto:mudassirmutalib@gmail.com?subject=Project%20Inquiry&body=Hi%20Muhammad,%0A%0AI'm%20interested%20in%20working%20with%20you%20on%20a%20web%20project.%20Let's%20discuss!"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl text-lg"
                        >
                            <Code className="w-6 h-6" />
                            Let's Build Together
                            <ExternalLink className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WebsitesDesigns
