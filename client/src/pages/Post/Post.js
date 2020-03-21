import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostFooter } from "../../_components";

export const Post = () => {
  const location = useLocation();
  const [content, setContent] = useState(location.state.content);
  const [title, setTitle] = useState(location.state.title);
  return (
    <Fragment>
      <main className="content">
        <article className="post">
          <header className="post__header">
            <h1 className="post__title">{title}</h1>
            <section className="post__meta">
              <span className="post__author-date">{title}</span>
            </section>
          </header>
          <section className="post__content">
            <p>{content}</p>
            <p>{content}</p>
          </section>
          <PostFooter />
        </article>
      </main>
    </Fragment>
  );
};
