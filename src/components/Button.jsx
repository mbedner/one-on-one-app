import React from "react";

const Button = ({ setPersonModalActive, value }) => {
  return (
    <button
      className="mt-8 bg-gray-800 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-gray-700"
      onClick={() => setPersonModalActive((prevState) => !prevState)}
    >
      {value}
    </button>
  );
};

export default Button;
