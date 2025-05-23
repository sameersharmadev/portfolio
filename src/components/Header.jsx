import { NavLink } from 'react-router';
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-headerBeige text-black shadow-sm sticky top-0 z-50 h-10">
      {/* Navigation Links */}
      <div className="flex">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `p-2 px-6 transition-all duration-200 ease-in-out 
              ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-blackHover hover:text-headerBeige'}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Branding */}
      <div className="gap-4 flex items-center pt-1">
        <div className="text-3xl tracking-wider text-black uppercase select-none cursor-default px-8 font-bebas">
        {"< Sameer Sharma />"}
        </div>
      </div>
    </div>
  );
}
