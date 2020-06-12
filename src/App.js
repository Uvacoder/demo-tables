import React from "react";
import "./App.css";
import axios from "axios";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavbarItem from "./component/Navigations/NavbarItem";
import Sidebar from "./component/Navigations/Sidebar";
import Dashboard from "./component/layout/Dashboard";
import FormItem from "./component/layout/Form";
import DashItem from "./component/layout/Table";
import SignIn from "./component/layout/SignIn";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={SignIn}/>
      <Route exact path ="/login" component={FormItem}/>
      <NavbarItem />
      <Sidebar />
      <Dashboard />
      <DashItem />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
