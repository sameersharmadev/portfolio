import { useEffect, useRef } from 'react';
import AboutHero from './components/about/Hero';
import About1 from './assets/img/about_1.webp';
import About2 from './assets/img/about_2.webp';
import About3 from './assets/img/about_3.webp';

function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <AboutHero />
      
      <div className="flex flex-col p-6 max-w-5/6 mx-auto text-lightBeige">
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="about-fade-in flex flex-col md:flex-row lg:items-center justify-center gap-6 mt-16 md:mt-24 lg:mt-28 md:gap-4 lg:gap-12 mx-auto xl:mt-24 2xl:mt-48"
        >
          <img src={About1} alt="Picture of Sameer" className=" w-32 md:w-48 lg:w-52 xl:w-72 2xl:w-96 rounded shadow-lg" />
          <p className="text-sm lg:text-lg xl:text-3xl 2xl:text-4xl 2xl:leading-relaxed lg:w-7/12">
            My first introduction to programming was in my school, when I just decided to pick a book about programming in Python from my library out of curiosity.
            <br />
            Over the next two weeks, I finished the entire book, even though it was for four standards above me. It’s not that I found it easy- in fact the opposite. I loved how challenging it was. Its when I first started making small programs in Python, Java, and learnt a bit of HTML and CSS.
            <br />
            <br />
            Fast forward to college, I got interested in competitive programming. Over time I explored web development further and fell in love with it. The idea of making something interactive, visual, and alive was exciting...
          </p>
        </div>
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="about-fade-in flex flex-col md:flex-row-reverse lg:items-center justify-center gap-6 mt-16 md:mt-24 lg:mt-28 md:gap-4 lg:gap-12 mx-auto"
        >
          <img src={About2} alt="Picture of window with rain" className="w-32 md:w-48 lg:w-52 xl:w-72 2xl:w-96 rounded shadow-lg" />
          <p className="text-sm lg:text-lg xl:text-3xl 2xl:text-4xl 2xl:leading-relaxed lg:w-7/12">
            As I dove deeper into it, I realised how little it was about specific tech stacks, and what mattered more is the system design. I believe a good application should respect the user. It should be intuitive, never making people think more than they need to.
            <br />
            There’s something satisfying about designing something so intuitive, that people don’t even notice how much thought went into it, because it just works. 
            And that was my goal: to build something that feels natural, as if it was meant to work that way.
            <br />
            Tech stack is just a toolbox. You choose your tools based on what you need to build. My current stack already gives me the flexibility to design and build any type of web application I want, from fast, responsive interfaces to scalable backend systems.
          </p>
        </div>
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="about-fade-in flex flex-col md:flex-row lg:items-center justify-center gap-6 mt-16 md:mt-24 lg:mt-28 md:gap-4 lg:gap-12 mx-auto mb-16 xl:mb-24 2xl:mb-48"
        >
          <img src={About3} alt="Picture of street taken at night" className="w-32 md:w-48 lg:w-52 xl:w-72 2xl:w-96 rounded shadow-lg" />
          <p className="text-sm lg:text-lg xl:text-3xl 2xl:text-4xl 2xl:leading-relaxed lg:w-7/12">
            Enough with the philosophy, but that’s exactly how I see programming. Just something I started as a pure curiosity and instantly fell in love with.
            <br />
            When I’m doing late night debugging sessions and solving hard problems, this is what keeps me going. The satisfaction that comes from finally getting it, pushing myself to grow, as there are no limits.
            <br />
            This is what I want to dedicate my whole life to. Doing what I love, and loving what I’m doing.
            <br />
            If you share the same passion as me, or have any exciting challenge or opportunity, feel free to connect through my socials or the contact form. I’m open for collaboration, freelancing, or just talk.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;