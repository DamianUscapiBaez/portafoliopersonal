"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container mx-auto flex md:flex-row items-center justify-between px-6 md:px-10 lg:px-16">
                    <Link href="/">
                        <h1 className="my-3 text-2xl md:text-4xl lg:text-5xl text-center md:text-left text-white">
                            Dam<span className="text-amber-500">ian</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src }, index) => (
                            <Link key={index} href={src} target="_blank" className="transition-all duration-300 text-white hover:text-amber-500">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
