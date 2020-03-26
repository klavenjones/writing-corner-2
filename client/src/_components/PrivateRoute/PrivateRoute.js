import { connect } from "react-redux";

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export { PrivateRouteContainer as PrivateRoute };
