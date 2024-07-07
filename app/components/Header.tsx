import React from "react";
import { GoCodeReview } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-neutral-950 text-white text-center p-4 flex items-center justify-center fixed w-full z-50 shadow-xl">
      <div className="flex items-center">
        <div className="text-4xl font-bold flex gap-3 justify-center items-center">
          <span className="text-[#93D7DA]">
            <GoCodeReview />
          </span>{" "}
          Coding Books
        </div>
      </div>
    </div>
  );
};

export default Header;
