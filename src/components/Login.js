import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { TextField } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory } from "react-router-dom";
import Headerbar from "./Header";
// const AuthApi = React.createContext();
//const TokenApi = React.createContext();


const Login = () => {
    const history = useHistory();
    // const Auth = React.useContext(AuthApi);
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleMenuClick = (pageURL) => {
      history.push(pageURL)
    };

    const handleSubmit = async (evt) => {
      if (evt) {
        evt.preventDefault();
      }
      
      const data = new FormData();
      data.append('username', username);
      data.append('password', password);
      
      
      // Aj Lun
      
      // https://fastapi-app-diabetes.herokuapp.com





      // noneh

      // https://diabetes-fastapi.herokuapp.com/



      const news = async () => {
        // let res = await axios.post("http://127.0.0.1:8000/login", data)
        let res = await axios.post("https://diabetes-fastapi.herokuapp.com/login", data)
          .then((response) => {
            Cookies.set("token", response.data.access_token);
            return response;
          })
          .catch(err => console.log(err.response.data))
        return res;
      };


      let x = await news();
      if (x) {
        window.location.reload();
      }
    };
  
    return (
      <div className='background'>
        <Headerbar />
        <div className='container home-block'>
          <div className='home-card'>
        <form onSubmit={handleSubmit}>
          <div className="text-title">Diabetes Reversal Project</div>
              <br />
              <div className='textfield'>
              <div  style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                          }}>
                <AccountCircle  />               
                <TextField
                                Label='Username'
                                className='textfield'
                                style={{
                                    marginLeft: '8px',
                                }}
                                value={username}
                                onChange={(e) => setName(e.target.value)}
                            />

              </div>
              </div>
          {/* <br />
              <br /> */}
              <div className='textfield'>
              <div  style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                          }}>
               <LockIcon />            
                <TextField
                  Label='Password'
                  className='textfield'
                  style={{
                      marginLeft: '8px',
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>
              </div>
          <div style={{ textAlign: "center" }}>
            <input   className='button-secondary' type="submit" value="Login" />
          </div>
            </form>
            <div style={{ textAlign: "center" }}>
              <input className='button-secondary' type="submit" value="Register" onClick={() => handleMenuClick('/register')}   />
          </div>
            </div>
          </div>
      </div>
    );
};
  
export default Login;