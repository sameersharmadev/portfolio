import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import heroimg from '../../assets/img/contact_hero.webp';
import { 
    faEnvelope, 
  } from '@fortawesome/free-solid-svg-icons'
  import { 
    faGithub, 
    faLinkedin, 
    faXTwitter 
  } from '@fortawesome/free-brands-svg-icons'
export default function Hero({ nextSectionRef }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative h-[calc(100vh-2.5rem)] flex justify-center items-center bg-lightBeige about-fade-in-hero"
    >
      <div className="flex flex-col w-5/6 lg:flex-row gap-8 lg:gap-12 lg:px-0 items-center  xl:gap-16 2xl:gap-32 justify-center mx-auto items-center justify-center w-5/6">
        <div className="lg:m-0 justify-center">
          <img src={heroimg} alt="hero image" className="h-60 md:h-80 lg:h-98 xl:h-[68rem] 2xl:h-[90rem]" />
        </div>
        <div className="flex flex-col gap-4 px-8 md:px-16 lg:px-0 xl:px-8 2xl:px-16 lg:w-5/12 2xl:gap-20">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem]">Connect with me</h1>
          <p className="text-base md:text-lg xl:text-3xl 2xl:text-5xl 2xl:leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hello — I’m always open to discussing new ideas, opportunities, or collaborations. 
            <br />Drop me a message and I’ll get back to you as soon as possible.
            <div className="mt-4 hidden lg:flex gap-4 xl:gap-5 2xl:gap-6 text-gray-500 text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
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
            <button
              onClick={scrollToNextSection}
              className="mt-8 w-full text-center text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-black text-lightBeige p-2 lg:p-3 xl:p-5 2xl:p-6 mb-2 lg:mb-4 xl:mb-6 2xl:mb-8 hover:bg-blackHover transition"
            >
              Contact Now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}