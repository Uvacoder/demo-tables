import React from "react";
import "./App.css";
import NavbarItem from "./component/Navigations/NavbarItem";
import Sidebar from "./component/Navigations/Sidebar";
import Dashboard from "./component/layout/Dashboard";
import FormItem from "./component/layout/Form";
import DashItem from "./component/layout/Table";

function App() {
  return (
    <div>
      <NavbarItem />
      <Sidebar />
      <Dashboard />
      <FormItem />
      <DashItem />
    </div>
  );
}

export default App;
