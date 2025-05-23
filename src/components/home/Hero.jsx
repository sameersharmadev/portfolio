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
    <div className="relative h-[calc(100vh-2.5rem)] flex justify-center items-center">
      {/* Main hero content */}
      <div className="flex gap-8 items-center">
        <div>
          <img src={heroimg} alt="hero image" className="h-114" />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">Hello there! I am</p>
          <h1 className="text-7xl mb-2">Sameer Sharma</h1>
          <h2 className="text-5xl mb-4">Front end web developer</h2>
          <p className="text-2xl mb-4">I build user centric, scalable web applications</p>

          {/* Location and Social Icons Row */}
          <div className="flex items-center gap-4 mb-8 justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-xl">New Delhi, India</p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 text-gray-500 px-4">
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

          <Link to="/projects" className="w-full text-center text-xl bg-black text-lightBeige p-3 mb-4 hover:bg-blackHover transition">
            View my work
          </Link>
          <Link to="/contact" className="p-2 text-xl text-center transition">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}
