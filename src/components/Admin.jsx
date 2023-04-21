import React, { useContext } from "react";
import UserContext from "../context/User";
import Create from "./Create";
import List from "./List";
import AdminStyle from "../styles/Admin.module.css";

const Admin = function () {
  const { user } = useContext(UserContext);
  return (
    <>
      {!user || user.roll != "admin" ? (
        <h2>No tienes acceso</h2>
      ) : (
        <main className={`${AdminStyle.admin}`}>
          <Create />
          <List />
        </main>
      )}
    </>
  );
};

export default Admin;
