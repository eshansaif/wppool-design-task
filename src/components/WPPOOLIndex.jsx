import React from "react";
import { FaArrowDown } from "react-icons/fa";

const WPPOOLIndex = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative bg-blue-900 text-white min-h-screen flex flex-col justify-center items-start pt-24">
      <div className="absolute inset-0 bg-blue-900">
        <img
          src="index_bg.png"
          alt="Background"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-12 w-full max-w-6xl mt-16 px-8 py-4 z-10">
        <div className="md:col-span-2 mx-auto">
          <div className="grid md:space-y-10 gap-4 ">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">60</h2>
              <p>Companies</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">$100B</h2>
              <p>Market cap</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">3.5x</h2>
              <p>Revenue multiple</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">60%</h2>
              <p>LTM avg. revenue growth rate</p>
            </div>
          </div>
        </div>
        <div className="text-left w-full md:ms-10 mt-16 md:mt-0 md:col-span-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">
            The WPPOOL Index
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center">
            Monitor the performance of emerging, publicly traded, financial
            technology companies
          </p>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          className="px-3 py-3 rounded-full text-[#2042B6] bg-[#D9D9D9]"
          onClick={handleScrollDown}
        >
          <FaArrowDown className="  cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default WPPOOLIndex;
