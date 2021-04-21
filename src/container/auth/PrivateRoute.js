import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useSelector} from "react-redux";
import Sidebar from "../../component/Sidebar";

function PrivateRoute( { component: Component, ...rest } ) {

  let isAuthenticated = false;

  const auth = useSelector(state => state.auth);
  if ( auth.access_token !== undefined ) {
    isAuthenticated = true;
  }

  return (
    <Route
      {...rest}
      render = { props =>
        isAuthenticated ? (
          <>
            <Sidebar {...props} />
            <div className="wrapper wrapper-layout">
              <div className="wm-container">
                <div className="wm-space"></div>
                <Component {...props} />
              </div>
            </div>
          </>
        ) : (
          <Redirect to ={{pathname:'/auth', state:{from:props.location}}} />
        )
      }
    />
  );
}

export default PrivateRoute;