import React from "react";
import ProfileVerification from "./ProfileVerification";
import VerificationResult from "./VerificationResult";

const Verification = () => {
  return (
    <div>
      <h3>Consultant Profile Verification</h3>
      <p>
        Use our AI tool to automatically check consultant profiles against
        trusted databases.
      </p>
      <div className="flex">
        <div className="w-[30%]">
          <ProfileVerification />
        </div>
        <div className="w-[70%]">
          <VerificationResult />
        </div>
      </div>
    </div>
  );
};

export default Verification;
