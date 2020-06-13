import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarItem from "./component/navigations/navbar/NavbarItem";
import FormItem from "./component/layout/Form";
import TableItem from "./component/layout/Table";
import SignIn from "./component/pages/signIn/SignIn";
import Register from "./component/pages/register/Register";

const App=()=> {
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

              <FormItem />
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
