import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import navLogo from '/images/eco-light.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="themed-navbar flex h-max items-center justify-between text-zinc-700 w-full flex-wrap px-4 md:px-10 gap-5 py-3">
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          aria-label="The Roadmap home"
          className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <img className="h-10 w-10" src={navLogo} alt="" />
          <span className="ml-2">The Roadmap</span>
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <IoMenu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation menu */}
        <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-14 cursor-pointer">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950  py-2 md:py-0">
                Home
              </li>
            </NavLink>
            <NavLink to="Page2" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950 py-2 md:py-0">
                Roadmaps
              </li>
            </NavLink>
            <NavLink to="Contact" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950  py-2 md:py-0">
                Feedback
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}