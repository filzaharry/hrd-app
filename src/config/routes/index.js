import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage, Login, MainApp, Register, ForgetPassword, ResetPassword } from "../../pages";
import { Notifications } from 'react-push-notification';

const Routes = () => {
  return (
    <Router>
      <Notifications />
      <Switch>
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forget-password" component={ForgetPassword} />
        <Route path="/reset-password/:token" component={ResetPassword} />
        <Route path="/" component={MainApp} />
      </Switch>
    </Router>
  );
};

export default Routes;
