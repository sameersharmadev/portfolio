import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFile } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle((prev) => !prev);
  }

  return (
    <>
      <div className="flex justify-between items-center bg-headerBeige text-black shadow-sm sticky top-0 z-50 h-10 md:h-10 xl:h-20 2xl:h-24 fade-in">
        {/* Navigation Links */}
        <div className="hidden md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `p-2 md:p-2 xl:p-6 2xl:p-8 px-6 md:px-8 xl:px-12 2xl:px-16 text-sm md:text-lg xl:text-2xl 2xl:text-4xl transition-all duration-200 ease-in-out 
                ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-blackHover hover:text-headerBeige'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Download Resume & Menu Toggle */}
        <div className="flex items-center gap-4 xl:gap-6">
          {/* Simple Download Resume Link */}
          <a href="/resume.pdf" download className="hidden md:flex items-center gap-1 text-sm md:text-base xl:text-xl 2xl:text-2xl mr-6">
            <FontAwesomeIcon icon={faFile} />
            Download Resume
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden px-4 xl:px-6 2xl:px-8" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="lg" className="text-xl xl:text-2xl 2xl:text-3xl" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuToggle && (
        <div className="fixed w-full bg-lightBeige flex flex-col gap-2 xl:gap-4 2xl:gap-6 shadow-md z-50">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `p-2 px-6 xl:px-8 2xl:px-10 text-sm md:text-lg xl:text-2xl 2xl:text-3xl transition-all duration-200 ease-in-out 
                ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-blackHover hover:text-headerBeige'}`
              }
              onClick={() => setMenuToggle(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            download
            className="p-2 px-6 xl:px-8 2xl:px-10 text-sm md:text-lg xl:text-2xl 2xl:text-3xl"
            onClick={() => setMenuToggle(false)}
          >
            <FontAwesomeIcon icon={faFile} className="mr-2" />
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
