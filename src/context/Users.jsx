import { createContext, useState } from "react";
import UserData from "../data/users";
const UsersContext = createContext(UserData);
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(UserData);
  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};
export { UsersProvider };
export default UsersContext;
