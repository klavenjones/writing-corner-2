import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import classnames from "classnames";

import { Parser } from "html-to-react";
const htmlToReactParser = new Parser();

export const PostItem = ({ posts: { id, text, title, createdAt } }) => {
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
                  id: id,
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
        <footer className="post-preview__meta">
          <Link to="/">Curtis Jones</Link> on{" "}
          {moment(createdAt).format("MMM Do YYYY")}
        </footer>
      </article>
    </Fragment>
  );
};
