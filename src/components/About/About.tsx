"use client";
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { motion } from 'framer-motion';
import { dataAboutSkills, dataAbout, dataAboutList } from "./About.data";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import about from "../../assets/about.svg";

export function About() {
    const [index, setIndex] = useState(0);

    const accentColor = "#ffcc00"; // Amarillo para acentos
    const motionTransitionsAbout = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay: 0.2 },
    };
    return (
        <div style={{ background: "#1f2538", color: "#00d9ff" }} className="min-h-screen flex items-center justify-center">
            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
                className="flex-1 md:items-center px-6 mx-auto md:max-w-4xl pt-20 md:pt-0 pb-20 overflow-hidden text-center md:text-left"
            >
                <h1 className="mb-6 md:text-4xl text-center font-extrabold text-white">
                    Creando <span style={{ color: accentColor, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>websites</span> con <br />
                    <span style={{ color: accentColor, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                        diseños espectaculares
                    </span>
                </h1>
                <p className="text-center text-gray-300">
                    Diseños web impactantes, código a medida. Transformo ideas en sitios web asombrosos, creados especialmente para ti. Explora el mundo del desarrollo web personalizado conmigo. Experiencias digitales funcionales y visualmente atractivas, diseñadas a medida.
                </p>
                <div className="flex flex-col mt-10 mb-3 md:flex-row justify-evenly md:mt-10 md:mb-5">
                    {dataAbout.map((dataText, itemIndex) => (
                        <div
                            key={dataText.id}
                            className={`cursor-pointer ${index === dataText.id ? 'btnClassBlue duration-300 transition-all' : 'border-white'} md:text-lg relative px-3 md:px-16 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                            onClick={() => setIndex(itemIndex)}
                        >
                            <p className="mr-4 text-md md:text-lg">{dataText.text}</p>
                            {index === dataText.id ? (
                                <BiDownArrow />
                            ) : (
                                <BiLeftArrow />
                            )}
                        </div>
                    ))}
                </div>
                {index === 0 && (
                    <div className="max-w-4xl p-5 mx-auto rounded-xl grid gap-4 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center">
                        {dataAboutSkills.map((items, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-3 bg-sky-400/10 hover:bg-sky-500/20 transition-colors duration-300 ease-in-out rounded-md"
                            >
                                <div className="text-primary hover:text-accent">{items.icon}</div>
                                <span className="text-xs hover:text-accent mt-3">{items.title}</span>
                            </div>
                        ))}
                    </div>
                )}
                {index !== 0 && dataAboutList[index - 1] && (
                    <div className="max-w-4xl p-6 mx-auto bg-sky-400/10 rounded-xl w-full">
                        <ul className="list-none pl-0">
                            {(dataAboutList[index - 1].experience || dataAboutList[index - 1].studies)?.map((item, innerIndex) => (
                                <li key={innerIndex} className="mb-6 relative flex items-center">
                                    <div className={`bg-${accentColor} h-6 w-6 rounded-full mr-4`}></div>
                                    <div className={`border-l-4 border-${accentColor} pl-4`}>
                                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-400 mb-1">{item.date}</p>
                                        <p className="text-sm">{item.data}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:flex relative items-center justify-center w-full md:w-1/2 md:max-w-4xl"
            >
                <Image src={about} width="500" height="550" alt="programming design" />
            </motion.div>
        </div>
    );
}
