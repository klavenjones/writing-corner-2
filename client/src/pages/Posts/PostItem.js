import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export const PostItem = ({ posts: { id, content, title } }) => {
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
              to={{
                pathname: `/post`,
                state: {
                  id: id,
                  title: title,
                  content: content
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
          <p className="post-preview__excerpt">{content}</p>
        </section>
        <footer className="post-preview__meta">
          <a href="/about-me">Curtis Jones</a> on{" "}
          <time dateTime="2020-03-10">Mar. 10, 2020</time>
        </footer>
      </article>
    </Fragment>
  );
};
