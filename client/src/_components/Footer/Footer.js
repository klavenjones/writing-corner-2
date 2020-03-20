import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__content">
          <section className="footer__left">© Curtis Sillo</section>
          <section className="footer__right">
            <nav className="footer__nav">
              <Link className="link link--grey footer__link" to="/">
                About Me
              </Link>
              <Link className="link link--grey footer__link" to="/posts">
                Posts
              </Link>
              <a
                className="link link--grey footer__link"
                href="https://www.facebook.com/Curtissillo27"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="link link--grey footer__link"
                href="https://www.instagram.com/writingsilhouette/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="link link--grey footer__link"
                href="https://writingsilhouette.tumblr.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tumblr
              </a>
            </nav>
          </section>
        </div>
      </footer>
    </Fragment>
  );
};
