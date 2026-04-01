import React from "react";

const projects = [
  { name: "AI Curriculum Development", consultant: "Dr. Evelyn Reed", status: "In Progress" },
  { name: "Leadership Workshop Series", consultant: "Marcus Chen", status: "Completed" },
  { name: "Inclusive Classroom Initiative", consultant: "Aisha Khan", status: "Planning" },
  { name: "Cloud Migration Strategy", consultant: "Dr. Ben Carter", status: "In Progress" },
];

const statusStyles = {
  "In Progress": "bg-gray-200 text-gray-800",
  "Completed": "bg-blue-600 text-white",
  "Planning": "bg-gray-200 text-gray-800",
};

const RecentProjects = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full">
      <h2 className="text-lg font-bold mb-2">Recent Projects</h2>
      <p className="text-gray-500 text-sm mb-4">An overview of your most recent projects.</p>
      
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="font-medium">Project</th>
              <th className="font-medium">Consultant</th>
              <th className="font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2">{proj.name}</td>
                <td className="py-2">{proj.consultant}</td>
                <td className="py-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[proj.status]}`}>
                    {proj.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProjects;