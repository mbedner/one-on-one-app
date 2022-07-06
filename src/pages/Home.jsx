import React from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import NewUserForm from "../components/NewUserForm";

const Home = ({
  people,
  setPeople,
  setPersonModalActive,
  deletePerson,
  newPersonModalActive,
}) => {
  return (
    <>
      <Table
        people={people}
        setPersonModalActive={setPersonModalActive}
        deletePerson={deletePerson}
      />
      {newPersonModalActive && (
        <Modal setPersonModalActive={setPersonModalActive}>
          <NewUserForm
            people={people}
            setPeople={setPeople}
            setPersonModalActive={setPersonModalActive}
          />
        </Modal>
      )}
    </>
  );
};

export default Home;
