import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-10 text-center bg-neutral-950 text-white">
      © {currentYear} Book Collection.
    </div>
  );
};

export default Footer;
