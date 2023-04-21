import React, { useContext, useEffect } from "react";
import PostsContext from "../context/Posts";
import SearchContext from "../context/Search";
import PostContext from "../context/Post";
import PostsStyle from "../styles/Posts.module.css";
import Post from "./Post";
import Search from "./Search";
const Posts = () => {
  let { posts } = useContext(PostsContext);
  const { search } = useContext(SearchContext);
  const { setPost } = useContext(PostContext);

  return (
    <>
      <Search />
      <section className={`${PostsStyle.gallery}`}>
        {search == null
          ? posts.map((post) => (
              <article
                key={post.id}
                onClick={function () {
                  setPost(post);
                }}
              >
                <picture>
                  <img
                    src={post.image}
                    alt={`image-post-${String(post.title)
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  />
                </picture>
                <h2>{post.title}</h2>
              </article>
            ))
          : posts
              .filter((post) =>
                String(post.title)
                  .toLowerCase()
                  .includes(String(search).toLowerCase())
              )
              .map((post) => (
                <article
                  key={post.id}
                  onClick={function () {
                    setPost(post);
                  }}
                >
                  <picture>
                    <img
                      src={post.image}
                      alt={`image-post-${String(post.title)
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    />
                  </picture>
                  <h2>{post.title}</h2>
                </article>
              ))}
      </section>
      <Post />
    </>
  );
};

export default Posts;
