import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router'
import Terminal from './Terminal'
export default function About(){
    return(
        <div className="relative h-[calc(100vh-2.5rem)] flex justify-between items-center fade-in-section bg-black text-lightBeige">
            <div className="w-full md:w-1/2 ml-4 mr-4 md:ml-20 md:mr-4 md:h-[66vh]">
                <h2 className="text-4xl font-semibold -mt-8 mb-6">About me</h2>
                    <ul class="flex flex-col mb-4">
                    <li class="relative pl-8 pb-4">
                        <span class="w-4 h-4 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <span class="w-1 bg-lightBeige absolute top-0 left-1.5 bottom-0"></span>
                        <p>
                        I am a Sameer Sharma, a full stack developer, specializing in building complete scalable web applications that provide excellent user experience, and intuitive user interface.
                        I excel in the MERN stack (MongoDB, Express.js, React, Node.js) and have experience working with REST APIs, TypeScript, and cloud computing.
                        </p>
                    </li>

                    <li class="relative pl-8 pb-4">
                        <span class="w-4 h-4 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <span class="w-1 bg-lightBeige absolute top-0 left-1.5 bottom-0"></span>
                        <p>
                        I also love challenges that require critical thinking and problem-solving, whether it's debugging complex code, solving performance oriented programming challanges, or playing similar themed video games. This often directly translates to efficiency in my work.
                        </p>
                    </li>

                    <li class="relative pl-8 pb-4">
                        <span class="w-4 h-4 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <span class="w-1 bg-lightBeige absolute top-0 left-1.5 bottom-0"></span>
                        <p>
                        Besides programming, I am a space enthusiast, and a hobbyist indie developer working on a small passion project.
                        </p>
                    </li>

                    <li class="relative pl-8 pb-4">
                        <span class="w-4 h-4 bg-lightBeige rounded-full absolute top-0 left-0"></span>
                        <p>
                        I’m always open to collaboration and new opportunities, so feel free to contact!
                        </p>
                    </li>
                </ul>
                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} className="text-5xl"/>
                    </div>
                    <div className="flex flex-col mb-8">
                        <p className="font-semibold">Bachelor of Technology (Computer Science Engineering)</p>
                        <p>Maharaja Agrasen Institute of Technology [2023-2027]</p>
                    </div>
                </div>
                <Link to="/about" className="block w-full text-center md:text-xl bg-lightBeige text-black p-1">
                    View more
                </Link>
            </div>
            <div className="hidden md:block md:w-1/2">
                <Terminal/>
            </div>
        </div>
    )
}