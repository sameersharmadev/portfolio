import { NavLink } from 'react-router';
import branding from '../assets/img/branding_header.png';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-headerBeige text-black shadow-sm sticky top-0 z-50">
      {/* Navigation Links */}
      <div className="flex">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `p-2 px-6 transition-all duration-200 ease-in-out 
              ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-black hover:text-headerBeige'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Branding */}
      <div className="text-lg tracking-wide font-bold tracking-wider text-black uppercase select-none cursor-default px-8">
        {"< Sameer Sharma />"}
      </div>
    </div>
  );
}
