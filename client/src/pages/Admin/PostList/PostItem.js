import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export const PostItem = ({ posts: { id, title, content } }) => {
  const [hover, setHover] = useState(false);
  return (
    <Fragment>
      <article className="post-preview">
        <header className="post-preview__header">
          <h2 className="post-preview__title">
            <Link
              className="post-preview__link"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              to="/post"
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
          <p className="post-preview__excerpt">{content}</p>
        </section>
        <footer className="post-preview__meta post-preview__admin">
          <div className="post-preview__admin-author">
            <a href="/about-me">Curtis Jones</a> on{" "}
            <time datetime="2020-03-10">Mar. 10, 2020</time>
          </div>
          <div className="post-preview__admin-edit">
            <Link
              to={{
                pathname: "/edit-post",
                state: {
                  id: id,
                  title: title,
                  content: content
                }
              }}
            >
              Edit
            </Link>
            <a href="/about-me">Delete</a>
            <Link to="/about-me">View</Link>
          </div>
        </footer>
      </article>
    </Fragment>
  );
};
