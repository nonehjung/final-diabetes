import React from 'react'
import {
    Redirect,
    Route,
  } from "react-router-dom";

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => (!auth ? <Component /> : <Redirect to="/bloodsugar" />)}
      />
    );
};
  
export default ProtectedLogin;
