import React from "react";

const HowWork = () => {
  const steps = [
    {
      title: "1. Find Your Expert",
      svg: "",
      description:
        "Use our powerful search and filtering tools to browse our directory of verified consultants. Search by specialty, industry, or location to find the perfect match for your needs.",
    },
    {
      title: "2. Use AI-Powered Matching",
      svg: "",
      description:
        "For complex projects, submit your requirements to our Intelligent Matching Engine. Our AI will analyze your needs and recommend a shortlist of the most suitable consultants.",
    },
    {
      title: "3. Trust in Verification",
      svg: "",
      description:
        "Rest easy knowing every consultant on our platform has passed a rigorous verification process managed by the MENTISERA TEAM, checking their credentials, experience, and client feedback.",
    },
    {
      title: "4. Manage Your Project",
      svg: "",
      description:
        "Once you've engaged a consultant, use our secure Project Management Dashboard to manage bookings, track milestones, share documents, and communicate seamlessly.",
    },
  ];
  return (
    <div className="flex ">
      <div>
        <h2>How It Works</h2>
        <p>
          A simple, transparent, and powerful process to connect you with the
          right expertise.
        </p>
      </div>
      <div>
        {steps.map((step, index) => {
          return (
            <div key={index}>
              <div>
                <p>{step.svg}</p>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWork;
