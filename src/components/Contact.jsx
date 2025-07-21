import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


function Contact() {
    return (
        <>
            <div className='flex flex-col bg-[#161513] w-screen py-10 text-white'>
                <div className='flex items-center justify-center mt-10 mb-10'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold font-mono'> Get in touch </h1>
                </div>

                <div className='py-10 lg:flex lg:justify-evenly lg:p-5'>
                    <div className='flex flex-col w-[80%] lg:w-[40%] space-y-5 py-5 mx-auto'>
                        <h1 className='text-3xl md:text-4xl font-bold'>
                            <span className='span-gradient'> Let's talk </span>
                        </h1>
                        <div className='space-y-5'>
                            <p>
                                I'm currently open to new opportunities and collaborations. Whether it's a project idea, a freelance assignment,
                                or just a tech chat — feel free to reach out! I'm always happy to connect and discuss how I can contribute to your goals.
                            </p>
                            <p className='flex items-center'> <FaEnvelope className="text-2xl mr-5 text-teal-300" />
                                <a href="mailto:ajaykumartp10@gmail.com" className='hover:underline'>  ajaykumartp10@gmail.com </a> </p>
                            <p className='flex items-center'> <FaPhone className="text-2xl mr-5 text-blue-500" /> +91-8289938749 </p>
                            <p className='flex items-center'> <FaMapMarkerAlt className="text-2xl mr-5 text-red-500" /> Kochi, Kerala, India </p>
                        </div>
                    </div>

                    <div className='flex flex-col w-[80%] lg:w-[40%] mx-auto my-5 space-y-3'>
                        <label htmlFor="Name"> Your Name: </label>
                        <input
                            className='bg-gray-700 p-3 rounded-lg'
                            type="text" placeholder='Enter your Name...' />
                        <label htmlFor="Email"> Your Email: </label>
                        <input
                            className='bg-gray-700 p-3 rounded-lg'
                            type="email" placeholder='Enter your email...' />
                        <label htmlFor="Message"> Your Message: </label>
                        <textarea
                            className='bg-gray-700 p-3 h-40 rounded-lg'
                            name="message" placeholder='Enter your message here...' />
                        <button
                            className='rounded-4xl p-3 w-40 font-medium hover-grow mt-3 hover:cursor-pointer
                            bg-gradient-to-r from-purple-700 via-red-500 to-orange-400'> Submit
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact