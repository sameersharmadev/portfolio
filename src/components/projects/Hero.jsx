import { useEffect, useRef } from 'react';
import heroimg from '../../assets/img/projects_hero.webp';

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
      <div className="flex flex-col w-5/6 lg:flex-row gap-8 lg:gap-12 lg:px-0 items-center md:items-start xl:gap-16 2xl:gap-32 justify-center mx-auto lg:items-center justify-center w-5/6">
        <div className="lg:m-0 md:px-16">
          <img src={heroimg} alt="hero image" className="h-80 lg:h-[36rem] xl:h-[68rem] 2xl:h-[90rem]" />
        </div>
        <div className="flex flex-col gap-4 px-8 md:px-16 lg:px-0 xl:px-8 2xl:px-16 lg:w-5/12 xl:gap-12 2xl:gap-20">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem]">My projects...</h1>
          <p className="text-base md:text-lg xl:text-3xl 2xl:text-5xl 2xl:leading-relaxed">
            Here are some things I’ve created, with care, thought and love. Every project on this page is a step in my journey of learning. Some started as late-night curiosities, others as structured challenges, but all taught me something valuable.
            <br />
            <br />
            Thanks for taking the time to explore my work.
          </p>
          <button
            onClick={scrollToNextSection}
            className="w-full text-center text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-black text-lightBeige p-2 lg:p-3 xl:p-5 2xl:p-6 mb-2 lg:mb-4 xl:mb-6 2xl:mb-8 hover:bg-blackHover transition"
          >
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
}