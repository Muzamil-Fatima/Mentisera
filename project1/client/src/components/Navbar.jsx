import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`
    fixed top-0 left-0 w-full flex justify-between z-50 px-4 md:px-10 py-3  text-sm font-medium transition-all duration-300 ${isScrolled ? " bg-white opacity-70 shadow-md" : "bg-transparent opacity-100"}
  `}
    >
      <div className="flex justify-between space-x-4">
        <div className="flex items-center space-x-2">
          <img src="" alt="" />
          <div>
            <h1 className="text-xl font-bold cursor-pointer">
              <Link to="/">Consultants</Link>
            </h1>
            <p className="text-sm opacity-70">
              Empowering Minds, Enabling Futures.
            </p>
          </div>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
        <ul className="hidden md:flex space-x-8 items-center cursor-pointer ">
          <li className="opacity-70 hover:opacity-100">
            <Link to="/find-consultant">Find a Consultant</Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link to="/how-it-works">How it Works</Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="opacity-70 hover:opacity-100">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex space-x-4">
        <button className="hover:bg-blue-600 rounded-xl hover:text-white px-4 p-2">
          Log In
        </button>
        <NavLink
          to="/as-consultant"
          className="bg-blue-600 rounded-xl p-2.5 px-4 text-white "
        >
          Become a Consultant
        </NavLink>
      </div>
      <div
       className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 md:hidden
${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-start space-y-6 p-6 mt-10">
          <li>
            <Link to="/find-consultant">Find a Consultant</Link>
          </li>

          <li>
            <Link to="/how-it-works">How it Works</Link>
          </li>

          <li>
            <Link to="/pricing">Pricing</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <button className="border px-4 py-2 rounded-lg">Log In</button>

          <NavLink
            to="/as-consultant"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Become a Consultant
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
