import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarItem from "./component/navigations/navbar/NavbarItem";
import FormItem from "./component/layout/Form";
import TableItem from "./component/layout/Table";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/Register";
import { Row } from "reactstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={(props) => (
            <Fragment>
              <NavbarItem />
              <Row xs="12">
              <FormItem />
              <TableItem />
              </Row>
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
};

export default App;
