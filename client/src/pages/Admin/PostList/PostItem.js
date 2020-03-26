import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Parser } from "html-to-react";

import classnames from "classnames";

const htmlToReactParser = new Parser();

export const PostItem = ({ url, posts: { _id, title, text }, onDelete }) => {
  const [hover, setHover] = useState(false);
  let excerpt = text
    .split(" ")
    .splice(0, 40)
    .join(" ")
    .concat("...");
  const reactElement = htmlToReactParser.parse(excerpt);

  return (
    <Fragment>
      <article className="post-preview">
        <header className="post-preview__header">
          <h2 className="post-preview__title">
            <Link
              className="post-preview__link"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              to={{
                pathname: `/post`,
                state: {
                  id: _id,
                  title: title,
                  text: text
                }
              }}
            >
              {title}
              <span
                className={classnames("post-preview__chevron", {
                  "post-preview__chevron--hover": hover
                })}
              >
                <svg viewBox="0 0 7 11">
                  <use xlinkHref="#icon-6-chevron-right"></use>
                </svg>
              </span>
            </Link>
          </h2>
        </header>
        <section>
          <p className="post-preview__excerpt">{reactElement}</p>
        </section>
        <footer className="post-preview__meta post-preview__admin">
          <div className="post-preview__admin-author">
            <a href="/about-me">Curtis Jones</a> on{" "}
            <time dateTime="2020-03-10">Mar. 10, 2020</time>
          </div>
          <div className="post-preview__admin-edit">
            <Link
              to={{
                pathname: `${url}/edit-post`,
                state: {
                  id: _id,
                  title: title,
                  text: text
                }
              }}
            >
              Edit
            </Link>
            <a className="delete" onClick={() => onDelete(_id)}>
              Delete
            </a>
            <Link
              to={{
                pathname: `/post`,
                state: {
                  id: _id,
                  title: title,
                  text: text
                }
              }}
            >
              View
            </Link>
          </div>
        </footer>
      </article>
    </Fragment>
  );
};
