import React, { useState } from "react";
import TeamMemberDataService from "../services/teamMember.services";

// import uuid from "react-uuid";

const NewUserForm = ({ setPeople, setPersonModalActive }) => {
  //Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  //Click handler that creates new team member
  const createNewTeamMember = async (e) => {
    e.preventDefault();
    setMessage("");
    if (firstName === "" || lastName === "" || title === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }

    const fullName = `${firstName} ${lastName}`;

    const newTeamMember = {
      name: fullName,
      title: title,
      notes: [],
    };

    try {
      await TeamMemberDataService.addTeamMember(newTeamMember);
      setMessage({ error: false, msg: "New Team Member added successfully!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setFirstName("");
    setLastName("");
    setTitle("");

    setPeople((prevList) => [...prevList, newTeamMember]);
    setFirstName("");
    setLastName("");
    setTitle("");

    setPersonModalActive((prevState) => !prevState);
  };

  return (
    <form onSubmit={createNewTeamMember} className="m-auto p-6">
      <div className="flex gap-6 mb-6">
        <label className="flex-1">
          <p>
            First Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-solid border-gray-300 rounded p-2 w-full "
            required
          />
        </label>
        <label className="flex-1">
          <p>
            Last Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-solid border-gray-300 rounded p-2 w-full"
            required
          />
        </label>
      </div>
      <label className="flex-1">
        <p>
          Title<span className="text-red-500">*</span>
        </p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-solid border-gray-300 rounded p-2 w-full"
          required
        />
      </label>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Submit"
          className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-md cursor-pointer hover:bg-gray-700"
        />
      </div>
    </form>
  );
};

export default NewUserForm;
