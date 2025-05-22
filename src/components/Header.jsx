import { NavLink } from 'react-router';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="flex bg-headerBeige text-black shadow-sm sticky top-0 z-50 text-center">
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive, isPending }) =>
            `relative p-2 px-8 transition-all duration-200 ease-in-out
            ${isActive ? 'bg-black text-headerBeige' : 'hover:bg-black hover:text-headerBeige'}`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}
