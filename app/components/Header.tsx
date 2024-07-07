import React from "react";
import { FaCodeCommit } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-neutral-950 text-white text-center p-4 flex items-center justify-center fixed w-full z-50 shadow-xl">
      <div className="flex items-center">
        <div className="text-4xl font-bold flex gap-3 justify-center items-center">
          <span className="text-[#93D7DA]">
            <FaCodeCommit />
          </span>{" "}
          Coding Books
        </div>
      </div>
    </div>
  );
};

export default Header;
