import React, { Fragment, useEffect } from "react";
import { PostFooter } from "../../_components";

import { connect } from "react-redux";

const About = ({ auth: { isAuthenticated }, history }) => {
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/admin");
    }
  }, [isAuthenticated]);

  return (
    <Fragment>
      <main className="content">
        <article className="post">
          <header className="post__header">
            <h1 className="post__title">About Me</h1>
            <section className="post__meta">
              <span className="post__author-date">Sillo's Writing Corner</span>
            </section>
          </header>
          <section className="post__content">
            <p>
              Hello Everyone! My name is Curtis. Originally born in Brooklyn New
              York, and was raised in the Bronx with my two brothers, At 16, we
              moved to Mississippi.
            </p>
            <p>
              Once I moved down south that's when I really got into poetry. I
              felt more comfortable with conveying my emotions in writing as
              opposed to saying them out loud. I told stories through my poetry.
              Poetry became something I enjoyed. So much so, I even published
              some poetry with my mother, in our book called A Family Affair:
              Thoughts Flowing From The Soul. Now I want to share some of my
              poetry with everyone with this blog and I hope you all enjoy some
              of my work.
            </p>
          </section>
          <PostFooter />
        </article>
      </main>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const AboutContainer = connect(mapStateToProps, null)(About);

export { AboutContainer as About };
