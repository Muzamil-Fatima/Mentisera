import React from "react";
import { Link } from "react-router-dom";
const TopConsultants = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-center pt-16 pb-16">
        Meet Our Top Consultants
      </h3>
      <p className="text-center text-lg opacity-75">
        Explore a selection of our highly-rated experts ready to help you.
      </p>
      <button className="block mx-auto mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        <Link to="/find-consultant">Explore All Consultants</Link>
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49 200.913C99.7842 198.157 150.377 196.78 200.778 196.78C276.38 196.78 336.003 200.913 351.598 200.913"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M297.858 148C311.416 151.811 342.206 190.498 350.385 194.54C358.564 198.581 323.305 244.831 307.119 253"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default TopConsultants;
