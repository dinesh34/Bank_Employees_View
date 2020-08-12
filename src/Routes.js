import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Employees from "./components/Employees.js"

export default function Routes() {
  return (
      <div>
        <Switch>
             <Route exact path="/login" component={Login}>
                <Login />
             </Route>
             <Route path="/employees"component={Employees} >
                <Employees />
             </Route>
        </Switch>
      </div>
   
  );
}