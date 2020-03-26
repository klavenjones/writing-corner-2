import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostFooter } from "../../_components";
import { Parser } from "html-to-react";
const htmlToReactParser = new Parser();

export const Post = () => {
  const location = useLocation();
  const [content] = useState(location.state.text);
  const [title] = useState(location.state.title);

  const reactElement = htmlToReactParser.parse(content);

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
          <section className="post__content">{reactElement}</section>
          <PostFooter />
        </article>
      </main>
    </Fragment>
  );
};
