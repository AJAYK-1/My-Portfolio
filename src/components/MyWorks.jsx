import React from 'react'


function MyWorks() {
    return (
        <>
            <div id='My-works' className='flex flex-col bg-[#161513] w-screen py-10 text-white'>
                <div className='flex items-center justify-center mt-10 h-50'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold font-mono z-10'> My Latest works </h1>
                    <img className='absolute w-25 z-0 mt-8 md:w-30 md:mt-10 lg:w-40 lg:mt-12' src="/rrswish.png" alt="" />
                </div>

                <div className='flex flex-col w-[70%] mx-auto gap-10 lg:justify-between lg:flex-row lg:w-[80%]'>

                    {/* DocNet */}
                    <div className='hover-grow rounded-2xl hover:border-4 hover:border-violet-600 lg:w-[60%] lg:h-[80%]'>
                        <div >
                            <img className='rounded-t-xl' src="/docnet.png" alt="Project Image" />
                        </div>
                        <div className='text-justify p-5 bg-[#27202d] rounded-b-xl space-y-5'>
                            <h1 className='font-bold text-2xl lg:text-3xl'>
                                <span className='span-gradient'> DocNet </span>
                            </h1>
                            <p className='lg:text-lg'> A full-stack (MERN) web platform for booking medical appointments online. Users can browse doctor
                                profiles, view availability, and book appointments. Doctors can manage their schedules, while admins oversee users,
                                and doctor listings. Designed to streamline healthcare access through a responsive and user-friendly
                                interface.</p>
                            <p onClick={() => window.open('https://docnet-mxnp.onrender.com/')}>
                                👉🏻 <span className='span-gradient hover:cursor-pointer'> [Deployed Project-Click here to view] </span>  👈🏻
                            </p>
                        </div>
                    </div>

                    <div className='space-y-10 lg:w-[40%] lg:px-5'>

                        {/* Movie-Mate */}
                        <div className='hover-grow rounded-2xl hover:border-4 hover:border-violet-600'>
                            <div >
                                <img className='rounded-t-xl' src="/moviemate.png" alt="Project Image" />
                            </div>
                            <div className='text-justify p-5 bg-[#27202d] rounded-b-xl space-y-5'>
                                <h1 className='font-bold text-2xl lg:text-xl'>
                                    <span className='span-gradient'> MovieMate </span>
                                </h1>
                                <p className='lg:text-sm'>  A web-based movie recommendation and booking platform developed with the MERN stack. Uses NLP
                                    to analyze emotional input and recommends movies accordingly. Features include user/theater account
                                    management, emotion-based movie suggestions, watching OTT movies online, booking tickets, and posting reviews. </p>
                                <p onClick={() => window.open('https://github.com/AJAYK-1/Movie-Mate')}>
                                    👉🏻 <span className='span-gradient hover:cursor-pointer lg:text-sm'> [Click here to view project repository] </span>  👈🏻
                                </p>
                            </div>
                        </div>

                        {/* E-Architect */}
                        <div className='hover-grow rounded-2xl hover:border-4 hover:border-violet-600 mb-10'>
                            <div >
                                <img className='rounded-t-xl' src="/earchitects.png" alt="Project Image" />
                            </div>
                            <div className='text-justify p-4 bg-[#27202d] rounded-b-xl space-y-5'>
                                <h1 className='font-bold text-2xl'>
                                    <span className='span-gradient lg:text-xl'> E-Architect </span>
                                </h1>
                                <p className='lg:text-sm'> E-Architect is an online architecture service platform built using PHP, HTML, CSS, and JavaScript.
                                    The platform connects users with architects, allowing users to request architectural plans and
                                    enabling architects to upload and share the plans directly through the system.</p>
                                <p onClick={() => window.open('https://github.com/AJAYK-1/E-Architect')}>
                                    👉🏻 <span className='span-gradient hover:cursor-pointer lg:text-sm'> [Click here to view project repository] </span>  👈🏻
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default MyWorks