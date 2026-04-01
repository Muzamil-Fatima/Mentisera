import React from "react";

const Expertise = () => {
  return (
    <div>
      <h5 className="text-xl font-medium mt-4">Expertise</h5>
      <div className="mt-4">
        <label className="text-sm mb-2 font-medium">
          Areas of Expertise / Specialties
        </label>
        <textarea
          className="border border-gray-300 rounded-md p-2 w-full mt-2"
          name="expertise"
          id="expertise"
          placeholder="e.g., Ai in Education, Corporate Training, Curriculum Development"
        ></textarea>
        <p className="text-sm text-gray-500">
          Separate different specialties with a comma.
        </p>
        <label htmlFor="" className="text-sm mb-3 font-medium mt-4">
          Years of Professional Experience
        </label>
        <input
          type="text"
          placeholder="e.g., 10+ years "
          className="border border-gray-300 rounded-md p-2 w-full mt-2"
        />
      </div>
    </div>
  );
};

export default Expertise;
