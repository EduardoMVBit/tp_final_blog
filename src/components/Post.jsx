import React, { useContext } from "react";
import PostContext from "../context/Post";
import PostStyle from "../styles/Post.module.css";
const Post = () => {
  const { post, setPost } = useContext(PostContext);
  return (
    <>
      {post == null ? null : (
        <article className={PostStyle.article}>
          <form
            onClick={function (e) {
              e.preventDefault();
              setPost(null);
            }}
            className={PostStyle.close}
          >
            <button>close</button>
          </form>
          <header className={PostStyle.header}>
            <h2>{post.title}</h2>
            <ul>
              {post.tags.map(function (tag, index) {
                return <li key={`tag-${post.id}-${index}`}>{tag}</li>;
              })}
            </ul>
          </header>
          <picture>
            <img
              src={post.image}
              alt={`image-post-${String(post.title)
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            />
          </picture>
          <p>{post.content}</p>
        </article>
      )}
    </>
  );
};

export default Post;
