import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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

        {/* Menu Toggle */}
        <div className="md:hidden px-4 xl:px-6 2xl:px-8" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" className="text-xl xl:text-2xl 2xl:text-3xl" />
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
        </div>
      )}
    </>
  );
}
