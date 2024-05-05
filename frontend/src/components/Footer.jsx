import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t-light flex flex-col items-center justify-center w-full py-4 text-center border-t">
      <p className="text-light md:text-sm text-xs">
        Copyright &copy; FBF {new Date().getFullYear()}. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
