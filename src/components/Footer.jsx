import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faEnvelope, 
  } from '@fortawesome/free-solid-svg-icons'
  import { 
    faGithub, 
    faLinkedin, 
    faXTwitter 
  } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  
    return(
    <div className="h-10 flex text-sm md:text-base flex-row-reverse justify-center items-center fade-in text-secondaryBeige gap-4 mt-16 lg:my-0 2xl:text-3xl">
        <p>©2025 Sameer Sharma. All rights reserved</p>
        <div className="hidden md:flex gap-4 text-secondaryBeige md:px-4">
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
  );
}
