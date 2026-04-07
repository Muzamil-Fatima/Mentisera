import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Expertise from "./Expertise";
import ProfessionalProfile from "./ProfessionalProfile";
import axios from "axios";
import { BASE_URL } from "../../Utils/api.js";
import { toast } from "react-hot-toast";
const AsConsultant = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    profileHeadline: "",
    bio: "",
    linkedin: "",
    portfolio: "",
    expertise: "",
    experience: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URL}/api/consultant/createConsultant`,
        formData,
      );
      toast.success("Application submitted successfully!");
      console.log(res.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      console.log(error);
    }
  };
  return (
    <div className="mb-20">
      <form action="" onSubmit={handleSubmit}>
        <div className="pt-26 pb-18 px-26 w-2/3 text-center flex flex-col items-center mx-auto">
          <h3 className="text-5xl font-bold  ">Become a Consultant</h3>
          <p className="opacity-75  mt-6 mb-8 text-xl ">
            Join Pakistan’s #1 network for verified trainers and consultants.
            Fill out the form below to start your journey with us.
          </p>
        </div>

        <div className="mx-auto border border-gray-300 p-6 rounded-xl w-2/3">
          <h3 className="text-3xl font-bold">Consultant Application</h3>
          <p className="opacity-75">
            All fields are required unless otherwise noted.
          </p>
          <PersonalInfo formData={formData} setFormData={setFormData} />
          <ProfessionalProfile formData={formData} setFormData={setFormData} />
          <Expertise formData={formData} setFormData={setFormData} />
          <button className="bg-blue-600 w-full text-white mt-2.5 mb-2.5 rounded-xl p-1.5 text-center">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AsConsultant;
