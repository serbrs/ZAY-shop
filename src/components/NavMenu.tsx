import * as React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass(
            "fixed top-0 left-0 z-50 shadow-md transition-all ease-in-out bg-white !py-3  duration-150 w-full"
          )
        : setStickyClass("");
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`px-10 py-4  ${stickyClass} `}>
      {/* container */}
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-between items-center block">
          {/* mobile menu */}
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-green-400 lg:text-4xl text-2xl md:text-3xl  font-bold  font-sans">
                ZAY
              </h1>
            </Link>
            <span
              className="block lg:hidden cursor-pointer"
              onClick={() => handleClick()}
            >
              <BiMenu className="w-9 h-9  md:w-10 md:h-10 text-gray-600" />
            </span>
          </div>
          {/* nav items */}
          <div
            className={` lg:flex items-center justify-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="text-base lg:flex  gap-6 lg:gap-8 text-gray-600 uppercase mt-3 lg:mt-0">
              <li className="p-1  transition-all ease-linear ">
                <Link to="/">Home</Link>
              </li>
              <li className="p-1  transition-all ease-linear ">
                <Link to="/about">About</Link>
              </li>
              <li className="p-1  transition-all ease-linear ">
                <Link to="/shop">Shop</Link>
              </li>
              <li className=" p-1  transition-all ease-linear ">
                <Link to="/contact ">Contact</Link>
              </li>
            </ul>
            {/* nav icons */}
            <div className="flex items-center justify-center gap-3 lg:gap-5 mt-3 lg:m-0">
              <div className="flex lg:ml-4 w-full">
                <input
                  type="text"
                  className="px-4 py-2 w-full lg:hidden border border-indigo-500/50 rounded-l-md focus:text-gray-700 focus:bg-white focus:border-indigo-500/100 focus:outline-2 focus:outline-indigo-500/100"
                  placeholder="Search..."
                />
                <button className="flex items-center justify-center px-4 lg:p-0 border-l lg:bg-inherit lg:border-none bg-gray-300 rounded-r-md">
                  <FaSearch />
                </button>
              </div>
              <div className="flex gap-3 lg:gap-5">
                <Link to="/#">
                  <div className="relative block ">
                    <span className="absolute bottom-2 left-1 p-1 bg-slate-200 rounded-full text-black text-xs font-semibold">
                      12+
                    </span>
                    <FaHeart />
                  </div>
                </Link>
                <Link to="/#">
                  <div className="relative block ml-1 ">
                    <span className="absolute bottom-2 left-1 p-1 bg-slate-200 rounded-full text-black text-xs font-semibold">
                      33+
                    </span>
                    <FaShoppingCart />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
