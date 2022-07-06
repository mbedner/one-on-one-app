import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setPersonModalActive, children }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div className="w-1/3 bg-white rounded p-2">
        <div className="flex justify-end">
          <button
            className="cursor-pointer rounded p-2 hover:bg-gray-100"
            onClick={() => setPersonModalActive((prevState) => !prevState)}
          >
            <RiCloseLine />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
