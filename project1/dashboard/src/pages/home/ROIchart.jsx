import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { quarter: "Q1", roi: 12 },
  { quarter: "Q2", roi: 18 },
  { quarter: "Q3", roi: 22 },
  { quarter: "Q4", roi: 18 },
];

const ROIchart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full">
      <h2 className="text-2xl font-bold mb-1">Performance & ROI Tracking</h2>
      <p className="text-gray-500 text-sm mb-4">
        Quarterly Return on Investment from completed projects.
      </p>

      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 8, bottom: 25 }}
          barCategoryGap="6px" // distance between bars
        >
          <XAxis
            dataKey="quarter"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
          />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 12, fill: "#6b7280" }}
          />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar
            dataKey="roi"
            fill="#2563EB"
            barSize={88} // wider bars
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ROIchart;
