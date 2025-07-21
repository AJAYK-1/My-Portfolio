import React from 'react'

function Hero() {

    return (
        <>
            <div className='flex flex-col items-center justify-center bg-[#161513] h-screen md:h-170 w-screen'>

                <div className=''>
                    <img className='rounded-full h-60 w-60 hover-grow' src="/profileImg.jpg" alt="My Image" />
                </div>

                <div className='w-4/5 md:w-200 mt-3 text-white font-mono font-bold text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        <span className=' span-gradient'>
                            I'm Ajay Kumar,
                        </span>
                        &nbsp;A Developer
                    </h1>
                    <h1 className='text-2xl md:text-4xl'> passionate on shaping </h1>
                    <h1 className='text-3xl md:text-5xl'> Ideas </h1>
                    <h1 className='text-2xl md:text-4xl'> into Real Projects. </h1>
                </div>

                <div className='w-4/5 md:w-170 mt-4 text-white text-sm md:font-medium text-center'>
                    <p> I'm a Full Stack Developer skilled in building responsive, dynamic web applications using MERN (MongoDB, Express.js, React.js, and Node.js) Stack. </p>
                </div>

                <div className='text-white flex justify-between space-x-7 mt-4 mb-10'>
                    <button className='rounded-4xl p-3 w-40 font-medium hover-grow
                    bg-gradient-to-r from-purple-700 via-red-500 to-orange-400'> Get in touch </button>
                    <button className='rounded-4xl p-3 w-40 font-medium border-2 hover-grow'> My Resume </button>
                </div>

            </div>
        </>
    )
}

export default Hero