import React from "react";

const Expertise = () => {
  return (
    <div>
      <h5>Expertise</h5>
      <div></div>
      <h6>Areas of Expertise / Specialties</h6>
      <textarea
        name="expertise"
        id="expertise"
        placeholder="e.g., Ai in Education, Corporate Training, Curriculum Development"
      ></textarea>
      <p>Separate different specialties with a comma.</p>
      <label htmlFor="">Years of Professional Experience</label>
      <input type="text" placeholder="e.g., 10+ years " />
    </div>
  );
};

export default Expertise;
