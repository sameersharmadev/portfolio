import { useEffect, useRef } from 'react';
import Hero from './components/projects/Hero';
import { projects, featured } from './assets/data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const sectionsRef = useRef([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
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
      <Hero nextSectionRef={scrollRef} />

      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="fade-in-projects mb-8 md:mb-12 lg:mb-20 xl:mb-32 2xl:mb-40"
      >
        <div
          ref={scrollRef}
          className="pt-16 md:pt-20 flex flex-col justify-center bg-black text-lightBeige px-4 md:px-16 lg:px-20 lg:py-8 xl:px-32 xl:py-12 2xl:px-48 2xl:py-16 xl:pt-20"
        >
          {/* Featured Projects Header */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-semibold my-4 md:my-12 lg:my-16 xl:my-20 2xl:my-24">
            Featured Projects
          </h2>

          {/* Featured Projects List */}
          <div className="flex flex-col gap-8 xl:gap-20 2xl:gap-24 mb-8 xl:mb-16">
            {featured.map((elt, index) => (
              <div
                key={elt.id}
                ref={(el) => (sectionsRef.current[index + 1] = el)}
                className="flex flex-col lg:flex-row w-full rounded-md border border-white/20 overflow-hidden bg-blackCards shadow-lg fade-in-projects"
              >
                {/* Image */}
                <div className="w-full lg:w-1/3 relative">
                  <img
                    src={elt.img}
                    alt={elt.title}
                    className="object-cover h-64 lg:h-full w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 flex-wrap bg-black/60 backdrop-blur-md">
                    {elt.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-600 text-xs xl:text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-6 xl:p-8 2xl:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-white text-2xl xl:text-4xl font-bold mb-4">
                      {elt.title}
                    </h2>

                    {elt.detailedDesc ? (
                      <div
                        className="text-white/80 text-sm xl:text-lg leading-relaxed mb-6 space-y-2"
                        dangerouslySetInnerHTML={{ __html: elt.detailedDesc }}
                      />
                    ) : (
                      <p className="text-white/80 text-sm xl:text-lg leading-relaxed mb-6">
                        {elt.desc}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 flex-wrap mt-2">
                    <button
                      className="text-black bg-lightBeige px-4 py-2 text-sm xl:text-base"
                      onClick={() => window.open(elt.website, '_blank')}
                    >
                      Visit Site
                    </button>
                    <button
                      className="text-lightBeige border border-lightBeige px-4 py-2 text-sm xl:text-base"
                      onClick={() => window.open(elt.source, '_blank')}
                    >
                      View Code <FontAwesomeIcon className="ml-1" icon={faArrowUpRightFromSquare} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Other Projects */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-semibold my-4 md:my-8 lg:my-12">
            More Projects
          </h2>

          <div className="flex flex-wrap justify-between gap-y-10 xl:gap-y-16 2xl:gap-y-24">
            {projects.map((elt, projIdx) => {
              const fadeRefIndex = featured.length + 1 + projIdx;
              return (
                <div
                  key={elt.id}
                  ref={(el) => (sectionsRef.current[fadeRefIndex] = el)}
                  className="w-full md:w-[32%] xl:w-[32%] flex flex-col hover:scale-[1.01] transition rounded-md border border-white/20 bg-blackCards shadow-lg overflow-hidden fade-in-projects"
                >
                  <div className="relative p-6 xl:p-8 2xl:p-12 flex flex-col flex-1">
                    <img
                      src={elt.img}
                      alt={elt.title}
                      className="rounded mb-4 w-full h-40 xl:h-48 2xl:h-60 object-cover"
                    />
                    <h3 className="text-white text-2xl xl:text-4xl font-bold mb-4">
                      {elt.title}
                    </h3>
                    <p className="text-white/80 mb-4 xl:text-lg flex-1">{elt.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {elt.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-600 px-3 py-1 rounded text-xs xl:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <button
                        className="bg-lightBeige text-black px-4 py-2 text-sm xl:text-base"
                        onClick={() => window.open(elt.website, '_blank')}
                      >
                        Website
                      </button>
                      <button
                        className="border border-lightBeige text-lightBeige px-4 py-2 text-sm xl:text-base"
                        onClick={() => window.open(elt.source, '_blank')}
                      >
                        Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
