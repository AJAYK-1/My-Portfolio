import React, { useState } from 'react'


function Navbar() {

    const [sideBar, setSideBar] = useState(false)

    return (
        <>
            <div className='bg-[#161513] text-white flex justify-between md:justify-evenly md:items-center h-20 w-screen'>

                <div className='flex items-center justify-center'>
                    <h1 className='text-4xl font-bold pl-10 font-sans '> Ajay </h1>
                </div>

                <div className='hidden md:flex space-x-5 md:space-x-7'>
                    <a href="#"> About me </a>
                    <a href="#"> Services </a>
                    <a href="#"> My works </a>
                    <a href="#"> Contact </a>
                </div>

                <div className='hidden md:flex'>
                    <button
                        className='rounded-4xl p-3 font-medium hover-grow w-40
                    md:bg-gradient-to-r from-orange-400 via-red-500 to-violet-800'
                    >
                        Connect with me
                    </button>

                </div>

                <div className='md:hidden pr-7 flex items-center justify-center '>
                    <button
                        className='hover:cursor-pointer'
                        onClick={() => setSideBar(!sideBar)}>
                        click
                    </button>
                </div>

            </div>

            {sideBar && (
                <div
                    className='md:hidden h-200 w-2/3 space-y-8 text-xl flex flex-col justify-start  pt-10 pl-7 z-20 fixed right-0 text-white bg-[#161513]'>
                    <a href="#"> About me </a>
                    <a href="#"> Services </a>
                    <a href="#"> My works </a>
                    <a href="#"> Contact </a>
                </div>
            )}

        </>
    )
}

export default Navbar