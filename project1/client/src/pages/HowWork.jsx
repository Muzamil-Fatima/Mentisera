import React from "react";

const HowWork = () => {
  const steps = [
    {
      id: 1,
      title: "1. Find Your Expert",
      svg: (
        <svg
          fill="#ffffff"
          width="24px"
          height="24px"
          viewBox="-2.5 -2.5 24 24"
        >
          <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
        </svg>
      ),
      description:
        "Use our powerful search and filtering tools to browse our directory of verified consultants. Search by specialty, industry, or location to find the perfect match for your needs.",
    },
    {
      id: 2,
      svg: (
        <svg
          fill="white"
          width="24px"
          height="24px"
          viewBox="0 0 1200 1200"
          enable-background="new 0 0 1200 1200"
        >
          <path
            id="rect3042"
            inkscape:connector-curvature="0"
            d="M338.611,0l-59.2,278.697L1.318,344.979l279.788,58.946l66.542,277.08
	l59.129-278.768l278.142-66.188L405.153,277.08L338.611,0z M1072.8,12.671L854.259,230.348l119.2,118.733l218.518-217.685
	L1072.8,12.671z M774.776,309.509L0,1081.265L119.19,1200l774.776-771.756l-119.2-118.735H774.776L774.776,309.509z
	 M1015.012,447.721L983.389,596.62l-148.611,35.462l149.481,31.477l35.529,148.032l31.601-148.898L1200,627.23l-149.482-31.479
	L1015.012,447.721L1015.012,447.721z M771.247,718.285L736.4,882.49l-163.836,38.977l164.8,34.711l39.177,163.244l34.848-164.205
	l163.835-39.022L810.448,881.46L771.247,718.285L771.247,718.285z"
          />
        </svg>
      ),
      title: "2. Use AI-Powered Matching",
      description:
        "For complex projects, submit your requirements to our Intelligent Matching Engine. Our AI will analyze your needs and recommend a shortlist of the most suitable consultants.",
    },
    {
      id: 3,
      title: "3. Trust in Verification",
      svg: (
        <svg
          fill="#ffffff"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.22182541,19.7781746 C3.29761276,18.8539619 3.03246659,17.4441845 3.32230899,15.5944173 C1.80937652,14.4913839 1,13.3070341 1,12 C1,10.6929659 1.80937652,9.50861611 3.32230899,8.40558269 C3.03246659,6.55581547 3.29761276,5.14603806 4.22182541,4.22182541 C5.14603806,3.29761276 6.55581547,3.03246659 8.40558269,3.32230899 C9.50861611,1.80937652 10.6929659,1 12,1 C13.3070341,1 14.4913839,1.80937652 15.5944173,3.32230899 C17.4441845,3.03246659 18.8539619,3.29761276 19.7781746,4.22182541 C20.7023872,5.14603806 20.9675334,6.55581547 20.677691,8.40558269 C22.1906235,9.50861611 23,10.6929659 23,12 C23,13.3070341 22.1906235,14.4913839 20.677691,15.5944173 C20.9675334,17.4441845 20.7023872,18.8539619 19.7781746,19.7781746 C18.8539619,20.7023872 17.4441845,20.9675334 15.5944173,20.677691 C14.4913839,22.1906235 13.3070341,23 12,23 C10.6929659,23 9.50861611,22.1906235 8.40558269,20.677691 C6.55581547,20.9675334 5.14603806,20.7023872 4.22182541,19.7781746 Z M8.65258332,18.5979847 C9.05851175,18.5110507 9.47593822,18.6839544 9.70150129,19.0324608 C10.582262,20.3932808 11.3676332,21 12,21 C12.6323668,21 13.417738,20.3932808 14.2984987,19.0324608 C14.5240618,18.6839544 14.9414883,18.5110507 15.3474167,18.5979847 C16.9324536,18.9374379 17.9168102,18.8111119 18.363961,18.363961 C18.8111119,17.9168102 18.9374379,16.9324536 18.5979847,15.3474167 C18.5110507,14.9414883 18.6839544,14.5240618 19.0324608,14.2984987 C20.3932808,13.417738 21,12.6323668 21,12 C21,11.3676332 20.3932808,10.582262 19.0324608,9.70150129 C18.6839544,9.47593822 18.5110507,9.05851175 18.5979847,8.65258332 C18.9374379,7.06754643 18.8111119,6.08318982 18.363961,5.63603897 C17.9168102,5.18888812 16.9324536,5.06256208 15.3474167,5.40201528 C14.9414883,5.48894934 14.5240618,5.31604564 14.2984987,4.96753923 C13.417738,3.60671924 12.6323668,3 12,3 C11.3676332,3 10.582262,3.60671924 9.70150129,4.96753923 C9.47593822,5.31604564 9.05851175,5.48894934 8.65258332,5.40201528 C7.06754643,5.06256208 6.08318982,5.18888812 5.63603897,5.63603897 C5.18888812,6.08318982 5.06256208,7.06754643 5.40201528,8.65258332 C5.48894934,9.05851175 5.31604564,9.47593822 4.96753923,9.70150129 C3.60671924,10.582262 3,11.3676332 3,12 C3,12.6323668 3.60671924,13.417738 4.96753923,14.2984987 C5.31604564,14.5240618 5.48894934,14.9414883 5.40201528,15.3474167 C5.06256208,16.9324536 5.18888812,17.9168102 5.63603897,18.363961 C6.08318982,18.8111119 7.06754643,18.9374379 8.65258332,18.5979847 Z M11,12.5857864 L15.2928932,8.29289322 L16.7071068,9.70710678 L11,15.4142136 L7.29289322,11.7071068 L8.70710678,10.2928932 L11,12.5857864 Z"
          />
        </svg>
      ),
      description:
        "Rest easy knowing every consultant on our platform has passed a rigorous verification process managed by the MENTISERA TEAM, checking their credentials, experience, and client feedback.",
    },
    {
      id: 4,
      title: "4. Manage Your Project",
      svg: (
        <svg
          fill="#ffffff"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z" />
        </svg>
      ),
      description:
        "Once you've engaged a consultant, use our secure Project Management Dashboard to manage bookings, track milestones, share documents, and communicate seamlessly.",
    },
  ];
  return (
    <div className="p-10 ">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-5xl font-bold mb-6 opacity-80">How It Works</h2>
        <p className="text-xl opacity-70 w-2/3">
          A simple, transparent, and powerful process to connect you with the
          right expertise.
        </p>
      </div>
      {/* TimeLine Container */}
      <div className="relative pt-12">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 opacity-40 transform -translate-x-1/2"></div>

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={step.id}
              className="flex w-full mb-12 items-start relative"
            >
              {/* Left */}
              <div className="w-1/2 flex justify-end pr-8">
                {isLeft && (
                  <div className="flex flex-col bg-white shadow-md hover:shadow-lg p-4 rounded-lg w-5/6">
                    <div className="flex justify-center items-center mb-2">
                      <span className="bg-blue-600 p-2 h-18 w-18 justify-center items-center flex rounded-full shadow-2xl shadow-gray-400 border-4 border-gray-200">
                        {step.svg}
                      </span>
                    </div>

                    <h3 className="text-lg mb-2 font-medium">{step.title}</h3>
                    <p className="opacity-70">{step.description}</p>
                  </div>
                )}
              </div>

              {/* Right */}
              <div className="w-1/2 flex justify-start pl-8">
                {!isLeft && (
                  <div className="flex flex-col bg-white shadow-md hover:shadow-lg p-4 rounded-lg w-5/6">
                    <div className="flex justify-center items-center mb-2">
                      <span className="bg-blue-600 p-2 h-18 w-18 justify-center items-center flex rounded-full shadow-2xl shadow-gray-400 border-4 border-gray-200">
                        {step.svg}
                      </span>
                    </div>
                    <h3 className="text-lg mb-2 font-medium">{step.title}</h3>
                    <p className="opacity-70">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWork;
