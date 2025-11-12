import React from 'react'

function Skills() {
    return (
        <>
            <div id='Tech-stack' className='flex flex-col justify-center bg-[#161513] py-10 w-screen text-white'>
                <div className='flex items-center justify-center  pt-10 mt-20 mb-10 h-20 '>
                    <h1 className='relative z-10 text-3xl md:text-4xl lg:text-6xl font-mono font-bold'> Tech Stack </h1>
                    <img className='absolute w-25 z-0 mt-8 md:w-30 md:mt-10 lg:w-40 lg:mt-12' src="/vswish.png" alt="" />
                </div>

                <div className='flex flex-col gap-5 md:justify-center'>

                    <div className='skill-arrange'>
                        <div>
                            <h1 className='skill-heading'>
                                <span className='span-gradient'> Frontend </span>
                            </h1>
                        </div>

                        <div className='tech-arrange'>
                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                alt='React JS'
                                onClick={() => window.open('https://react.dev/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                                alt='HTML5'
                                onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                                alt='CSS3'
                                onClick={() => window.open('https://www.w3.org/Style/CSS/Overview.en.html')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                alt='TailwindCSS'
                                onClick={() => window.open('https://tailwindcss.com/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                                alt='Redux Toolkit'
                                onClick={() => window.open('https://redux.js.org/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
                                alt='React-Bootstrap'
                                onClick={() => window.open('https://react-bootstrap.github.io/')} />

                            {/* <img className='tech-stack' src="/gsaplogo.png" alt="GSAP"
                                onClick={() => window.open('https://gsap.com/')} /> */}
                        </div>
                    </div>

                    <div className='skill-arrange'>
                        <div>
                            <h1 className='skill-heading'>
                                <span className='span-gradient'> Backend </span>
                            </h1>
                        </div>

                        <div className='tech-arrange '>
                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                                alt='Node.JS'
                                onClick={() => window.open('https://nodejs.org/en')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                                alt='Express.JS'
                                onClick={() => window.open('https://expressjs.com/')} />

                            <img className='tech-stack'
                                src="https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22099.png"
                                alt='RESTful API'
                                onClick={() => window.open('https://restfulapi.net/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
                                alt='GraphQL'
                                onClick={() => window.open('https://graphql.com/')} />

                            {/* <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                                alt='php'
                                onClick={() => window.open('https://www.php.net/')} /> */}
                        </div>
                    </div>

                    <div className='skill-arrange'>
                        <div>
                            <h1 className='skill-heading'>
                                <span className='span-gradient'> Database </span>
                            </h1>
                        </div>

                        <div className='tech-arrange '>
                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                                alt='MongoDB'
                                onClick={() => window.open('https://www.mongodb.com/')} />

                            {/* <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                                alt='MySql'
                                onClick={() => window.open('https://www.mysql.com/')} /> */}
                        </div>
                    </div>

                    <div className='skill-arrange'>
                        <div>
                            <h1 className='skill-heading'>
                                <span className='span-gradient'> Languages </span>
                            </h1>
                        </div>

                        <div className='tech-arrange '>
                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                alt='JavaScript'
                                onClick={() => window.open('https://www.javascript.com/')} />
                        </div>
                    </div>

                    <div className="skill-arrange mb-10">
                        <div>
                            <h1 className='skill-heading'>
                                <span className='span-gradient'> Tools & Others </span>
                            </h1>
                        </div>

                        <div className='tech-arrange '>
                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                                alt='Git'
                                onClick={() => window.open('https://git-scm.com/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt='Github'
                                onClick={() => window.open('https://github.com/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                                alt='Postman'
                                onClick={() => window.open('https://www.postman.com/')} />

                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apollographql/apollographql-original.svg"
                                alt='Apollo-Server'
                                onClick={() => window.open('https://www.apollographql.com/docs/apollo-server')} />
                                
                            <img className='tech-stack'
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                                alt='Apollo-Server'
                                onClick={() => window.open('https://www.docker.com/')} />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills