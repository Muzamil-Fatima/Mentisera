import React from "react";
import PhoneInput from "../../components/PhoneInput";

const PersonalInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-medium mt-4">Personal Information</h3>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="mb-2 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="e.g., Dr.Aisha Khan"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <PhoneInput />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="mb-2 text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="e.g., Lahore, Pakistan"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
