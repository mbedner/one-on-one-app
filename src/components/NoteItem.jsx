import React from "react";
import { RiStickyNoteLine } from "react-icons/ri";

const NoteItem = ({ noteItem }) => {
  return (
    <>
      <li className="flex flex-col justify-center items-center border-l border-gray-300 border-dashed relative pl-12 ml-10 last:border-0">
        <span className="absolute -left-6 top-0 text-gray-800 bg-white p-4 border border-gray-300 border-solid rounded-full shadow-sm">
          <RiStickyNoteLine />
        </span>
        <div className="w-full bg-white rounded-lg p-4 border-solid border border-gray-300 justify-center shadow-sm mb-20">
          This is a note this is a note this is a note this is a note this is a
          note {noteItem}
        </div>
        {/* <span className="h-20 w-px m-auto border-l border-dashed border-gray-300"></span> */}
      </li>
    </>
  );
};

export default NoteItem;
