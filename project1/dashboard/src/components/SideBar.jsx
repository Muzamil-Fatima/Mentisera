import React from "react";
import { NavLink } from "react-router-dom";

// Material UI Icons
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import BarChartIcon from "@mui/icons-material/BarChart";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const SideBar = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/home",
      icon: <HomeIcon fontSize="small" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <WorkIcon fontSize="small" />,
    },
    {
      name: "Performance",
      path: "/performance",
      icon: <BarChartIcon fontSize="small" />,
    },
    {
      name: "Verification",
      path: "/verification",
      icon: <VerifiedIcon fontSize="small" />,
    },
    {
      name: "Consultant",
      path: "/consultant",
      icon: <PeopleIcon fontSize="small" />,
    },
  ];

  return (
    <div className="bg-blue-950 text-white w-64 h-full p-2 flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <div>
          <h1 className="text-2xl font-bold cursor-pointer">Consultants</h1>
          <p className="text-sm opacity-70">
            Empowering Minds, Enabling Futures.
          </p>
        </div>

        <div className="w-full h-px bg-gray-300 opacity-75 mt-2 mb-2" />

        {/* Menu */}
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="group mb-2 rounded-xl hover:bg-white hover:text-black transition"
            >
              <NavLink
                to={item.path}
                className="flex items-center gap-3 px-3 py-2 text-sm"
              >
                <span className="group-hover:text-black">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="w-full h-px bg-gray-300 opacity-75 mb-2" />

        <div className="group rounded-xl hover:bg-white hover:text-black transition">
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 text-sm"
          >
            <SettingsIcon fontSize="small" />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;