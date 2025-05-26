import { NavLink, Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenu() {
    setMenuToggle((prev) => !prev);
  }

  return (
    <>
      <div className="flex justify-between items-center bg-headerBeige text-black shadow-sm sticky top-0 z-50 h-10 2xl:h-24 fade-in">
        {/* Navigation Links */}
        <div className="hidden md:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `p-2 2xl:p-8 px-6 2xl:px-16 2xl:text-3xl transition-all duration-200 ease-in-out 
                ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-blackHover hover:text-headerBeige'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Branding */}
        <div className="gap-4 flex items-center pt-1">
          <Link
            to="/"
            className="text-xl md:text-3xl 2xl:text-6xl tracking-wider text-black uppercase select-none cursor-default px-4 md:px-8 2xl:px-12 font-bebas"
          >
            {"< Sameer Sharma />"}
          </Link>
        </div>

        {/* Menu */}
        <div className="md:hidden px-4" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>

      {menuToggle && (
        <div className="absolute w-full bg-lightBeige flex flex-col gap-2 shadow-md z-50">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `p-2 px-6 2xl:px-8 transition-all duration-200 ease-in-out 
                ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-blackHover hover:text-headerBeige'}`
              }
              onClick={() => setMenuToggle(false)} // Close menu on link click
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}