import React from "react";
import { Switch, Route } from "react-router-dom";

import { About, Posts, Post, Admin } from "../../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/post" component={Post} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};
