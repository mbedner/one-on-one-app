import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { RiDeleteBinLine } from "react-icons/ri";
import TeamMemberDataService from "../services/teamMember.services";

const Table = ({ people, setPersonModalActive }) => {
  //creates state for Modal
  //   const [deleteModal, setDeleteModal] = useState(false);

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    getTeamMembers();
  }, []);

  const getTeamMembers = async () => {
    const data = await TeamMemberDataService.getAllTeamMembers();
    console.log(data.docs);
    setTeamMembers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePerson = async (id) => {
    await TeamMemberDataService.deleteTeamMember(id);
    getTeamMembers();
  };

  // const tableData = people.map((person) => (
  //   <div
  //     className="px-6 py-4 border-b border-solid border-gray-300 last:border-none flex items-center"
  //     key={person.id}
  //   >
  //     <div className="flex-1 capitalize">
  //       <Link to={{ pathname: `${person.id}` }} state={{ person: person }}>
  //         {person.name}
  //       </Link>
  //     </div>
  //     <div className="flex-1 text-xs font-semibold">
  //       <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded capitalize">
  //         {person.title}
  //       </span>
  //     </div>
  //     <div className="flex-1 flex justify-end">
  //       <button
  //         className="cursor-pointer rounded p-2 hover:bg-red-50 hover:text-red-700"
  //         onClick={(e) => deletePerson(e, person.id)}
  //       >
  //         <RiDeleteBinLine />
  //       </button>
  //     </div>
  //   </div>
  // ));

  const tableData = teamMembers.map((doc, index) => (
    <div
      className="px-6 py-4 border-b border-solid border-gray-300 last:border-none flex items-center"
      key={doc.id}
    >
      <div className="flex-1 capitalize">
        <Link to={{ pathname: `${doc.id}` }} state={{ person: doc }}>
          {doc.name}
        </Link>
      </div>
      <div className="flex-1 text-xs font-semibold">
        <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded capitalize">
          {doc.title}
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <button
          className="cursor-pointer rounded p-2 hover:bg-red-50 hover:text-red-700"
          onClick={(e) => deletePerson(doc.id)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container m-auto flex items-center justify-center">
      {teamMembers.length === 0 ? (
        <>
          <div className="block text-center">
            <h2 className="text-4xl font-regular">Add someone in aleady!</h2>
            <Button
              value="Add Team Member"
              setPersonModalActive={setPersonModalActive}
            />
          </div>
        </>
      ) : (
        <div className="block w-3/4">
          <div className="bg-white border border-solid border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <div className="flex bg-gray-100 border-b border-solid border-gray-300  py-2 px-6">
              <div className="flex-1 font-bold text-sm capitalize">
                Team Member
              </div>
              <div className="flex-2 font-bold text-sm capitalize">Title</div>
            </div>
            {tableData}
          </div>
          <div className="flex justify-end mb-4">
            <Button
              value="Add Team Member"
              setPersonModalActive={setPersonModalActive}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
