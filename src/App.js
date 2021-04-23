import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from "./container/auth/PrivateRoute";
import Login from "./container/auth/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute />
        <Route path="/auth" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
