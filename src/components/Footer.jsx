import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'


function Footer() {
    return (
        <div className='bg-[#161513] pb-10 pt-10 w-screen '>
            <div className='flex flex-col divide-y-2 md:divide-y-0 md:items-baseline-last md:flex-row md:justify-between text-white'>

                <div className='w-[100%] md:w-[30%] text-center'>
                    <h1 className='text-2xl font-bold pl-10 font-sans '> Ajay Kumar T P </h1>
                    <p className='text-sm'> A MERN Stack Developer from Kochi, Kerala, India.</p>
                </div>

                <div className='flex w-[100%] md:w-[40%] justify-center p-5 space-x-3'>
                    <FaInstagram className='w-10 h-10' onClick={() => window.open('https://www.instagram.com/njan.ajay/')} />
                    <FaFacebook className='w-10 h-10' onClick={() => window.open('https://www.facebook.com/profile.php?viewas=100000686899395&id=100055668733845')} />
                    <FaLinkedin className='w-10 h-10' onClick={() => window.open('www.linkedin.com/in/ajaykumartp')} />
                    <GrGithub className='w-10 h-10' onClick={() => window.open('https://github.com/AJAYK-1')} />
                </div>

                <div className='md:w-[20%] lg:w-[30%] flex md:flex-col lg:flex-row lg:justify-center p-5 gap-6 md:gap-0 lg:gap-6'>
                    <a href=''> ▷Home </a>
                    <a href=''> ▷About me </a>
                    <a href=''> ▷Tech Stack </a>
                    <a href=''> ▷Get in touch </a>
                </div>

            </div>
            <div className='text-center p-5 bg-[#161513] border-t-2 text-white'>
                <p> © {new Date().getFullYear()} Ajay Kumar T P | All rights Reserved. </p>
            </div>
        </div>
    )
}

export default Footer