import React from "react";

const AboutWppool = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-9xl mx-auto  px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg flex flex-col-reverse md:flex-row">
        <div className="p-8 md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About WPPOOL
          </h2>
          <p className="text-xl text-gray-700 mt-4">
            Investing in wppool for over 50 years
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
          <button className="mt-6 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow-lg">
            Contact WPPOOL
          </button>
        </div>
        <div className="px-8 md:w-1/2">
          <img
            className="object-cover h-full w-"
            src="about_wppool.png"
            alt="WPPOOL Creative"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWppool;
