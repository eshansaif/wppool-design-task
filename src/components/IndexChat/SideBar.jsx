import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-gray-200 h-full mx-3 my-3 md:block hidden ">
      {/* <div className="flex justify-end p-2">
        <button className="text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosClose /> : <MdMenuOpen />}
        </button>
      </div> */}
      <div className={`${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="text-[#647888]">
          <li className="p-2 mb-2 space-y-2 bg-[#2042B6] text-white rounded-md flex justify-between items-center">
            The Index <span className="md:block hidden">-</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Two <span className="md:block hidden">+</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Three <span className="md:block hidden">+</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Four <span className="md:block hidden">+</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Five <span className="md:block hidden">+</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
