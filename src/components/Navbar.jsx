import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-5 bg-gray-600 mb-20">
      <Link to="/">
        <div className="container m-auto text-white">Navbar</div>
      </Link>
    </div>
  );
};

export default Navbar;
