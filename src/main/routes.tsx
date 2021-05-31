import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../about/about";
import Todo from "../todo/todo";
import NotFound from "../not-found/not-found";

const Routes = (props: any) => {
  return (
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route exact path="/todos" component={Todo} />
      <Route exact path="/about" component={About} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
