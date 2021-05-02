import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from 'routers';
import PrivateRoute from 'containers/auth/PrivateRoute';
import LoginPage from './pages/auth/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map(route => {
          return (
            <PrivateRoute
              exact
              key={route.path}
              path={route.path}
              component={route.source}
              breadcrumbs={route.breadcrumbs}
            />
          );
        })}
        <Route exact path="/" render={() => <Redirect to="/auth" />} />
        {/* <Route path="**" component={PageNotFound}} /> */}
        <Route path="/auth" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
