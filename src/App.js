import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'routers';
import PrivateRoute from 'containers/auth/PrivateRoute';
import LoginPage from './pages/auth/LoginPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        {routes.map((route, index) => {
          return (
            <PrivateRoute
              key={index.toString()}
              exact
              path={route.path}
              component={route.source}
            />
          );
        })}
        <Route path='/auth' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
