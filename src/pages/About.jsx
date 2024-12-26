import React from 'react'
import project1 from '../assets/images/proj5.png'
import project2 from '../assets/images/proj6.png'

function About() {
    return (
        <section id='about' className='text-white p-8'>
            <h2 className='text-6xl font-bold mb-8'>
                About <span className='text-emerald-300'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
                    <p className='text-white/50 mb-6'>
                        I'm a passionate web developer and a cyber security security with a strong foundation in computer
                        science and a love for creating innovative web solutions.
                        My journey in tech started with a curiosity about how things work.
                    </p>

                    <div className='rounded-lg p-4 mb-4 border border-white/20'>
                        <code className='text-emerald-200/50'>
                            const skills = [<br />
                            &nbsp;&nbsp;'React',
                            <br />
                            &nbsp;&nbsp;'Next.js',
                            <br />
                            &nbsp;&nbsp;'C++',
                            <br />
                            &nbsp;&nbsp;'Python',
                            <br />
                            &nbsp;&nbsp;'OSINT',
                            <br />
                            ]
                        </code>
                    </div>
                </div>

                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
                    <p className='text-white/50'>
                        I specialize in building responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS.
                        I also have experience in backend development using Node.js, Express, and MongoDB.
                    </p>
                    <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
                        <img
                            src={project1}
                            alt="project 1"
                            className='absolute  inset-0 w-full h-full object-cover' />
                    </div>
                </div>

                <div className='border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
                    <p className='text-white/50 mb-4'>
                        I'm a quick learner and a problem solver with a strong foundation in computer science. I have experience in web development, cyber security, and competitive programming.
                    </p>
                    <div className='grid grid-cols-1 text-center gap-4'>
                        <div className='border border-white/20 rounded-lg p-3'>
                            <h4 className='text-emerald-300 font-medium mb-2'>Frontend</h4>
                            <ul className='text-white/50 space-y-1 text-sm'>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Shadcn</li>
                                <li>Tailwind CSS</li>
                                <li>Mongo DB</li>
                            </ul>
                        </div>
                        <div className='border border-white/20 rounded-lg p-3'>
                            <h4 className='text-emerald-300 font-medium mb-2'>Backend</h4>
                            <ul className='text-white/50 space-y-1 text-sm'>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Mongo DB</li>
                                <li>Python</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='border border-white/20 rounded-lg p-6'>
                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Front-end
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full' style={{ width: '90%' }}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Back-end
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full' style={{ width: '85%' }}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                VAPT
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full' style={{ width: '20%' }}>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-1'>
                                Networking
                            </label>
                            <div className='w-full bg-white/10 rounded-full h-2'>
                                <div className='bg-emerald-300 h-2 rounded-full' style={{ width: '84%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
                    <p className='text-white/50'>
                        I believe in creating a positive impact through technology.
                        I'm passionate about building innovative solutions that solve real-world problems
                        and make a difference in people's lives.
                    </p>
                </div>

                <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
                    <div className='relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden'>
                        <img src={project2} alt="project 2"
                            className='absolute inset-0 w-full h-full object-cover'
                        />
                    </div>

                    <div>
                        <h3 className='text-2xl font-bold mb-2'>05. Goals</h3>
                        <p className='text-white/50'>
                            My goal is to continue learning and growing as a developer and a cyber security expert.
                            I want to work on challenging projects that push me out of my comfort zone and help me become a better professional.
                        </p>
                    </div>
                </div>

            </div >
        </section >
    )
}

export default About