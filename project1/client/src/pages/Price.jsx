import React from "react";
const cart = [
  {
    title: "For Organizations",
    minDescription: "Find and manage top-tier talent for your projects.",
    subTitle: "Contact Us",
    svg: (
      <svg
        fill="#00000"
        height="18px"
        width="14px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        xml:space="preserve"
      >
        <polygon points="437.3,30 202.7,339.3 64,200.7 0,264.7 213.3,478 512,94 " />
      </svg>
    ),
    p1: "Access to verified consultants",
    p2: "AI-powered matching",
    p3: "Project management dashboard",
    p4: "Dedicated account manager",
    button: "Contact Sales",
  },
  {
    title: "For Consultants",
    minDescription: "Showcase your expertise and get hired.",
    subTitle: "Free to join",
    svg: (
      <svg
        fill="#00000"
        height="18px"
        width="14px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        xml:space="preserve"
      >
        <polygon points="437.3,30 202.7,339.3 64,200.7 0,264.7 213.3,478 512,94 " />
      </svg>
    ),
    p1: "Create a professional profile",
    p2: "Official verification badge",
    p3: "Get matched with projects",
    p4: "Secure payment processing",
    button: "Become a Consultant",
  },
];
const Price = () => {
  return (
    <div className="mb-20">
      <div className="p-20 ">
        <h2 className="text-5xl font-bold text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center opacity-75 text-xl mt-4">
          Choose the plan that's right for you. No hidden fees, ever.
        </p>
      </div>
      <div className="flex justify-center justify-items-center bg-shadow-md gap-8 p-6 rounded-lg ">
        {cart.map((item, index) => (
          <div key={index} className="space-y-2.5 shadow-md pt-18 pb-18 pl-8 pr-14 border border-gray-200 rounded-lg hover:shadow-lg transition w-2/5">
            <h3 className="text-4xl font-semibold">{item.title}</h3>
            <p className="opacity-75">{item.minDescription}</p>
            <p className="font-medium text-3xl m-2.5">{item.subTitle}</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>{item.svg}</span>
                <span> {item.p1}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>{item.svg}</span>
                <span> {item.p2}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>{item.svg}</span>
                <span> {item.p3}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>{item.svg}</span>
                <span> {item.p4}</span>
              </li>
            </ul>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
