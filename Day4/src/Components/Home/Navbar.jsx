// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "About Us",
      path: "/about"
    },
    {
      title: "Login",
      path: "/login"
    }
  ];

  return (
    <nav className='bg-gradient-to-r from-white-300 to-purple-200 shadow-lg fixed w-full top-0 z-10'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <h1 className='font-bold text-black text-lg extra-large ' style={{ fontSize: '1.9rem' }}>
            Zen<span className='text-blue-500'>Yoga</span>
          </h1>
          <ul className='flex items-center space-x-4'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="text-black px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-opacity-50 hover:shadow-lg"
                  activeClassName="bg-black-100 text-black"
                  style={{ textDecoration: 'none' }} // Remove underline
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
