import React from "react";
import ProtectedLogin from "./ProtectedLogin";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../App.js'

const AuthApi = React.createContext();

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <ProtectedLogin
        path="/login"    //exact path
        auth={Auth.auth}  //exact path
        component={Login}
      ></ProtectedLogin>
      <ProtectedRoute
        path="/"
        auth={Auth.auth}
        component={Home}
      ></ProtectedRoute>
    </Switch>
  );
};

export default Routes;