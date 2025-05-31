import { useEffect, useRef } from 'react';
import Hero from './components/projects/Hero';
import featured from './assets/data/projects';

function Projects() {
  const sectionsRef = useRef([]);
  const scrollRef = useRef(null);

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
      <Hero nextSectionRef={scrollRef}/>
      <div
        ref={(el) => {
          sectionsRef.current[0] = el; 
        }}
        className="fade-in-projects"
      >
        <div ref={scrollRef} className="pt-16 md:pt-20 flex flex-col justify-center bg-black text-lightBeige px-4 md:px-16 lg:px-20 lg:py-8 xl:px-32 xl:py-12 2xl:px-48 2xl:py-16 xl:pt-20">
          {/* Projects Section */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-semibold my-4 md:my-8 lg:my-8 xl:my-12 2xl:my-16">Featured work</h2>
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 2xl:gap-16">
            
            {featured.map((elt, index) => (
              <div
                key={elt.id}
                ref={(el) => (sectionsRef.current[index + 1] = el)} 
                className="flex flex-col w-full lg:w-1/3 hover:scale-101 rounded-md border border-white/20 fade-in-projects"
              >
                {/* Card Header */}
                <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4 px-3 py-2 xl:px-4 xl:py-3 2xl:px-6 2xl:py-4 bg-gray-900 select-none rounded-md rounded-b-none border border-gray-900">
                <span className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6 rounded-full bg-green-500"></span>
                </div>

                {/* Card Body */}
                <div className="relative backdrop-blur-md bg-blackCards rounded-lg rounded-t-none shadow-lg p-6 xl:p-8 2xl:p-12 flex flex-col flex-1 min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] 2xl:min-h-[600px]">
                  <img
                    src={elt.img}
                    alt={elt.title}
                    className="rounded mb-4 w-full h-40 lg:h-32 xl:h-48 2xl:h-92 object-cover xl:mb-12 2xl:mb-16"
                  />
                  <h2 className="text-white text-2xl md:text-3xl xl:text-5xl 2xl:text-7xl font-bold mb-4 xl:mb-8 2xl:mb-12">
                    {elt.title}
                  </h2>
                  <div className="flex-1">
                    <p className="text-white/80 mb-6 md:text-base xl:text-2xl 2xl:text-5xl xl:mb-12 2xl:mb-16">{elt.desc}</p>
                    <div className="flex gap-2 xl:gap-3 2xl:gap-4 flex-wrap cursor-default">
                      {elt.stack.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-gray-600 px-2 py-1 xl:px-3 xl:py-2 2xl:px-4 2xl:py-2 shadow-md rounded text-xs lg:text-sm xl:text-xl 2xl:text-4xl xl:mb-12 2xl:mb-16"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 xl:gap-6 2xl:gap-8 mt-4 xl:mt-6 2xl:mt-8">
                    <button
                      className="text-black text-sm lg:text-base bg-lightBeige p-2 px-4 md:p-2 md:px-3 xl:p-4 xl:px-8 2xl:p-6 2xl:px-12 text-sm md:text-base xl:text-xl 2xl:text-3xl"
                      onClick={() => window.open(elt.website, '_blank')}
                    >
                      View
                    </button>
                    <button
                      className="text-lightBeige text-sm lg:text-base bg-transparent p-2 px-4 md:p-2 md:pl-3 xl:p-4 xl:px-8 2xl:p-6 2xl:px-12 text-sm md:text-base xl:text-xl 2xl:text-3xl"
                      onClick={() => window.open(elt.website, '_blank')}
                    >
                      Website
                    </button>
                    <button
                      className="text-lightBeige text-sm lg:text-base bg-transparent p-2 px-4 md:p-2 md:pl-3 xl:p-4 xl:px-8 2xl:p-6 2xl:px-12 text-sm md:text-base xl:text-xl 2xl:text-3xl"
                      onClick={() => window.open(elt.source, '_blank')}
                    >
                      Repository
                    </button>
                  </div>

                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.07),_transparent_70%)] bg-no-repeat bg-cover mix-blend-screen opacity-70" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;