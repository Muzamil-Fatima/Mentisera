import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: Number },
    username: { type: String, required: true },
    userPassword: { type: String, required: true },
    userEmail: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "consultant", "admin"],
      default: "user",
    },
    accountVerified: { type: Boolean, default: false },
    resetTokenExpire: Date,
    resetToken: String,
    verificationToken: String,
    verificationCodeExpire: Date,
    resetPasswordOTP: String,
    resetPasswordOTPExpire: Date,
    googleId: String,
    authProvider: { type: String },
    isLoggedIn: { type: Boolean, default: false },
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export default User;
