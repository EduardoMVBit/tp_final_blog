import { createContext, useState } from "react";
const PostContext = createContext();
const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);
  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};
export { PostProvider };
export default PostContext;
