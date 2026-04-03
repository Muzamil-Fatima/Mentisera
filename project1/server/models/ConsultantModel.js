import mongoose from "mongoose";

const consultantModel = new mongoose.Schema(
  {
    //  Personal Info
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    //  Professional Profile
    profileHeadline: {
      type: String,
      required: true,
      maxlength: 100,
    },
    bio: {
      type: String,
      required: true,
      maxlength: 500,
    },
    linkedin: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },

    // Expertise
    expertise: [
      {
        type: String,
      },
    ], // array because comma-separated input
    experience: {
      type: String, // "10+ years"
      required: true,
    },

    //  Extra (VERY IMPORTANT for real app)
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Consultant = mongoose.model("Consultant", consultantModel);

export default Consultant;
