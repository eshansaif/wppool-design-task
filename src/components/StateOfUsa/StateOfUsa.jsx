import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import "../../../src/App.css"; // Include your custom styles if necessary

const StateOfUsa = () => {
  return (
    <div
      className="bg-gray-100 text-gray-800 relative bg-auto bg-right bg-no-repeat "
      style={{
        backgroundImage: `url('statesofusa_bg.png')`,
      }}
    >
      <div className="max-w-9xl mx-5 md:mx-10 text-left mb-8">
        <h1 className="text-3xl font-semibold mb-4">State of USA</h1>
        <div className="inline-flex items-center mb-4">
          <select className="px-4 bg-blue-600 text-white py-2 rounded-lg focus:outline-none">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <p>
          Click through the slides or download the report to view natively on
          your device.
        </p>
      </div>
      <div className="max-w-9xl mx-auto">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          grabCursor={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="slider1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="slider2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="slider1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="slider2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="slider1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="slider2.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center md:mx-10 mx-5 gap-y-3">
        <div className="flex items-center space-x-2">
          <button className="bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-blue-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button className="bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-blue-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
          <span className="text-gray-600">Pages</span>
          <select className="border border-gray-300 rounded-3xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>1 and 2</option>
            {/* Add more options as needed */}
          </select>
          <span className="text-gray-600">of 37</span>
        </div>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
          Download the 2023 Report
        </button>
      </div>
    </div>
  );
};

export default StateOfUsa;
