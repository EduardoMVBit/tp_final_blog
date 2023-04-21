import { createContext, useState, useContext } from "react";
import UsersContext from "./Users";
const UserContext = createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { users } = useContext(UsersContext);
  const exist = function (username) {
    return users.find((user) => user.username == username);
  };
  const login = function (username, password) {
    return exist(username) != undefined && exist(username).password == password
      ? setUser(exist(username))
      : setUser(null);
  };
  const logout = function () {
    return setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider };
export default UserContext;
