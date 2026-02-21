import React from "react";

const HowWork = () => {
  const steps = [
    {
      id: 1,
      title: "1. Find Your Expert",
      svg: "",
      description:
        "Use our powerful search and filtering tools to browse our directory of verified consultants. Search by specialty, industry, or location to find the perfect match for your needs.",
    },
    {
      id: 2,
      title: "2. Use AI-Powered Matching",
      svg: "",
      description:
        "For complex projects, submit your requirements to our Intelligent Matching Engine. Our AI will analyze your needs and recommend a shortlist of the most suitable consultants.",
    },
    {
      id: 3,
      title: "3. Trust in Verification",
      svg: "",
      description:
        "Rest easy knowing every consultant on our platform has passed a rigorous verification process managed by the MENTISERA TEAM, checking their credentials, experience, and client feedback.",
    },
    {
      id: 4,
      title: "4. Manage Your Project",
      svg: "",
      description:
        "Once you've engaged a consultant, use our secure Project Management Dashboard to manage bookings, track milestones, share documents, and communicate seamlessly.",
    },
  ];
  return (
    <div className="p-10">
      <div className="flex flex-col items-center justify-center p-20 text-center space-y-4">
        <h2 className="text-5xl font-bold mb-6 opacity-80">How It Works</h2>
        <p className="text-xl opacity-70 w-2/3">
          A simple, transparent, and powerful process to connect you with the
          right expertise.
        </p>
      </div>
      {/* TimeLine Container */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 opacity-40 transform -translate-x-1/2"></div>
        {steps.map((step, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={step.id}
              className={`flex w-full mb-12 ${isOdd ? "justify-start" : "justify-end"}`}
            >
              <div className="w-5/12 bg-white shadow-md p-4 rounded-lg"></div>
              {/* <div>
                <p>{step.svg}</p>
              </div> */}
              <div className="w-5/12 bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-lg mb-2 font-medium">{step.title}</h3>
                <p className="opacity-70">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWork;
