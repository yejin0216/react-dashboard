import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Sidebar from "../../component/sidebar/Sidebar";
import ContentWrapper from "../../component/layout/ContentWrapper";
import store from 'store';

function PrivateRoute( { component: Component, ...rest } ) {

  let isAuthenticated = store.getState().auth.access_token ? true : false;

  return (
    <Route
      {...rest}
      render = { props =>
        isAuthenticated ? (
          <>
            <Sidebar {...props} />
            <ContentWrapper>
              <Component {...props} />
            </ContentWrapper>
          </>
        ) : (
          <Redirect to ={{pathname:'/auth', state:{from:props.location}}} />
        )
      }
    />
  );
}

export default PrivateRoute;