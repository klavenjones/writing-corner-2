import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export const PostItem = () => {
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
              COVID-19 and Infermedica
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
          <p className="post-preview__excerpt">
            COVID-19 is more than just a hot topic today. It is a global
            emergency requiring the entire world community’s focus and
            commitment to contain and eventually lessen its impact on public...
          </p>
        </section>
        <footer className="post-preview__meta">
          <a href="/about-me">Curtis Jones</a> on{" "}
          <time datetime="2020-03-10">Mar. 10, 2020</time>
        </footer>
      </article>
    </Fragment>
  );
};
