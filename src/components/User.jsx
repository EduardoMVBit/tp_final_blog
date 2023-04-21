import { useContext, useRef, useState } from "react";
import UserContext from "../context/User";
import UserStyle from "../styles/User.module.css";
const User = function () {
  const [modal, setModal] = useState(false);
  const { user, login, logout } = useContext(UserContext);
  const formLogin = useRef(null);
  return (
    <>
      {user ? (
        <form
          onSubmit={function (e) {
            e.preventDefault();
            logout();
            if (formLogin && formLogin.current) {
              formLogin.current.reset();
            }
            setModal(false);
          }}
          className={`${UserStyle.logout}`}
        >
          <button>logout</button>
        </form>
      ) : (
        <>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              setModal(true);
            }}
            className={`${UserStyle.activate}`}
          >
            <button>login</button>
          </form>
          {modal ? (
            <form
              onSubmit={function (e) {
                e.preventDefault();
                const { elements } = e.target;
                const { username, password } = elements;
                login(username.value, password.value);
              }}
              className={`${UserStyle.login}`}
              ref={formLogin}
            >
              <button
                type="button"
                onClick={function (e) {
                  e.preventDefault();
                  formLogin.current.reset();
                  setModal(false);
                }}
              >
                exit
              </button>
              <fieldset>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
              </fieldset>
              <fieldset>
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password" />
              </fieldset>
              <button type="submit">Access</button>
            </form>
          ) : null}
        </>
      )}
    </>
  );
};

export default User;
