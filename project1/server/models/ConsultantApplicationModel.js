import mongoose from "mongoose";

const consultantApplicationSchema = new mongoose.Schema({
  // Personal Information
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userPhone: { type: String, required: true },
  userLocation: { type: String, required: true },
  // Professional Profile
  userProfileHeading: { type: String, required: true },
  userShortBio: { type: String, required: true },
  userLinkedInUrl: { type: String },
  userPortfolioUrl: { type: String },
  // Expertise
  userExpertise: [{ type: String, required: true }],
  userExperience: { type: Number, required: true },
});
