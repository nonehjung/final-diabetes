import React from 'react'
import {
    Redirect,
    Route,
  } from "react-router-dom";

const ProtectedRoute2 = ({ auth, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => (auth ? <Component /> : <Redirect to="/login" />)}
      />
    );
};
  
export default ProtectedRoute2;
