import { useEffect, useRef } from 'react';
import heroimg from '../../assets/img/about_hero.webp';

export default function AboutHero({ nextSectionRef }) {
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
            alt="hero image"
            className="shadow-lg h-72 lg:h-128 xl:h-[60rem] 2xl:h-[80rem]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 xl:gap-8 2xl:gap-12 text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem]">More about me...</h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-italianno">
            Design . Build . Solve
          </h2>
          <p className="text-base md:text-lg xl:text-3xl 2xl:text-5xl 2xl:leading-relaxed">
            For me, its not just a job, it’s a way of thinking. <br />
            It’s how I choose to bring structure to my ideas, and solve problems.
            This page goes deep into my philosophy, journey, and personal life. If you’re just looking for the essentials, check the shorter About section on the home page.
          </p>
          <button
            onClick={scrollToNextSection}
            className="w-full text-center text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-black text-lightBeige p-2 lg:p-3 xl:p-5 2xl:p-6 hover:bg-blackHover transition"
          >
            Get to know me
          </button>
        </div>
      </div>
    </div>
  );
}
