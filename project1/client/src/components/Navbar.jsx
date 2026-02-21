import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    fixed top-0 left-0 w-full flex justify-between p-2 text-sm font-medium transition-all duration-300 ${isScrolled ? " bg-white opacity-70 shadow-md" : "bg-transparent opacity-100"}
  `}
    >
      <div className="flex justify-between space-x-4">
        <div>
          <img src="" alt="" />
          <div>
            <h1 className="text-xl font-bold">Consultants</h1>
            <p className="text-sm opacity-70">
              Empowering Minds, Enabling Futures.
            </p>
          </div>
        </div>
        <ul className="flex space-x-8 items-center cursor-pointer">
          <li>Find a Consultant</li>
          <li>How it Works</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="space-x-4">
        <button className="hover:bg-blue-600 rounded-xl hover:text-white px-4 p-2">
          Log In
        </button>
        <button className="bg-blue-600 rounded-xl p-2.5 px-4 text-white ">
          Become a Consultant
        </button>
      </div>
    </div>
  );
};

export default Navbar;
