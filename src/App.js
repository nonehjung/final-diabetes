import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home'
import Cookies from "js-cookie";
import ProtectedLogin from "./components/ProtectedLogin";
import ProtectedRoute2 from "./components/ProtectedRoute2";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Diabetes2 from "./components/diabetes2";
import Food from "./components/Food";
import Exercise from "./components/Exercise";
import User from "./components/User";
import BloodSugar  from "./components/BloodSugar";
import Heroku from "./components/heroku";

export const AuthApi = React.createContext();
export const TokenApi = React.createContext();

function App() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");

  const readCookie = () => {
    let token = Cookies.get("token");
    if (token) {
      setAuth(true);
      setToken(token);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, []);

  return (
    <>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <TokenApi.Provider value={{ token, setToken }}>
          <Router>
            <div>
              <Routes />
            </div>
          </Router>
        </TokenApi.Provider>
      </AuthApi.Provider>
    </>
  );
}


const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/diabetes2">
        <Diabetes2 />
      </Route>
      <Route exact path="/food">
        <Food />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/exercise">
        <Exercise />
      </Route>
      <Route exact path="/heroku">
        <Heroku />
      </Route>
      <ProtectedRoute
        exact path="/user"
        auth={Auth.auth}
        component={User}
      ></ProtectedRoute>
      <ProtectedRoute
        exact path="/bloodsugar"
        auth={Auth.auth}
        component={BloodSugar}
      ></ProtectedRoute>
      <ProtectedLogin
        exact path="/login"    
        auth={Auth.auth}  
        component={Login}
      ></ProtectedLogin>
    </Switch>
  );
};

// const Home = () => {
//   const [data, setData] = useState("");
//   const Auth = React.useContext(AuthApi);
//   const Token = React.useContext(TokenApi);
//   const handleonclick = () => {
//     Auth.setAuth(false);
//     Cookies.remove("token");
//   };
//   let toke = Token.token;
//   const headers = {
//     Authorization: `Bearer ${toke}`,
//   };
//   const getdata = async () => {
//     let res = await axios
//       .get("http://127.0.0.1:8000/", { headers })
//       .then((response) => {
//         return response.data.data;
//       });
//     return res;
//   };

//   React.useEffect(async () => {
//     let x = await getdata();
//     setData(x);
//     console.log(x);
//   }, []);
//   return (
//     <>
//       <h2>Home</h2>
//       <button onClick={handleonclick}>Logout</button>
//       <h1>{data}</h1>
//     </>
//   );
// };

// function User() {
//   const [data, setData] = useState("");
//   const Auth = React.useContext(AuthApi);
//   console.log("TokenApi: ", TokenApi)
//   const Token = React.useContext(TokenApi);

//   const handleonclick = () => {
//       Auth.setAuth(false);
//       Cookies.remove("token");
//   };
//   console.log("token data", Token)
//   let toke = Token.token;
//   const headers = {
//       Authorization: `Bearer ${toke}`,
//   };
//   const getdata = async () => {
//       let res = await axios
//       .get("http://127.0.0.1:8000/", { headers })
//       .then((response) => {
//           return response.data.data;
//       });
//       return res;
//   };

//   React.useEffect(async () => {
//       let x = await getdata();
//       setData(x);
//       console.log(x);
//   }, []);

//   return (
//       <div>
//           <IconButton
//               size="large"
//               color="inherit"
//               // style={{marginRight: '40px'}}
//               // onClick={() => handleMenuClick('/register')}
//               onClick={handleonclick}
//           >
//                       <Typography variant="h6"> Sign Up </Typography>
//           </IconButton>      
//           <h1>This is User page</h1>
//       </div>
//   )
// }


export default App;