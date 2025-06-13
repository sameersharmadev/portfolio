import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { 
  faLocationDot, 
  faEnvelope, 
} from '@fortawesome/free-solid-svg-icons'
import { 
  faGithub, 
  faLinkedin, 
  faXTwitter 
} from '@fortawesome/free-brands-svg-icons'
import heroimg from '../../assets/img/heroimg.webp'

export default function Hero(){
  
  return(
    <div className="relative md:h-[calc(100vh-2.5rem)] flex justify-center items-center bg-lightBeige fade-in-hero ">
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 2xl:gap-32 items-center justify-center w-5/6">
        <div className="mt-8 lg:w-5/12 lg:m-0 flex justify-center lg:justify-end">
          <img src={heroimg} alt="hero image" className="h-72 lg:h-128 xl:h-[60rem] 2xl:h-[80rem] mx-8" />
        </div>
        <div className="lg:w-7/12 justify-center flex flex-col px-8 lg:px-0 xl:px-8 2xl:px-16">
          <p className="-mt-4 text-xl lg:text-2xl xl:text-5xl 2xl:text-7xl xl:mb-2 2xl:mb-2">Hello there! I am</p>
          <h1 className="text-3xl lg:text-7xl xl:text-9xl 2xl:text-[12rem] lg:mb-2 xl:mb-4 2xl:mb-4">Sameer Sharma</h1>
          <h2 className="lg:text-5xl xl:text-7xl 2xl:text-8xl mb-2 lg:mb-4 xl:mb-6 2xl:mb-8">Full stack web developer</h2>
          <p className="lg:text-2xl xl:text-4xl 2xl:text-6xl mb-2 lg:mb-4 xl:mb-6 2xl:mb-12">I build user centric, scalable web applications</p>

          <div className="w-10/12 flex flex-col lg:flex-row lg:items-center gap-4 xl:gap-6 2xl:gap-12 mb-4 lg:mb-8 xl:mb-10 2xl:mb-12 justify-between">
            <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 text-sm lg:text-xl xl:text-3xl 2xl:text-5xl">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">New Delhi, India</p>
            </div>
            <div className="hidden lg:flex gap-4 xl:gap-5 2xl:gap-6 text-gray-500 lg:px-4 text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
              <a href="https://github.com/sameersharmadev" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/sameersharma777/" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://x.com/Sameersharma_77" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a href="mailto:sameersh571@gmail.com" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </div>

          <Link to="/projects" className="cursor-default lg:w-10/12 text-center text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-black text-lightBeige p-2 lg:p-3 xl:p-5 2xl:p-6 mb-2 lg:mb-4 xl:mb-6 2xl:mb-8 hover:bg-blackHover transition">
            View my work
          </Link>
          <Link to="/contact" className="cursor-default mb-16 md:mb-0 lg:w-10/12 text-lg lg:text-xl xl:text-3xl 2xl:text-4xl text-center transition">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}