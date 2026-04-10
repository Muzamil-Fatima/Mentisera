import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Expertise from "./Expertise";
import ProfessionalProfile from "./ProfessionalProfile";
import axios from "axios";
import { BASE_URL } from "../../../utils/api.js";
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
        `${BASE_URL}/api/consultant/create-consultant`,
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
        <div className="mx-auto border border-gray-300 p-6 rounded-xl mt-6">
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
