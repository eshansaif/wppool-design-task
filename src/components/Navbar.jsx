import { useState } from "react";
import { IoMenuSharp, IoShareSocialSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white flex justify-between items-center px-8 py-4 z-10">
        <img src="logo.png" alt="WPPOOL Logo" className="h-8" />

        <div className="flex space-x-4">
          <button className="bg-transparent border border-white rounded-full py-4 px-4">
            <IoShareSocialSharp />
          </button>
          <button className="bg-transparent border border-white rounded-full px-4 py-2 hidden md:inline-block">
            Download the 2024 Report
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="">
            {isOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <IoMenuSharp className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 w-3/4 md:w-1/4  rounded-lg bg-white text-[#191618] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="absolute top-4 right-4 flex items-center space-x-4">
            <button className="bg-[#AFCD80] border border-white rounded-full py-4 px-4">
              <IoShareSocialSharp className="text-white " />
            </button>
            <button className="border border-white rounded-full px-4 py-2 bg-[#2042B6] text-white">
              Download the 2024 Report
            </button>
            <button onClick={() => setIsOpen(false)}>
              <RxCross2 className="h-6 w-6 text-[#191618]" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 mt-16 p-4">
            <li className="p-2">
              <a href="#home">
                {/* <img src="logo.png" alt="WPPOOL Logo" className="h-8" /> */}
              </a>
            </li>
            <li className="p-2">
              <a href="#companies">All Companies</a>
            </li>
            <li className="p-2">
              <a href="#listings">Potential Future Listings</a>
            </li>
            <li className="p-2">
              <a href="#state">State of USA</a>
            </li>
            <li className="p-2">
              <a href="#stories">Stories & Ideas</a>
            </li>
            <li className="p-2">
              <a href="#about">About WPPOOL</a>
            </li>
            <li className="p-2">
              <a href="#portfolio">WPPOOL Portfolio Companies</a>
            </li>
            <li className="p-2 mt-4 text-blue-700">
              <a href="#visit">Visit WPPOOL</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
