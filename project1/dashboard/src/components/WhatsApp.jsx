import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsApp = () => {
  return (
    <div className="bg-green-500 fixed bottom-4 right-4 text-white px-3 py-2 mb-4 flex items-center gap-3 rounded-4xl w-fit">
      
      {/* Material UI Icon */}
      <WhatsAppIcon className="text-white w-6 h-6" />

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="font-bold">Support</span>
        <span className="text-[12px]">via WhatsApp</span>
      </div>
    </div>
  );
};

export default WhatsApp;