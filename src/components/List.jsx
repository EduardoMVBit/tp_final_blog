import React, { useContext } from "react";
import PostsContext from "../context/Posts";
import ListStyle from "../styles/List.module.css";
import Remove from "./Remove";
const List = function () {
  const { posts } = useContext(PostsContext);
  return (
    <ul className={`${ListStyle.list}`}>
      {posts.map(function (post) {
        return (
          <li key={`post-${post.id}`}>
            <h2>{post.title}</h2>
            <Remove id={post.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
