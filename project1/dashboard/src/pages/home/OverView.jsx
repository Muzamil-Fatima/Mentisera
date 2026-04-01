import React from "react";
import StatBox from "./StatBox";
import ROIchart from "./ROIchart";
import RecentProjects from "./RecentProjects";

const OverView = () => {
  return (
    <div>
      <StatBox />

      {/* Flex layout with 70/30 */}
      <div className="flex gap-5 mt-5">
        <div className="flex-[0.6]">
          <ROIchart />
        </div>
        <div className="flex-[0.4]">
          <RecentProjects />
        </div>
      </div>
    </div>
  );
};

export default OverView;