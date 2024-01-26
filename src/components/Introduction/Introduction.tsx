import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Home from "../../assets/home.svg";
import Link from 'next/link';

export function Introduction() {
    return (
        <div className="w-full z-10">
            <div className="w-full h-full bg-gradient-to-r via-black/30 to-black/10">
                <div className="container grid items-center h-full px-2 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div
                        className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src={Home} priority width="700" height="450" alt="programming" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="text-center md:text-left"
                    >
                        <h2 className="mb-5 text-2xl leading-tight md:mb-10 text-white md:text-4xl">
                            Hola soy Damian, <br />
                            <span className='text-amber-500 md:inline-block'>Juntos haremos tus proyectos realidad.</span>
                        </h2>
                        <div className="flex flex-col items-center md:gap-10 md:flex-row">
                            <Link
                                href="/works"
                                className="text-cyan-500 px-4 py-2 my-2 md:px-6 md:py-3 md:my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-cyan/50"
                            >
                                Ver proyectos
                            </Link>
                            {/*<Link
                                href="/contact"
                                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-amber-500 border-amber-500 rounded-xl hover:shadow-xl hover:shadow-amber-700"
                            >
                                Contacta conmigo
                            </Link> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
