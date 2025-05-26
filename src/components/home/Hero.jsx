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
    <div className="relative h-[calc(100vh-2.5rem)] flex justify-center items-center bg-lightBeige fade-in-hero">
      <div className="flex flex-col lg:flex-row gap-8 2xl:gap-32 items-center">
        <div className="mt-8 lg:m-0">
          <img src={heroimg} alt="hero image" className="h-72 lg:h-128 2xl:h-[80rem]" />
        </div>
        <div className="flex flex-col px-8 lg:px-0 2xl:px-16 ">
          <p className="-mt-4 lg:text-2xl 2xl:text-7xl 2xl:mb-2">Hello there! I am</p>
          <h1 className="text-4xl lg:text-7xl 2xl:text-[12rem] lg:mb-2 2xl:mb-4">Sameer Sharma</h1>
          <h2 className="lg:text-5xl 2xl:text-9xl mb-2 lg:mb-4 2xl:mb-8">Full stack web developer</h2>
          <p className="lg:text-2xl 2xl:text-6xl mb-2 lg:mb-4 2xl:mb-12">I build user centric, scalable web applications</p>

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4 lg:mb-8 2xl:mb-12 justify-between">
            <div className="flex items-center gap-2 text-sm lg:text-xl 2xl:text-5xl 2xl:gap-4">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-sm lg:text-xl 2xl:text-4xl">New Delhi, India</p>
            </div>
            <div className="hidden lg:flex gap-4 2xl:gap-6 text-gray-500 lg:px-4 text-sm lg:text-xl 2xl:text-4xl">
              <a href="https://github.com/sameersharmadev" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a href="https://www.linkedin.com/in/sameersharma777/" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a href="https://x.com/Sameersharma_77" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faXTwitter} size="xl" />
              </a>
              <a href="mailto:sameersh571@gmail.com" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
            </div>
          </div>

          <Link to="/projects" className="w-full text-center text-lg lg:text-xl 2xl:text-4xl bg-black text-lightBeige p-2 lg:p-3 2xl:p-6 mb-2 lg:mb-4 2xl:mb-8 hover:bg-blackHover transition">
            View my work
          </Link>
          <Link to="/contact" className="text-lg lg:text-xl 2xl:text-4xl text-center transition">
            Contact me
          </Link>
        </div>
      </div>
    </div>

  )
}
