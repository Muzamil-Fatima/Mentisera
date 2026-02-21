import React from "react";
const cart = [
  {
    title: "For Organizations",
    minDescription: "Find and manage top-tier talent for your projects.",
    subTitle: "Contact Us",
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
    p1: "Create a professional profile",
    p2: "Official verification badge",
    p3: "Get matched with projects",
    p4: "Secure payment processing",
    button: "Become a Consultant",
  },
];
const Price = () => {
  return (
    <div>
      <div>
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the plan that's right for you. No hidden fees, ever.</p>
      </div>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.minDescription}</p>
            <p>{item.subTitle}</p>
            <ul>
              <li>{item.p1}</li>
              <li>{item.p2}</li>
              <li>{item.p3}</li>
              <li>{item.p4}</li>
            </ul>
            <button>{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
