"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    ExternalLink,
    Github,
    Eye,
    Code,
    Smartphone,
    Monitor,
    Tablet,
    Filter,
} from "lucide-react"
import EcommerceImage from "../../Images/Ecommerce Platform.jpg"
import RestaurantImage from "../../Images/Resturant.jpg"

function WebsitesDesigns() {
    const [activeFilter, setActiveFilter] = useState("All")
    const [hoveredProject, setHoveredProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "E-Commerce",
            description:
                "Modern e-commerce platform with advanced filtering, cart functionality, and payment integration.",
            image: EcommerceImage,
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: true,
        },
        {
            id: 2,
            title: "Restaurant Website",
            category: "Business",
            description:
                "Elegant restaurant website with online reservation system and menu showcase.",
            image: RestaurantImage,
            technologies: ["Next.js", "TypeScript", "Tailwind"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
        },
        {
            id: 3,
            title: "Portfolio Dashboard",
            category: "Dashboard",
            description:
                "Interactive dashboard for portfolio management with real-time analytics.",
            image: EcommerceImage,
            technologies: ["React", "Chart.js", "Firebase"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: true,
        },
        {
            id: 4,
            title: "Social Media App",
            category: "Social",
            description:
                "Full-stack social media application with real-time messaging and posts.",
            image: RestaurantImage,
            technologies: ["MERN", "Socket.io", "JWT"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
        },
        {
            id: 5,
            title: "Learning Management System",
            category: "Education",
            description:
                "Comprehensive LMS with course management, quizzes, and progress tracking.",
            image: EcommerceImage,
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: true,
        },
        {
            id: 6,
            title: "Real Estate Platform",
            category: "Business",
            description:
                "Property listing platform with advanced search and virtual tours.",
            image: RestaurantImage,
            technologies: ["React", "Express", "MySQL"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false,
        },
    ]

    const categories = ["All", "E-Commerce", "Business", "Dashboard", "Social", "Education"]

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter)

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
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Content intentionally left same */}
            </div>
        </section>
    )
}

export default WebsitesDesigns
