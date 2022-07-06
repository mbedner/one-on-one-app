import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import NoteItem from "../components/NoteItem";

const Staff = ({ people, setPeople, notesList, setNotesList }) => {
  // 1. Take the note and add it to the notesList array upon form submit (done)

  // 2. Get the ID of the current user and make sure if matches the ID in the people array

  // 3. Find the notes object within the array of the current person

  // 4. Push the notes state into the notes array of the current person

  // 5. Filter the current person, map the notes object and put that data into the NoteItem component

  const { teamMemberId } = useParams();
  console.log(teamMemberId);
  const thisTeamMember = people.find((people) => people.id === teamMemberId);

  useEffect(() => {}, []);

  return (
    <div className="container m-auto flex gap-8">
      <div className="w-1/3">
        <div className="bg-white rounded-lg p-6 sticky top-6">
          <h1 className="capitalize">{thisTeamMember.name}</h1>
          <p className="capitalize">{thisTeamMember.title}</p>
        </div>
      </div>
      <div className="w-2/3">
        <form
          className="m-auto p-6 bg-gray-150 rounded-lg mb-16"
          // onSubmit={handleSumbit}
        >
          <label className="flex-1">
            <p>Add a note</p>
            <textarea
              name="content"
              className="border border-solid border-gray-300 rounded p-2 w-full"
              placeholder="Add some information that you learned about the team member during your one-on-one."
              // value={formData}
              // onChange={handleChange}
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
        <ul className="flex flex-col">
          {/* {people
            .filter((person) => person.id === data.person.id)
            .map((person) =>
              person.notes.map((notes) => <NoteItem noteItem={notes.content} />)
            )} */}
          <NoteItem />
          <NoteItem />
          <NoteItem />
        </ul>
      </div>
    </div>
  );
};

export default Staff;
