import React from 'react'


function AboutMe() {
    return (
        <>
            <div id='About-me' className='flex flex-col justify-center  w-screen bg-[#161513]'>

                <div className='text-white font-bold font-mono text-4xl md:text-5xl lg:text-6xl mb-10 flex items-center justify-center h-20'>
                    <h1 className='relative z-10'> About Me </h1>
                    <img className='absolute w-25 z-0 mt-8 md:w-30 md:mt-10 lg:w-40 lg:mt-12' src="/rswish.png" alt="" />
                </div>

                <div className='flex flex-col md:justify-center md:flex-row px-10 md:px-0 gap-6 '>

                    <div className='w-60 md:w-80 bg-red-400 rounded-xl'>
                        <img
                            src="/profile.jpg"
                            alt="My Image"
                            className='rounded-xl h-full w-full object-cover' />
                    </div>

                    <div className='text-justify font-mono text-white md:w-[50%]'>
                        <p>
                            I'm a MERN Stack Developer skilled in building responsive, dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, maintainable code and optimizing performance across both frontend and backend.
                        </p>
                        <p className="mt-4">
                            During my 6-month internship at Camerinfolks Pvt Ltd, I worked on real-world projects involving RESTful API integration, JWT-based authentication, and MongoDB schema design — gaining hands-on experience in full-stack development within an agile team.
                        </p>
                        <p className="mt-4">
                            I enjoy solving complex problems through creative solutions and have a strong interest in modern tools, scalable architectures, and intuitive UI design. I’m always learning and exploring new technologies to stay ahead.
                        </p>
                        <p className="mt-4">
                            With a solid foundation in full-stack development, I'm eager to contribute to impactful projects that blend performance, clean design, and real-world usability.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center text-center mt-10 divide-x-2 divide-gray-400 text-white'>

                    <div className='p-5 w-[30%]'>
                        <h1 className='text-3xl md:text-5xl mb-3 font-extrabold'>
                            <span className='span-gradient'> 6 </span>
                        </h1>
                        <h2 className='font-medium'> Months of Experience </h2>
                    </div>

                    <div className='p-5 w-[30%]'>
                        <h1 className='text-3xl md:text-5xl mb-3 font-extrabold'>
                            <span className='span-gradient'> 3 </span>
                        </h1>
                        <h2 className='font-medium'> Projects Completed </h2>
                    </div>

                    <div className='p-5  w-[30%]'>
                        <h1 className='text-3xl md:text-5xl mb-3 font-extrabold'>
                            <span className='span-gradient'> 100% </span>
                        </h1>
                        <h2 className='font-medium'> Commitment </h2>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMe