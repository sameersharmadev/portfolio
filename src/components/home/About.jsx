import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import Terminal from './Terminal'

export default function About() {
    return (
        <div className="relative md:min-h-[calc(100vh-2.5rem)] flex justify-between items-center fade-in-section bg-black text-lightBeige">
            <div className="w-full lg:w-1/2 ml-4 mr-4 md:ml-20 md:mr-20 lg:mr-4 xl:mx-32 2xl:mx-64 md:h-[66vh]">
                <h2 className="text-2xl mt-8 md:mt-0 md:text-4xl font-semibold md:-mt-8 mb-6 xl:text-6xl 2xl:text-7xl xl:mb-10 2xl:mb-12">
                    About me
                </h2>

                <ul className="flex flex-col gap-4 xl:text-3xl 2xl:text-4xl xl:leading-relaxed 2xl:leading-loose mb-16">
                    <li>🧑‍💻 I am Sameer Sharma, a full stack developer specializing in building scalable web applications focused on good user experience.</li>
                    
                    <li>🧩 I love challenges that require critical thinking and problem-solving. This directly translates my work efficiency.</li>
                    
                    <li>🚀 Besides programming, I’m a space enthusiast and hobbyist indie developer working on a passion project.</li>
                    
                    <li>🤝 Open to collaboration and opportunities — feel free to reach out!</li>
                </ul>


                <div className="flex gap-4 xl:gap-6 2xl:gap-8 items-center mb-8 xl:mb-16 2xl:mb-24">
                    
                    <div className="flex flex-col justify-center xl:gap-3 2xl:gap-4">
                        <p className="font-semibold xl:text-3xl 2xl:text-4xl">Bachelor of Technology (Computer Science Engineering)</p>
                        <p className="xl:text-3xl 2xl:text-4xl">Maharaja Agrasen Institute of Technology [2023–2027]</p>
                    </div>
                </div>

                <Link to="/about" className="flex items-center xl:text-3xl 2xl:text-4xl hover:underline hover:underline-offset-4">
                    View more about my journey and philosophy
                    <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
                </Link>

                <span className="hidden md:block lg:hidden mt-4 text-sm text-gray-400">*Terminal version available on desktop</span>
            </div>

            <div className="hidden lg:block md:w-1/2">
                <Terminal />
            </div>
        </div>
    );
}
