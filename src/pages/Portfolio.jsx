import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import proj1 from '../assets/images/dark.jpeg'
import proj2 from '../assets/images/iphone.jpeg'
import proj3 from '../assets/images/proj12.png'
import proj4 from '../assets/images/portfolio.jpeg'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'


const projects = [
    {
        title: 'Netflix Clone',
        desc: 'A Netflix clone built using MERN stack and TMDB API. Users can sign in, view trailers, and watch movies',
        devstack: 'React,  Node.js, Express, MongoDB',
        link: '#',
        git: '#',
        src: proj1,
        type: "mern stack"
    },
    {
        title: 'Iphone website Clone',
        desc: 'A clone of the official Apple website for Iphone 13.',
        devstack: 'React,  Tailwind CSS, Three js, GSAP ',
        link: '#',
        git: '#',
        src: proj2,
        type: "frontend"
    },
    {
        title: 'ALumni website',
        desc: 'A website for the alumni of a university.',
        devstack: 'React,  Node.js, Express, MongoDB',
        link: '#',
        git: '#',
        src: proj3,
        type: "mern stack"
    },
    {
        title: 'Portfolio website',
        desc: 'A portfolio website showcasing my projects.',
        devstack: 'React,  Framer Motion, Tailwind CSS',
        link: '#',
        git: '#',
        src: proj4,
        type: "frontend"
    }
]

const Portfolio = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <div className='text-white py-24 md:py-64' id='portfolio'>
            <div className='container mx-auto px-4'>
                <h2 className='text-6xl font-bold text-center mb-16'>
                    Selected <span className='text-emerald-300'>Projects</span>
                </h2>

                <div className='space-y-8'>
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
                            >
                                <div className='p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10'
                                    onClick={() => toggleExpand(index)}>
                                    <h3 className='text-4xl font-semibold'>{project.title}</h3>
                                    <div className='flex items-center space-x-4'>
                                        <span className='text-3xl font-light text-emerald-300'>
                                            0{index + 1}
                                        </span>
                                        <FiChevronDown
                                            className={`w-6 h-6 transform transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='px-6 pb-6 bg-black/20 border border-white/10'
                                        >
                                            <div className='flex flex-col md:flex-row gap-8'>
                                                <img
                                                    src={project.src}
                                                    alt={project.title}
                                                    className='w-full md:w-1/2 h-64 object-cover rounded-lg'
                                                />
                                                <div className='flex-1'>
                                                    <p className='text-white/70 mb-4'>
                                                        {project.desc}
                                                    </p>
                                                    <p className='text-emerald-300 font-medium mb-2'>
                                                        Stack: {project.devstack}
                                                    </p>
                                                    <p className='text-emerald-400/60 font-medium mb-4 capitalize'>
                                                        Type: {project.type}
                                                    </p>
                                                    <div className='flex space-x-4 justify-start items-center'>
                                                        <a
                                                            href={project.link}
                                                            className='text-emerald-400 hover:text-blue-300 transition-colors'
                                                        >
                                                            <HiOutlineExternalLink />
                                                        </a>
                                                        <a
                                                            href={project.link}
                                                            className='text-emerald-400 hover:text-blue-300 transition-colors'
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio