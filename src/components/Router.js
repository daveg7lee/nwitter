import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Profile} />
          </>
        ) : (
          <Route exact path="/" component={Auth} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
