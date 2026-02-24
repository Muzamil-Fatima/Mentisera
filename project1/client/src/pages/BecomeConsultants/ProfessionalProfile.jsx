import React from "react";

const ProfessionalProfile = () => {
  return (
    <div>
      <h4>ProfessionalProfile</h4>
      <input
        type="text"
        placeholder="e.g., Expert in Ai-driven educational technology"
      />
      <label htmlFor="">Short Bio</label>
      <textarea
        name=""
        id=""
        placeholder="Tell us about your background, you mission, and what makes you a grate consultant"
      ></textarea>
      <p>A concise bio (max 500 characters) to appear on your profile.</p>
      <label htmlFor="">LinkedIn Profile URL (Optional)</label>
      <input
        type="text"
        name=""
        id=""
        placeholder="https://linkedin.com/in/yourprofile"
      />
      <label htmlFor="">Website/Portfolio URL (Optional)</label>
      <input
        type="text"
        placeholder="https://yourportfolio.com"
        name=""
        id=""
      />
    </div>
  );
};

export default ProfessionalProfile;
