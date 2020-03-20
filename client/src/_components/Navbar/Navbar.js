import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import classnames from "classnames";
import "./Navbar.css";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/">
              <div className="logo">
                <h6>Curtis Sillo</h6>
              </div>
            </Link>
            <ul className="primary-nav">
              <li className="primary-nav__item">
                <NavLink
                  exact
                  to={"/"}
                  title="About"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                  className="primary-nav__link"
                >
                  About Me
                </NavLink>
              </li>
              <li className="primary-nav__item">
                <NavLink
                  exact
                  to={"/posts"}
                  title="Posts"
                  activeStyle={{
                    fontWeight: "bold"
                  }}
                  className="primary-nav__link"
                >
                  Posts
                </NavLink>
              </li>
            </ul>
            <button className="mobile-menu" onClick={() => setShow(true)}>
              <span className="mobile-menu__icon"></span>
            </button>
            <div
              className={classnames("mobile-nav", {
                "mobile-nav--is-open": show
              })}
            >
              <button
                className="mobile-close-button"
                onClick={() => setShow(false)}
              ></button>
              <div className="mobile-links">
                <div className="mobile-links__column">
                  <p className="subtitle mobile-links__subtitle">
                    Writing Corner
                  </p>
                  <Link to="/" className="mobile-link">
                    About Me
                  </Link>
                  <Link to="/posts" className="mobile-link">
                    Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="gradient"></div>
    </Fragment>
  );
};
