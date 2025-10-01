import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-neutral-950 text-white p-4 flex items-center justify-between fixed w-full z-50 shadow-xl">
      <a
        href="https://github.com/hernandoabella/book-catalog"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-[#93D7DA] transition"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Header;
