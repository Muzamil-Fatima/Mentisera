import React from "react";
import PersonalInfo from "./PersonalInfo";
import Expertise from "./Expertise";
import ProfessionalProfile from "./ProfessionalProfile";
const AsConsultant = () => {
  return (
    <div className="mb-20">
      <div className="pt-26 pb-18 px-26 w-2/3 text-center flex flex-col items-center mx-auto">
        <h3 className="text-5xl font-bold  ">Become a Consultant</h3>
        <p className="opacity-75  mt-6 mb-8 text-xl ">
          Join Pakistan’s #1 network for verified trainers and consultants. Fill
          out the form below to start your journey with us.
        </p>
      </div>

      <div className="mx-auto border border-gray-300 p-6 rounded-xl w-2/3">
        <h3 className="text-3xl font-bold">Consultant Application</h3>
        <p className="opacity-75">All fields are required unless otherwise noted.</p>
        <PersonalInfo />
        <ProfessionalProfile />
        <Expertise />
      </div>
    </div>
  );
};

export default AsConsultant;
