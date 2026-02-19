import mongoose from "mongoose";

const projectRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    projectGoals: {
      type: String,
      required: true,
      trim: true,
    },

    requiredExpertise: [
      {
        type: String,
        required: true,
      },
    ],

    industry: {
      type: String,
      required: true,
    },

    trainingTopics: [
      {
        type: String,
      },
    ],

    engagementModel: {
      type: String,
      enum: ["Remote", "Onsite", "Hybrid"],
      default: "Remote",
    },

    experienceLevel: {
      type: String,
      enum: ["Junior", "Mid", "Senior"],
      default: "Senior",
    },

    matchedConsultants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // will store consultant IDs after AI match
      },
    ],
  },
  { timestamps: true },
);
const ProjectRequest = mongoose.model("ProjectRequest", projectRequestSchema);
export default ProjectRequest;
