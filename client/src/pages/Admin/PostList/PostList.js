import React, { Fragment } from "react";
import { PostItem } from "./";

const posts = [
  {
    id: 1,
    title: "We testing our software",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
  },
  {
    id: 2,
    title: "Im coding",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
  },
  {
    id: 3,
    title: "We still testing our software",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap "
  }
];

export const PostList = () => {
  return (
    <Fragment>
      <div className="post-list">
        <p className="post-list__title">Blog Posts</p>
        <div className="post-items">
          {posts.map((post, i) => (
            <PostItem key={i} posts={post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
