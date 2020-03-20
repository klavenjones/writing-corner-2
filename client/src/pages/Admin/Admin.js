import React, { Fragment } from "react";
import "./admin.css";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { PostList } from "./PostList";

export const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <Fragment>
      <main className="content">
        <aside className="dash-nav">
          <NavLink
            exact
            to={`${url}/blog-post`}
            title="Posts"
            activeStyle={{
              fontWeight: "bold"
            }}
            className="dash-nav__links"
          >
            <i className="far fa-newspaper"></i>
            <p>Blog Posts</p>
          </NavLink>
          <NavLink
            exact
            to={`${url}/new-post`}
            title="Posts"
            activeStyle={{
              fontWeight: "bold"
            }}
            className="dash-nav__links"
          >
            <i className="fas fa-plus"></i>
            <p>Add New Post</p>
          </NavLink>
        </aside>
        <section className="admin">
          <div className="container">
            <div className="admin-section">
              <div className="admin-description">
                <h3>Welcome Curtis, It's time to create!</h3>
                <p>Create new content here, and save when you are done.</p>
              </div>
              <div className="admin-section__form">
                <Switch>
                  <Route exact path={`${path}`}>
                    <NewPostForm />
                  </Route>
                  <Route path={`${url}/new-post`}>
                    <NewPostForm />
                  </Route>
                  <Route path={`${url}/blog-post`}>
                    <PostList />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
