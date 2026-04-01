import React from "react";

const ProfessionalProfile = () => {
  return (
    <div>
      <h4 className="text-xl font-medium mt-4">ProfessionalProfile</h4>
      <div className="mt-4">
        <label htmlFor="profileHeadline" className="text-sm mb-2 font-medium">
          Profile Headline
        </label>
        <input
          className="border border-gray-300 rounded-md p-2 w-full mt-2"
          type="text"
          id="profileHeadline"
          placeholder="e.g., Expert in Ai-driven educational technology"
        />
        <label htmlFor="" className="text-sm mb-2 font-medium">
          Short Bio
        </label>
        <textarea
          className="border border-gray-300 rounded-md p-2 w-full mt-2"
          name=""
          id=""
          placeholder="Tell us about your background, you mission, and what makes you a grate consultant"
        ></textarea>
        <p className="text-sm text-gray-500">
          A concise bio (max 500 characters) to appear on your profile.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* LinkedIn */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 font-medium">
              LinkedIn Profile URL (Optional)
            </label>
            <input
              type="text"
              placeholder="https://linkedin.com/in/yourprofile"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Portfolio */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 font-medium">
              Website/Portfolio URL (Optional)
            </label>
            <input
              type="text"
              placeholder="https://yourportfolio.com"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
