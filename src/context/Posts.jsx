import { createContext, useState } from "react";
import PostsData from "../data/posts";
const PostsContext = createContext(PostsData);
const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(PostsData);
  const add = function (post) {
    return setPosts([
      ...posts,
      { id: posts[posts.length - 1].id + 1, ...post },
    ]);
  };
  const remove = function (id) {
    return setPosts([...posts].filter((post) => post.id != id));
  };
  return (
    <PostsContext.Provider value={{ posts, add, remove }}>
      {children}
    </PostsContext.Provider>
  );
};
export { PostsProvider };
export default PostsContext;
