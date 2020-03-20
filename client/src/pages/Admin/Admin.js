import React, { Fragment } from "react";
import "./admin.css";
import { NewPostForm } from "./NewPostForm";
import { PostList } from "./PostList";

export const Admin = () => {
  return (
    <Fragment>
      <main className="content">
        <aside className="dash-nav">
          <h3>Sidenav</h3>
        </aside>
        <section className="admin">
          <div className="container">
            <div className="admin-section">
              <div className="admin-description">
                <h3>Welcome Curtis, It's time to create!</h3>
                <p>Create new content here, and save when you are done.</p>
              </div>
              <div className="admin-section__form">
                <NewPostForm />
              </div>
            </div>
            <PostList />
          </div>
        </section>
      </main>
    </Fragment>
  );
};
