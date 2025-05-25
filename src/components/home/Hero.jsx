import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { 
  faLocationDot, 
  faEnvelope, 
  faPhone 
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
      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="mt-8 md:m-0 ">
          <img src={heroimg} alt="hero image" className="h-72 md:h-128" />
        </div>
        <div className="flex flex-col px-8 md:px-0">
          <p className="-mt-4 md:text-2xl">Hello there! I am</p>
          <h1 className="text-4xl md:text-7xl md:mb-2">Sameer Sharma</h1>
          <h2 className="md:text-5xl mb-2 md:mb-4">Full stack web developer</h2>
          <p className="md:text-2xl mb-2 md:mb-4">I build user centric, scalable web applications</p>

          {/* Location + Social Icons */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-8 justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-sm md:text-xl">New Delhi, India</p>
            </div>
            {/* Social Icons */}
            <div className="hidden md:flex gap-4 text-gray-500 md:px-4">
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
              <a href="tel:+917827114083" className="hover:text-blackHover transition">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </a>
              
            </div>
          </div>

          <Link to="/projects" className="w-full text-center md:text-xl bg-black text-lightBeige p-2 mb-2 md:p-3 md:mb-4 hover:bg-blackHover transition">
            View my work
          </Link>
          <Link to="/contact" className="md:p-2 md:text-xl text-center transition">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}
