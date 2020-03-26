import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { stores } from "../../_helpers/store";
import { authActions } from "../../_actions";

import classnames from "classnames";
import "./Navbar.css";

const Navbar = ({ auth: { isAuthenticated } }) => {
  const [show, setShow] = useState(false);

  let url = "/admin";
  const authLinks = (
    <Fragment>
      <li className="primary-nav__item">
        <NavLink
          exact
          to={`${url}/blog-post`}
          title="Posts"
          activeStyle={{
            fontWeight: "500"
          }}
          className="primary-nav__link"
        >
          <p>Blog Posts</p>
        </NavLink>
      </li>
      <li className="primary-nav__item">
        <NavLink
          exact
          to={`${url}/new-post`}
          title="Posts"
          activeStyle={{
            fontWeight: "500"
          }}
          className="primary-nav__link"
        >
          <p>Add New Post</p>
        </NavLink>
      </li>
      <li className="primary-nav__item">
        <a
          onClick={() => stores.dispatch(authActions.logOut())}
          className="primary-nav__link"
        >
          Sign Out
        </a>
      </li>
    </Fragment>
  );

  const publicLinks = (
    <Fragment>
      <li className="primary-nav__item">
        <NavLink
          exact
          to={"/"}
          title="About"
          activeStyle={{
            fontWeight: "500"
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
            fontWeight: "500"
          }}
          className="primary-nav__link"
        >
          Posts
        </NavLink>
      </li>
    </Fragment>
  );

  const mobileAuthLinks = (
    <Fragment>
      <Link to={`${url}/new-post`} className="mobile-link">
        Add New Post
      </Link>
      <Link to={`${url}/blog-post`} className="mobile-link">
        Blog Posts
      </Link>
      <a className="mobile-link">Sign Out</a>
    </Fragment>
  );

  const mobilePublicLinks = (
    <Fragment>
      <Link to="/" className="mobile-link">
        About Me
      </Link>
      <Link to="/posts" className="mobile-link">
        Posts
      </Link>
    </Fragment>
  );
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
              {isAuthenticated ? authLinks : publicLinks}
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
                  {isAuthenticated ? mobileAuthLinks : mobilePublicLinks}
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

const mapStateToProps = state => ({
  auth: state.auth
});

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export { NavbarContainer as Navbar };
