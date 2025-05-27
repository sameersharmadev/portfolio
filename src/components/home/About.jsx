import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import Terminal from './Terminal'

export default function About() {
    return (
        <div className="relative md:h-[calc(100vh-2.5rem)] flex justify-between items-center fade-in-section bg-black text-lightBeige">
            <div className="w-full lg:w-1/2 ml-4 mr-4 md:ml-20 md:mr-20 lg:mr-4 xl:mx-32 2xl:mx-64 md:h-[66vh]">
                <h2 className="text-2xl mt-8 md:mt-0 md:text-4xl font-semibold md:-mt-8 mb-6 xl:text-6xl 2xl:text-7xl xl:mb-10 2xl:mb-12">About me</h2>
                <ul className="flex flex-col mb-4 xl:text-3xl 2xl:text-4xl xl:leading-relaxed 2xl:leading-loose">
                    <li className="relative pl-8 pb-4 xl:pl-12 xl:pb-6 2xl:pl-16 2xl:pb-8">
                        <span className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <span className="w-1 bg-lightBeige absolute top-0 left-1.5 xl:left-2.5 2xl:left-3 xl:w-1.5 2xl:w-2 bottom-0"></span>
                        <p className="xl:-mt-2 2xl:-mt-4">
                            I am a Sameer Sharma, a full stack developer, specializing in building complete scalable web applications focussed on good user experience, and intuitive user interface.
                            I excel in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience working with REST APIs, TypeScript, and cloud computing.
                        </p>
                    </li>

                    <li className="relative pl-8 pb-4 xl:pl-12 xl:pb-6 2xl:pl-16 2xl:pb-8">
                        <span className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <span className="w-1 bg-lightBeige absolute top-0 left-1.5 xl:left-2.5 2xl:left-3 xl:w-1.5 2xl:w-2 bottom-0"></span>
                        <p className="xl:-mt-2 2xl:-mt-4">
                            I also love challenges that require critical thinking and problem-solving, whether it's debugging complex code, solving performance oriented programming challenges, or playing similar themed video games. This often directly translates to efficiency in my work.
                        </p>
                    </li>

                    <li className="relative pl-8 pb-4 xl:pl-12 xl:pb-6 2xl:pl-16 2xl:pb-8">
                        <span className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <span className="w-1 bg-lightBeige absolute top-0 left-1.5 xl:left-2.5 2xl:left-3 xl:w-1.5 2xl:w-2 bottom-0"></span>
                        <p className="xl:-mt-2 2xl:-mt-4">
                            Besides programming, I am a space enthusiast, and a hobbyist indie developer working on a small passion project.
                        </p>
                    </li>

                    <li className="relative pl-8 pb-4 xl:pl-12 xl:pb-6 2xl:pl-16 2xl:pb-8">
                        <span className="w-4 h-4 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <p className="xl:-mt-2 2xl:-mt-4">
                            I’m always open to collaboration and new opportunities, so feel free to contact!
                        </p>
                    </li>
                </ul>
                <div className="flex gap-4 xl:gap-6 2xl:gap-8 items-center">
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} className="text-5xl xl:text-7xl 2xl:text-8xl" />
                    </div>
                    <div className="flex flex-col mb-8 xl:mb-16 2xl:mb-24 justify-center items-center xl:gap-3 2xl:gap-4">
                        <p className="font-semibold xl:text-3xl 2xl:text-4xl xl:pt-16 2xl:pt-24 mt-8">Bachelor of Technology (Computer Science Engineering)</p>
                        <p className="xl:text-3xl 2xl:text-4xl">Maharaja Agrasen Institute of Technology [2023-2027]</p>
                    </div>
                </div>
                <Link to="/about" className="block w-full rounded text-center md:text-xl xl:text-3xl 2xl:text-4xl bg-lightBeige text-black p-1 xl:p-3 2xl:p-4">
                    View more
                </Link>
                <span className="hidden md:block lg:hidden mt-4">*Terminal version available on desktop</span>
            </div>
            <div className="hidden lg:block md:w-1/2 mt-28">
                <Terminal />
            </div>
        </div>
    )
}