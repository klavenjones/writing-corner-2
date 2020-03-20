import React, { Fragment } from "react";
import { PostItem } from "./";

const posts = [
  {
    title: "Wrting 0"
  },
  {
    title: "Wrting 1"
  },
  {
    title: "Wrting 2"
  },
  {
    title: "Wrting 3"
  }
];

export const PostList = () => {
  return (
    <Fragment>
      <div className="post-list">
        <p className="post-list__title">Current Posts</p>
        <div className="post-items">
          {posts.map((post, i) => (
            <PostItem key={i} posts={post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
