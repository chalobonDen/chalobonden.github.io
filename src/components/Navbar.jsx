import React from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';

const Navbar = () => {
  const [manuDropdown, setManuDropdown] = useState(false);
  const navToggler = () => {
    setManuDropdown(manuDropdown === false ? true : false);
  };
  return (
    // <div className="flex items-center justify-between flex-wrap bg-teal p-5 bg-green-800 bg-opacity-25 mb-10">
    <div className="z-50 fixed inset-x-0 flex items-center justify-between flex-wrap bg-teal p-5 mb-10 Navbar">
      {/* <div className="flex items-center flex-no-shrink text-gray-600 mr-6">
        <span className="Navbar-text font-semibold text-xl tracking-tight">
          Chalobon
        </span>
      </div> */}
      <div className="block lg:hidden">
        <button
          onClick={navToggler}
          className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          manuDropdown === false
            ? 'text-center hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto'
            : 'w-full block flex-grow lg:flex lg:items-center lg:w-auto'
        }
      >
        <div className="text-sm lg:flex-grow">
          <nav>
            <Link
              onClick={navToggler}
              to="/"
              activeStyle={{
                color: '#bc89ce',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #bc89ce',
                lineHeight: '20px',
              }}
              // activeClassName="underline"
              className="Navbar-text block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              HOME
            </Link>

            <Link
              onClick={navToggler}
              to="/about"
              activeStyle={{
                color: '#bc89ce',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #bc89ce',
                lineHeight: '20px',
              }}
              className="Navbar-text block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              ABOUT
            </Link>
            <Link
              onClick={navToggler}
              to="/portfolio"
              activeStyle={{
                color: '#bc89ce',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #bc89ce',
                lineHeight: '20px',
              }}
              className="Navbar-text block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              PORTFOLIO
            </Link>
            <Link
              onClick={navToggler}
              to="/resume"
              activeStyle={{
                color: '#bc89ce',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #bc89ce',
                lineHeight: '20px',
              }}
              className="Navbar-text block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              RESUME
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
