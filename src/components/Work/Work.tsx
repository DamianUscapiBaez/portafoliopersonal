"use client"
import { motion } from 'framer-motion'
import { cardContent } from "./Work.data"
import Image from "next/image"
import { CiDesktop } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';

export function Work() {
    return (
        <div className="w-full flex justify-center mt-20 mb-20">
            <div className="max-w-5xl w-full mx-auto overflow-hidden md:mt-20">
                <h1 className="my-2 text-2xl text-center md:text-4xl">
                    Mis últimos <span className="text-cyan-400">trabajos realizados.</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2">
                    {cardContent.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                className="w-full h-40 object-cover rounded-t-lg"
                                src={project.imageUrl}
                                alt="Project Image"
                                width="500"
                                height="400"
                            />
                            <div className="p-4">
                                <h4 className="text-sm font-bold mb-2 text-gray-800">{project.title}</h4>
                                <p className="text-xs text-gray-600 mb-1" style={{ textAlign: 'justify' }}>{project.description}</p>
                                <div className="flex space-x-2 justify-center">
                                    {project.skills.map((skill, index) => (
                                        <div key={index} className="text-blue-500">
                                            {skill.icon}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center mt-2 space-x-2">
                                    <a
                                        href={project.repositoryLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-full flex items-center hover:bg-blue-700 transition-all duration-300"
                                    >
                                        <FaGithub className="mr-1" />
                                        Ver código
                                    </a>
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-full flex items-center hover:bg-green-700 transition-all duration-300"
                                    >
                                        <CiDesktop className="mr-1" />
                                        Ver demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}