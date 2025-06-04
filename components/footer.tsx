import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-skyblue-100 bg-skyblue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-skyblue-900 mb-4">caerus</h3>
            <p className="text-sm text-skyblue-600 mb-4">
              We offer travel itineraries that focus on rich experiences
            </p>
            <p className="text-sm mb-6 text-skyblue-800">ccaeruss@gmail.com</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Company
              </div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                About
              </div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Contact
              </div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Careers
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Support
              </div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Help Center
              </div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Terms
              </div>
              <div className="text-sm font-medium mb-2 text-skyblue-800">
                Privacy
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-skyblue-600">
          © 2024 Caerus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
