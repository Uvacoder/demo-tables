import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarItem from "./component/navigations/navbar/NavbarItem";
import Sidebar from "./component/navigations/sidebar/Sidebar";
import FormItem from "./component/layout/Form";
import TableItem from "./component/layout/Table";
import SignIn from "./component/pages/signIn/SignIn";
import Register from "./component/pages/register/Register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={(props) => (
            <Fragment>
              <NavbarItem />
              <Sidebar />
              <TableItem />
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
