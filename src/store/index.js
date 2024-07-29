import { createStore } from "vuex";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

const store = createStore({
  state: {
    newUser: {
      name: "",
      email: "",
    },
    users: [],
  },
  getters: {},
  mutations: {
    setNewUser(state, user) {
      state.newUser = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    addUserToState(state, user) {
      state.users.push(user);
    },
    removeUserFromState(state, userId) {
      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
  actions: {
    async addUser({ commit, state }) {
      if (state.newUser.name.trim() === "" || state.newUser.email.trim() === "")
        return;
      const db = getFirestore(firebaseApp);
      const userRef = collection(db, "users");
      const docRef = await addDoc(userRef, {
        name: state.newUser.name,
        email: state.newUser.email,
      });
      commit("addUserToState", {
        id: docRef.id,
        name: state.newUser.name,
        email: state.newUser.email,
      });
      commit("setNewUser", { name: "", email: "" });
    },
    async deleteUser({ commit }, userId) {
      const db = getFirestore(firebaseApp);
      const userRef = doc(db, "users", userId);
      await deleteDoc(userRef);
      commit("removeUserFromState", userId);
    },
    fetchUsers({ commit }) {
      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, "users");
      onSnapshot(usersRef, (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("setUsers", users);
      });
    },
  },
  modules: {},
});
store.dispatch('fetchUsers');
export default store