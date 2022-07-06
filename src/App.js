import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import { Route, Routes } from "react-router-dom";

function App() {
  //Modal States
  const [newPersonModalActive, setPersonModalActive] = useState(false);
  //People
  const [people, setPeople] = useState([]);
  //Note
  const [notesList, setNotesList] = useState([]);
  // console.log(people);
  // console.log(notesList);

  //Delete people
  // function deletePerson(e, personId) {
  //   e.stopPropagation();
  //   setPeople((oldPeople) =>
  //     oldPeople.filter((person) => person.id !== personId)
  //   );
  // }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              people={people}
              setPeople={setPeople}
              // deletePerson={deletePerson}
              newPersonModalActive={newPersonModalActive}
              setPersonModalActive={setPersonModalActive}
            />
          }
        />
        <Route
          path=":teamMemberId"
          element={
            <Staff
              people={people}
              setPeople={setPeople}
              notesList={notesList}
              setNotesList={setNotesList}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
