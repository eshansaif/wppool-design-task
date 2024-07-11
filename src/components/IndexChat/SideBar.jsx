import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-200 h-full mx-3 my-3 ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 shadow-lg`}
    >
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <ul className="text-[#647888]">
          <li className="p-2 mb-2 space-y-2 bg-[#2042B6] text-white rounded-md  flex justify-between items-center">
            The Index <span>-</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Two <span>+</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Three <span>+</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Four <span>+</span>
          </li>
          <li className="p-2 mb-2 hover:bg-[#2042B6] hover:text-white rounded-md flex justify-between items-center">
            The Index Tab Five <span>+</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
