// import { assets } from "../../assets/assets";
// import { useNavigate } from "react-router-dom";

// export default function Buttons() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex gap-3 justify-end">
//       {/* Pending Button */}
//       <button
//         onClick={() => navigate("/pending-consultant")}
//         className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-sm transition"
//       >
//         <img src={assets.pending_clock_icon} className="h-5 w-5" />
//         <span className="text-sm font-medium">Pending</span>
//       </button>

//       {/* New Consultant Button */}
//       <button
//         className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition"
//       >
//         <img src={assets.add_icon} className="h-5 w-5" />
//         <span className="text-sm font-medium">New Consultant</span>
//       </button>
//     </div>
//   );
// }
import { useState } from "react";
import AsConsultant from "../consultant/BecomeConsultants/AsConsultant";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const navigate = useNavigate();
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <div className="flex gap-3 justify-end">
        
        {/* Pending Button */}
        <button
          onClick={() => navigate("/pending-consultant")}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white"
        >
          <img src={assets.pending_clock_icon} className="h-5 w-5" />
          <span className="text-sm font-medium">Pending</span>
        </button>

        {/* New Consultant Button */}
        <button
          onClick={() => setOpenForm(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
        >
          <img src={assets.add_icon} className="h-5 w-5" />
          <span className="text-sm font-medium">New Consultant</span>
        </button>
      </div>

      {/* MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white w-[90%] md:w-3/4 lg:w-2/3 rounded-xl p-5 relative max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* FORM */}
            <AsConsultant />
          </div>
        </div>
      )}
    </>
  );
}