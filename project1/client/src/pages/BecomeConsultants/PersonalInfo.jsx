import React from "react";
import PhoneInput from "../../components/PhoneInput";

const PersonalInfo = () => {
  return (
    <div>
      <h3>Personal Information</h3>
      <div></div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          className=""
          placeholder="e.g., Dr.Aisha Khan"
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          className=""
          placeholder="you@example.com"
        />
      </div>
      <div>
        <PhoneInput />
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            className=""
            placeholder="e.g., Lahore, Pakistan"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
