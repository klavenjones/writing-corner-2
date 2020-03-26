import React, { Fragment, useEffect, useState } from "react";
import "./admin.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { EditPostForm } from "./EditPostForm";
import { PostList } from "./PostList";
import { Post } from "../Post";
import { connect } from "react-redux";

import { authActions } from "../../_actions";

const Admin = ({ getUser, auth: { user, posts }, history }) => {
  let { path, url } = useRouteMatch();
  const [currentUser, setUser] = useState({});

  useEffect(() => {
    getUser();
    setUser(user);
  }, []);

  return (
    <Fragment>
      <main className="content">
        <section className="admin">
          <div className="container">
            <div className="admin-section">
              <div className="admin-description">
                <h3>Welcome {currentUser.firstname}, It's time to create!</h3>
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
                    <PostList url={url} history={history} />
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

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(authActions.loadProfile());
    }
  };
};

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export { AdminContainer as Admin };
