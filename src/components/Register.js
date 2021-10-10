import React, { useState } from "react";
import axios from "axios";
import { InputAdornment, TextField } from "@material-ui/core";
import "./Main.css"
import Headerbar from "./Header";

function Register() {
    const [username, setUserName] = useState("");
    const [real_name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState();
    const [height, setheight] = useState();
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState('');
    const handleSubmit = (evt) => {
      evt.preventDefault();
      const data = {
        "username": username,
        "real_name": real_name,
        "surname": surname,
        "dob": dob,
        "gender": gender,
        "weight": weight,
        "height": height,
        "tel": tel,
        "email": email,
        "password": password,
        "confirmpassword": confirmpassword
      };
      // axios.post("http://127.0.0.1:8000/register", data)


      // Aj Lun

      // https://fastapi-app-diabetes.herokuapp.com



      // noneh

      // https://diabetes-fastapi.herokuapp.com/




      axios.post("https://diabetes-fastapi.herokuapp.com//register", data)
        .then((response) => {
          console.log(response);
          alert(response);
        })
        .catch((error) => {
          alert(error);
        });
    };
  return (
    
    <div className="background">
      <Headerbar />
      <div className="container home-block">
      <div className="home-card">
        <div className="text-title">
            <h5>Get Started. Please register to begin.</h5>
        </div>
        <form
          onSubmit={handleSubmit}
          >
            <TextField required label="Username" name="username" className="textfield" value={username} onChange={(e) => setUserName(e.target.value)} />
            <TextField label="Name" name="name" className="textfield" value={real_name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Surname" className="textfield" name="surname"  value={surname} onChange={event => setSurname(event.target.value)}/>
            <div style={{display: 'flex', flexDirection: 'row', paddingTop:'15px'}}>  
              <TextField style={{ width: "150px" }}
                            id="date"
                            label="Birth Date"
                            type="date"
                            format="dd/MM/yyyy"
                            className="textfield"
                            name="birthDate"
                            onChange={event => setDob(event.target.value)}
                            InputLabelProps={{
                            shrink: true,
              }}/>
                  <div name='gender'
                      onChange={event => setGender(event.target.value)}
                      style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginleft: 'auto',
                      paddingLeft: '20px'
                  }}>
                  <br></br>
                  Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br></br>
                  <br></br>
                  <input type="radio" value='male' name="gender" /> Male
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="radio" value="Female" name="gender" /> Female
                </div>              
            </div>
            <div>
            <TextField
                style={{ width: '223px' }}
                label="Weight"
                type='number'
                name='weight'
                onChange={event => setWeight(event.target.value)}
                InputProps={{ endAdornment: ( <InputAdornment position='end'>kg</InputAdornment>)}}
                className='textfield'
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField
                    style={{ width: '223px'}}
                    label='Height'
                    type='number'
                    name='height'
                    onChange={event => setheight(event.target.value)}
                    InputProps={{endAdornment: ( <InputAdornment position='end'>cm</InputAdornment> )}}
                    className='textfield'
                />
            </div>
            <TextField label='Tel' name='tel' className='textfield' onChange={event => setTel(event.target.value)} />
            <TextField label='E-mail' name='email' className='textfield' onChange={event => setEmail(event.target.value)} />
            <TextField required label='Password' name='password' type='password' className='textfield' value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <TextField required label='Confirm Password' name='confirmpasswrod' type='password' className='textfield' value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}/>
          <br />
            <br />
            <button className='button' value='Submit' type='submit'  sytle={{cursor: 'pointer'}} >Submit</button>
        </form>
          </div>
        </div>
      </div>
    );
}
  
export default Register;