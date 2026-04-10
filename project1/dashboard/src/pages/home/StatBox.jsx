import React from "react";

// Material UI Icons
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const StatBoxDesign = ({ title, number, subtitle, icon }) => (
  <div className="bg-white text-black opacity-75 rounded-xl p-5 flex flex-col justify-between h-full shadow-md w-full border border-gray-300">
    <div className="flex justify-between items-center">
      <h3 className="font-normal">{title}</h3>
      {icon}
    </div>

    <p className="text-2xl font-semibold">{number}</p>

    <div className="flex mt-1.5">
      {/* small green up arrow (kept SVG same as you had) */}
      <svg fill="#008000" width="14px" height="18px" viewBox="0 0 36 36">
        <path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z" />
      </svg>

      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  </div>
);

const StatBox = () => {
  const boxes = [
    {
      title: "Active Projects",
      number: "4",
      subtitle: "+2 from last month",
      icon: <HomeWorkIcon className="text-black" />,
    },
    {
      title: "Completed Projects",
      number: "28",
      subtitle: "+5 from last month",
      icon: <CheckCircleIcon className="text-black" />,
    },
    {
      title: "Consultants Engaged",
      number: "12",
      subtitle: "+1 from last month",
      icon: <PeopleIcon className="text-black" />,
    },
    {
      title: "Average ROI",
      number: "18%",
      subtitle: "+1.2% from last month",
      icon: <TrendingUpIcon className="text-black" />,
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