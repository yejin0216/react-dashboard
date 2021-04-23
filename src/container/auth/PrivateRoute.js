import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import useExpired from 'hook/useExpired'
import Sidebar from "../../component/sidebar/Sidebar";
import ContentWrapper from "../../component/layout/ContentWrapper";
import routes from "router";
import Dashboards from "../dashboard/Dashboards";

function PrivateRoute( { component: Component, ...rest } ) {

  //token 검증
  const [isExpired] = useExpired(localStorage.getItem("access_token"));

  return (
    <Route
      {...rest}
      render = { props =>
        true ? (
          <Redirect to={{pathname:'/auth', state:{from:props.location}}} />
        ) : (
          <ContentWrapper>
            <Sidebar {...props} />
            <Switch>
              {
                routes.map(route => {
                  return (
                    <Route exact path={route.path} component={route.source} />
                  )
                })
              }
            </Switch>
          </ContentWrapper>
        )
      }
    />
  );
}

export default PrivateRoute;