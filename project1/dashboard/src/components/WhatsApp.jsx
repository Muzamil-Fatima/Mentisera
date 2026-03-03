import React from "react";

const WhatsApp = () => {
  return (
    <div className="bg-green-500 fixed bottom-4 right-4 text-white px-3 py-2 mb-4 flex items-center gap-3 rounded-4xl w-fit">
      
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
      >
        <path d="M21 12c0 4.97-4.03 9-9 9a8.96 8.96 0 01-4.36-1.13L3 21l1.17-4.48A8.96 8.96 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
        <path d="M9.5 8.5c.3-.5.7-.5 1-.5h.5c.3 0 .5.1.6.4l.6 1.5c.1.3 0 .6-.2.8l-.4.4c.6 1.2 1.6 2.2 2.8 2.8l.4-.4c.2-.2.5-.3.8-.2l1.5.6c.3.1.4.3.4.6v.5c0 .3 0 .7-.5 1-.6.3-1.5.3-2.6-.2-2.2-1-3.9-2.7-4.9-4.9-.5-1.1-.5-2 0-2.6z" />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="font-bold ">Support</span>
        <span className="text-[12px]">via WhatsApp</span>
      </div>
    </div>
  );
};

export default WhatsApp;