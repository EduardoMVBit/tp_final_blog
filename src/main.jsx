import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import { UsersProvider } from "./context/Users";
import { UserProvider } from "./context/User";
import { PostsProvider } from "./context/Posts";
import { PostProvider } from "./context/Post";
import { SearchProvider } from "./context/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <UserProvider>
        <PostsProvider>
          <SearchProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </SearchProvider>
        </PostsProvider>
      </UserProvider>
    </UsersProvider>
  </React.StrictMode>
);
