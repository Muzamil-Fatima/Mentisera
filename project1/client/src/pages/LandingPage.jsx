import React from "react";
import WhyConsultants from "./WhyConsultants";
import TopConsultants from "./TopConsultants";

const LandingPage = () => {
  return (
    <div>
      <div className=" pt-20 md:pt-28 pb-2m md:pb-28 gap-8 m-auto bg-[#e9effc]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8 items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Find Pakistan’s #1 Verified Trainers & Consultants
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-70 max-w-3xl">
            Empowering Minds, Enabling Futures. One platform for every expert,
            trusted by leading organizations.
          </p>
          <div className="flex sm:flex-row gap-4 w-full max-w-3xl ">
            <div className="relative w-full">
              {/* Search Icon */}
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 448L319 351Q277 383 224 383 181 383 144 362 107 340 86 303 64 266 64 223 64 180 86 143 107 106 144 85 181 63 224 63 267 63 304 85 341 106 363 143 384 180 384 223 384 277 351 319L448 416 416 448ZM223 336Q270 336 303 303 335 270 335 224 335 177 303 145 270 112 223 112 177 112 144 145 111 177 111 224 111 270 144 303 177 336 223 336Z" />
              </svg>

              {/* Input */}
              <input
                type="text"
                placeholder="Search by specialty, e.g., 'AI in Education'"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button className="flex items-center gap-2 bg-blue-600 rounded-xl px-6 py-3 text-white hover:bg-blue-700 transition whitespace-nowrap">
              <span className="whitespace-nowrap">Find a Consultant</span>

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
        </div>
      </div>
      <div className="mt-16"></div>
      <WhyConsultants />
      <TopConsultants />
    </div>
  );
};

export default LandingPage;
