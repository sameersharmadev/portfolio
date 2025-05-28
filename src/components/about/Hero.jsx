import { useEffect, useRef } from 'react';
import heroimg from '../../assets/img/about_hero.webp';

export default function AboutHero() {
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

  return (
    <div
      ref={heroRef}
      className="relative h-[calc(100vh-2.5rem)] flex justify-center items-center bg-lightBeige about-fade-in-hero"
    >
      <div className="flex flex-col w-5/6 lg:flex-row-reverse gap-8 lg:gap-12 lg:px-0 items-center md:items-start xl:gap-16 2xl:gap-32 justify-center mx-auto lg:items-center">
        <div className="lg:m-0 md:px-16">
          <img src={heroimg} alt="hero image" className="shadow-lg h-72 md:h-88 lg:h-98 xl:h-[40rem] 2xl:h-[70rem]" />
        </div>
        <div className="flex flex-col gap-4 px-8 md:px-16 lg:px-0 xl:px-8 2xl:px-16 lg:w-5/12 2xl:gap-20">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[9rem]">More about me...</h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-italianno">Design . Build . Solve</h2>
          <p className="text-base md:text-lg xl:text-3xl 2xl:text-5xl 2xl:leading-relaxed">
            For me, its not just a job, it’s a way of thinking. <br />
            It’s how I choose to bring structure to my ideas, and solve problems.
            This page goes deep into my philosophy, journey, and personal life. If you’re just looking for the essentials, check the shorter About section on the home page.
          </p>
        </div>
      </div>
    </div>
  );
}