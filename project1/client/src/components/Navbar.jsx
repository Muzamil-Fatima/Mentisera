import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex justify-between space-x-4">
        <div>
          <img src="" alt="" />
          <div>
            <h1 className="text-xl font-bold">Consultants</h1>
            <p className="text-sm opacity-70">Empowering Minds, Enabling Futures.</p>
          </div>
        </div>
        <ul className="flex space-x-8 items-center">
          <li>Find a Consultant</li>
          <li>How it Works</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="space-x-2">
        <button className="hover:bg-blue-600 rounded-xl hover:text-white p-2">Log In</button>
        <button className="bg-blue-600 rounded-xl p-2 text-white ">Become a Consultant</button>
      </div>
    </div>
  );
};

export default Navbar;
