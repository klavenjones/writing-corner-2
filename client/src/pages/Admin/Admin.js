import React, { Fragment } from "react";
import "./admin.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { EditPostForm } from "./EditPostForm";
import { PostList } from "./PostList";
import { Post } from "../Post";

export const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <Fragment>
      <main className="content">
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
                    <PostList url={url} />
                  </Route>
                  <Route path={`${url}/edit-post`}>
                    <EditPostForm />
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
