import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import UserContext from "./context/User";
import Admin from "./components/Admin";

const App = function () {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      {!user || user.roll != "admin" ? <Posts /> : <Admin />}
    </>
  );
};

export default App;
