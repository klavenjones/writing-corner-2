import React, { Fragment, useState } from "react";
import { Input } from "../../../_components";
import { authActions } from "../../../_actions";

import { connect } from "react-redux";

const Login = ({ signIn, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = e => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    let data = {
      email,
      password
    };
    signIn(data, history);
  };

  return (
    <Fragment>
      <main className="content">
        <section className="admin">
          <div className="container">
            <div className="admin-section">
              <div className="admin-description">
                <h3>Administrator Login</h3>
              </div>
              <div className="admin-section__form admin-section__login">
                <form onSubmit={onSubmit} className="admin-form">
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      type="text"
                      name="email"
                      value={email}
                      className="full-width"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="title">Password</label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      className="full-width"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <button className="admin-form__submit full-width">
                      Log In
                    </button>
                  </div>
                </form>
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
    signIn: (data, history) => {
      dispatch(authActions.signIn(data, history));
    }
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer as Login };
