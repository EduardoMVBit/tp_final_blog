import React, { useContext } from "react";
import PostsContext from "../context/Posts";
import RemoveStyle from "../styles/Remove.module.css";
const Remove = ({ id }) => {
  const { remove } = useContext(PostsContext);
  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
        remove(id);
      }}
      className={`${RemoveStyle.remove}`}
    >
      <button>delete</button>
    </form>
  );
};

export default Remove;
