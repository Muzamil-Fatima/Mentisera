import React from "react";
import PersonalInfo from "./PersonalInfo";
import Expertise from "./Expertise";

const AsConsultant = () => {
  return (
    <div>
      <div>
        <h3 className="text-5xl font-bold text-center">Become a Consultant</h3>
        <p className="opacity-75 text-center mt-4 mb-8 text-2xl">
          Join Pakistan’s #1 network for verified trainers and consultants. Fill
          out the form below to start your journey with us.
        </p>
      </div>

      <div>
        <h3>Consultant Application</h3>
        <p>All fields are required unless otherwise noted.</p>
        <PersonalInfo />
        <ProfessionalProfile />
        <Expertise />
      </div>
    </div>
  );
};

export default AsConsultant;
