import React from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom';

import PrivateRoute from "./container/auth/PrivateRoute";
import Login from "./container/auth/Login";
import Dashboards from "./container/dashboard/Dashboards";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Dashboards} />
        <Route path="/auth" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
