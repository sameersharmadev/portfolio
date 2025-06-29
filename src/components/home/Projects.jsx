import { Link } from 'react-router';
import { projects, featured } from '../../assets/data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const latestProjects = projects.slice(-3);

  return (
    <div className="md:mt-20 flex flex-col fade-in-section justify-center bg-black text-lightBeige px-4 md:px-16 lg:px-20 lg:py-8 xl:px-32 xl:py-12 2xl:px-48 2xl:py-16 xl:my-20">

      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-8 xl:mb-16 2xl:mb-28">
        <h2 className="text-2xl  md:text-4xl font-semibold xl:text-6xl 2xl:text-7xl  self-end">
        Things I’ve Built
        </h2>
        <Link
          to="/projects"
          className="px-2 flex items-center text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          View all projects
          <FontAwesomeIcon className="pl-2" icon={faArrowRight} />
        </Link>
      </div>

      {/* FEATURED PROJECTS */}
      <div className="flex flex-col gap-12 xl:gap-20 2xl:gap-24 mb-16">
        {featured.map((elt) => (
          <div
            key={elt.id}
            className="flex flex-col lg:flex-row w-full rounded-md border border-white/20 overflow-hidden bg-blackCards shadow-lg"
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

      {/* LATEST PROJECTS */}
      <div className="flex flex-wrap justify-between gap-y-10 xl:gap-y-16 2xl:gap-y-24">
        {latestProjects.map((elt) => (
          <div
            key={elt.id}
            className="w-full md:w-[32%] xl:w-[32%] flex flex-col hover:scale-[1.01] transition rounded-md border border-white/20 bg-blackCards shadow-lg overflow-hidden"
          >
            {/* Body */}
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
                {elt.stack.map((tech, index) => (
                  <span
                    key={index}
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
        ))}
      </div>

    </div>
  );
}
