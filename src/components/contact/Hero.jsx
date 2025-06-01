import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroimg from '../../assets/img/contact_hero.webp';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
      <div className="flex flex-col lg:flex-row items-center justify-center w-5/6 gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroimg}
            alt="Contact Hero"
            className="h-50 lg:h-80 xl:h-[36rem] 2xl:h-[50rem]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 xl:gap-8 2xl:gap-12 text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem]">Connect with me</h1>
          <p className="text-base md:text-lg xl:text-3xl 2xl:text-5xl 2xl:leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hello — I’m always open to discussing new ideas, opportunities, or collaborations. Drop me a message and I’ll get back to you as soon as possible.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 xl:gap-6 text-gray-500 text-xl xl:text-3xl 2xl:text-4xl">
            <a href="https://github.com/sameersharmadev" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sameersharma777/" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/Sameersharma_77" target="_blank" rel="noopener noreferrer" className="hover:text-blackHover transition">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="mailto:sameersh571@gmail.com" className="hover:text-blackHover transition">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToNextSection}
            className="w-full text-center text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-black text-lightBeige p-2 lg:p-3 xl:p-5 2xl:p-6 hover:bg-blackHover transition"
          >
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
