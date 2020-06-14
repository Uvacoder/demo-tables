import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/Register";
import Home from "./component/pages/land/Home";
import ItemState from "./context/items/ItemsState";
import Routing from "./component/pages/route/Routing";

const App = () => {
  return (
    <ItemState>
    <BrowserRouter>
      <Switch>
      <Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/routing' component={Routing}/>
        <Route exact path="/" component={Home} />
        </Fragment>
      </Switch>
    </BrowserRouter>
    </ItemState>
  );
};

export default App;
