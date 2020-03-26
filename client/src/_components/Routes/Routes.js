import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

import { About, Posts, Post, Admin, Login } from "../../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/posts" component={Posts} />
      <Route path="/post" component={Post} />
      <Route path="/admin-login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
  );
};
