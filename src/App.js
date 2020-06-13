import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/Register";
import Home from "./component/pages/land/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        </Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
