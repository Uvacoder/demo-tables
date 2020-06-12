import React, { Fragment } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarItem from "./component/Navigations/NavbarItem";
import Sidebar from "./component/Navigations/Sidebar";
import FormItem from "./component/layout/Form";
import DashItem from "./component/layout/Table";
import SignIn from "./component/layout/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route
          exact
          path="/"
          render={(props) => (
            <Fragment>
              <NavbarItem />
              <Sidebar />
              <DashItem />
            </Fragment>
          )}
        />
        <Route
          exact
          path="/form"
          render={(props) => (
            <Fragment>
              <NavbarItem />
              <Sidebar />
              <FormItem />
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
