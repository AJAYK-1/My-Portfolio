import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa'
import { SideBarClose, SidebarOpen } from './Animations';


function Navbar() {

    const [sideBar, setSideBar] = useState(false)

    const sideBarRef = useRef(null)

    useGSAP(() => {
        if (sideBar) {
            SidebarOpen(sideBarRef)
        } else {
            SideBarClose(sideBarRef)
        }
    }, { dependencies: [sideBar] })

    return (
        <>
            <div className='sticky top-0 z-50 bg-[#161513] text-white flex justify-between md:justify-evenly md:items-center h-20 w-screen'>

                <div className='flex items-center justify-center'>
                    <h1 className='relative text-4xl font-bold pl-10 font-sans z-10'> Ajay </h1>
                    <img className='absolute w-25 z-0 mt-10 ml-13' src="/pswish.png" alt="" />
                </div>

                <div className='hidden md:flex space-x-5 md:space-x-7 '>
                    <a href="#Hero" className='hover:underline hover-grow'> Home </a>
                    <a href="#About-me" className='hover:underline hover-grow'> About me </a>
                    <a href="#Tech-stack" className='hover:underline hover-grow'> Teck Stack </a>
                    <a href="#My-works" className='hover:underline hover-grow'> My works </a>
                    <a href="#Contact" className='hover:underline hover-grow'> Contact </a>
                </div>

                <div className='hidden md:flex'>
                    <button
                        className='rounded-4xl p-3 font-medium hover-grow w-40
                        md:bg-gradient-to-r from-orange-400 via-red-500 to-violet-800'
                    >
                        <a href="#Contact">Connect with me</a>
                    </button>

                </div>

                <div className='md:hidden pr-7 flex items-center justify-center '>
                    {sideBar ? (
                        <button
                            className='hover:cursor-pointer'
                            onClick={() => setSideBar(!sideBar)}>
                            <FaTimes className='text-4xl mr-5' />
                        </button>
                    ) : (
                        <button
                            className='hover:cursor-pointer'
                            onClick={() => setSideBar(!sideBar)}>
                            <GiHamburgerMenu className="text-4xl mr-5" />
                        </button>
                    )}
                </div>

            </div>

            {sideBar && (
                <div ref={sideBarRef}
                    className='md:hidden h-[100%] w-2/3 space-y-8 text-xl flex flex-col justify-start  pt-10 pl-7 z-20 fixed right-0 text-white bg-[#0f0211]'>
                    <a href="#Hero" className='hover:underline hover-grow'> Home </a>
                    <a href="#About-me" className='hover:underline hover-grow'> About me </a>
                    <a href="#Tech-stack" className='hover:underline hover-grow'> Tech Stack </a>
                    <a href="#My-works" className='hover:underline hover-grow'> My works </a>
                    <a href="#Contact" className='hover:underline hover-grow'> Contact </a>
                </div>
            )}

        </>
    )
}

export default Navbar