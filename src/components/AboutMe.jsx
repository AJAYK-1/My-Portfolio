import React from 'react'


function AboutMe() {
    return (
        <>
            <div className='flex flex-col justify-center h-170 w-screen bg-[#161513]'>

                <div className='text-white font-bold font-mono text-4xl mb-5 flex justify-center h-20'>
                    <h1> About Me </h1>
                </div>

                <div className='flex flex-col justify-center md:flex-row gap-6 '>

                    <div className='h-60 w-45 md:h-80 md:w-60 rounded-xl'>
                        <img
                            src="/profile.jpg"
                            alt="My Image"
                            className='rounded-xl h-full w-full object-cover' />
                    </div>

                    <div className='text-justify font-mono text-white w-[50%]'>
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

                <div className='flex justify-center text-center mt-5 divide-x-2 divide-gray-400 text-white'>

                    <div className='p-5 w-[30%]'>
                        <h1 className='text-4xl mb-3 font-extrabold'>
                            <span className='span-gradient'> 6 </span> </h1>
                        <h2> Months of Experience </h2>
                    </div>

                    <div className='p-5 w-[30%]'>
                        <h1 className='text-4xl mb-3 font-extrabold'>
                            <span className='span-gradient'> 3 </span> </h1>
                        <h2> Projects Completed </h2>
                    </div>

                    <div className='p-5  w-[30%]'>
                        <h1 className='text-4xl mb-3 font-extrabold'>
                            <span className='span-gradient'> 100% </span>
                        </h1>
                        <h2> Commitment </h2>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMe