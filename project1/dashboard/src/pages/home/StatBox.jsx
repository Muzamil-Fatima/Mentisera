import React from "react";

const StatBoxDesign = ({ title, number, subtitle, icon }) => (
  <div className="bg-white text-black rounded-xl p-4 flex flex-col justify-between h-full shadow-md w-full">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {icon}
      </div>
    </div>
      <p className="text-2xl font-semibold">{number}</p>
    <div className="flex">
      <svg
        width="14px"
        height="14px"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49 200.913C99.7842 198.157 150.377 196.78 200.778 196.78C276.38 196.78 336.003 200.913 351.598 200.913"
          stroke="#000000"
          stroke-opacity="0.9"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M297.858 148C311.416 151.811 342.206 190.498 350.385 194.54C358.564 198.581 323.305 244.831 307.119 253"
          stroke="#000000"
          stroke-opacity="0.9"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-green-500 mt-2">{subtitle}</p>
    </div>
  </div>
);

const StatBox = () => {
  const boxes = [
    {
      title: "Active Projects",
      number: "4",
      subtitle: "+2 from last month",
      icon: (
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
        </svg>
      ),
    },
    {
      title: "Completed Projects",
      number: "28",
      subtitle: "+5 from last month",
      icon: (
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
        </svg>
      ),
    },
    {
      title: "Consultants Engaged",
      number: "12",
      subtitle: "+1 from last month",
      icon: (
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
        </svg>
      ),
    },
    {
      title: "Average ROI",
      number: "18%",
      subtitle: "+1.2% from last month",
      icon: (
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4">
      {boxes.map((box, index) => (
        <StatBoxDesign
          key={index}
          title={box.title}
          number={box.number}
          subtitle={box.subtitle}
          icon={box.icon}
        />
      ))}
    </div>
  );
};

export default StatBox;
