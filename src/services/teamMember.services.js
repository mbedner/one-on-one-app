import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const teamMemberCollectionRef = collection(db, "team-members");

class TeamMemberDataService {
  addTeamMember = (newTeamMember) => {
    return addDoc(teamMemberCollectionRef, newTeamMember);
  };

  updateTeamMember = (id, updatedTeamMember) => {
    const teamMemberDoc = doc(db, "team-members", id);
    return updateDoc(teamMemberDoc, updatedTeamMember);
  };

  deleteTeamMember = (id) => {
    const teamMemberDoc = doc(db, "team-members", id);
    return deleteDoc(teamMemberDoc);
  };

  getAllTeamMembers = () => {
    return getDocs(teamMemberCollectionRef);
  };

  getTeamMember = (id) => {
    const teamMemberDoc = doc(db, "team-members", id);
    return getDoc(teamMemberDoc);
  };
}

export default new TeamMemberDataService();
