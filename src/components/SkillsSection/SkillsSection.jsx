import React from 'react';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
    FaGithub, FaBootstrap,
} from 'react-icons/fa';
import {
    SiTypescript, SiNextdotjs, SiFirebase, SiMongodb,
    SiTailwindcss, SiPostman, SiGoogle, SiElectron,
    SiMongoose, SiExpress, SiGithub
} from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiC } from 'react-icons/si';
// import { SiCsharp } from 'react-icons/si';

import HeroImg from '../../Images/Hero_Img.avif'; // same background as Hero section

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
    { name: 'React JS', icon: <FaReact className="text-cyan-400" /> },
    { name: 'React Native', icon: <FaReact className="text-cyan-400" /> },
    { name: 'C', icon: <SiC className="text-blue-500" /> },
    // { name: 'C#', icon: <SiCsharp className="text-purple-600" /> },
    { name: 'Next JS', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node JS', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express JS', icon: <SiExpress className="text-white" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Mongoose', icon: <SiMongoose className="text-red-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Google Auth', icon: <SiGoogle className="text-red-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'GitHub Desktop', icon: <SiGithub className="text-white" /> },
    { name: 'Electron JS', icon: <SiElectron className="text-gray-300" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
];

function SkillsSection() {
    return (
        <div className="relative w-full py-20 text-white">
            {/* Background Image */}
            <img
                src={HeroImg}
                alt="Skills Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    My Technical Skills
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 hover:border-white/30 shadow-lg rounded-xl p-5 flex flex-col items-center transition-all hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="text-4xl mb-3">{skill.icon}</div>
                            <p className="text-sm font-semibold tracking-wide text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;
