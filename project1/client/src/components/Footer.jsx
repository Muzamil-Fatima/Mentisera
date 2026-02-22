import React from "react";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8 p-8">
        <div>
          <h2 className="text-xl font-bold pb-6">Consultants</h2>
          <p className="opacity-70">
            Empowering Minds, Enabling Futures. Consultants is Pakistan’s
            leading network of trusted, impact-driven trainers and consultants,
            verified by the MENTISERA TEAM.
          </p>
          <div>
            {/* <a href=""></a> */}
            {/* <a href=""></a> */}
            {/* <a href=""></a> */}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium pb-6">Platform</h3>
          <ul className="opacity-70 space-y-2">
            <li>Find a Consultant</li>
            <li>Become a Consultant</li>
            <li>Our Portfolio</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium pb-6">Company</h3>
          <ul className="opacity-70 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium pb-6">Legal</h2>
          <ul className="opacity-70 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cancellation Policy</li>
            <li>Refund Policy</li>
            <li>Return Policy</li>
          </ul>
        </div>
      </div>

      <hr className="opacity-30" />
      <div className="flex justify-center items-center flex-col space-y-2 p-6 text-lg opacity-75">
        <p>
          A subsidiary of the <span className="font-medium">MENTISERA EdTech</span> Ecosystem. All
          rights reserved.
        </p>
        <p>&copy; 2026 MENTISERA. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
