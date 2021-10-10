import React, { useState, useEffect } from 'react';
import Headerbarauth from './Headerauth';
import { Line } from 'react-chartjs-2';
import NativeSelect from "@material-ui/core/NativeSelect";
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { TokenApi } from '../App.js';
import axios from 'axios';

function BloodSugar() {
    const [mealType, setMealType] = useState()
    const [time, setTime] = useState()
    const [bloodsugar, setBloodSugar] = useState()

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const [data, setData] = useState("");

    const [blooddata, setBloodData] = useState([]);
    const [meatypedata, setmealtypedata] = useState([]);
    
    const Token = React.useContext(TokenApi)

    let toke = Token.token;
    const headers = {
        Authorization: `Bearer ${toke}`,
    };

    const getdata = async () => {
        let res = await axios
        .get("http://127.0.0.1:8000/", { headers })
            .then((response) => {
            return response.data;
        });
        return res;
    };

    useEffect(async () => {
        let x = await getdata();
        setData(x);
        console.log('x: ', x);
    }, []);

    console.log('meatypedata array: ', meatypedata)
    console.log('blooddata array: ', blooddata)
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setBloodData([...blooddata, bloodsugar])
        setmealtypedata([...meatypedata, mealType])

        const bloodsugar_data = {
            "username": data.username,
            "mealtype": mealType,
            "time": time,
            "date": date,
            "bloodsugar": bloodsugar
        };
        axios.post("http://127.0.0.1:8000/uploadbloodsugar", bloodsugar_data)
        .then((response) => {
          console.log(response);
          alert(response);
        })
        .catch((error) => {
        //   alert(error);
        });

        console.log(bloodsugar_data);
    };
    
    return (
        <div className="background">
            <Headerbarauth />
            <div className="container home-block">
                <div className="home-card">
                    <div className="text-title">Blood Sugar</div>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <NativeSelect label="Meal Type" className="textfield" value={mealType} onChange={(e) => setMealType(e.target.value)}>
                            <optgroup label="Breakfast">
                                <option>NA</option>
                                <option>Before breakfast</option>
                                <option>After breakfast</option> 
                            </optgroup>
                            <optgroup label="Lunch"> 
                                <option>Before lunch</option>
                                <option>After lunch</option> 
                            </optgroup>
                            <optgroup label="Dinner"> 
                                <option>Before dinner</option>
                                <option>After dinner</option> 
                            </optgroup>
                            <optgroup label="Other"> 
                                <option>Before bedtime</option>
                            </optgroup>  
                        </NativeSelect>
                        <div >
                            <TextField
                                label="Select time" //measuring time
                                id="time" 
                                type="time"
                                className="textfield"
                                InputLabelProps={{ shrink: true }}
                                // value={time}
                                onChange={event => setTime(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Enter Your Blood Sugar Level" //sugar level
                                type="number" 
                                // onChange={getdata}
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">mg/dL</InputAdornment>
                                    ),
                                }}
                                className="textfield"
                                value={bloodsugar} onChange={(e) => setBloodSugar(e.target.value)}    
                            />
                        </div>
                        <button className='button' value='Submit' type='submit'  sytle={{cursor: 'pointer'}} >Submit</button>
                    </form>
                    <br />
                    <br />
                    <Line
                        // style = {{marginTop: '200 px'}}
                        data={{
                            labels: meatypedata,
                                // ['Pre-Breakfast', 'Post-Breakfast', 'Pre-Lunch', 'Post-Lunch',
                                // 'Pre-Dinner', 'Post-Dinner', 'Pre-Bedtime'],
                            datasets: [
                                {
                                    label: 'Blood Sugar Level',
                                    // fill: false,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0.1,
                                    data: blooddata 
                                        // [65, 59, 80, 81, 56, 122, 121]
                                }
                                ]
                        }}
                        />
                </div>
            </div>
        </div>
    )
}

export default BloodSugar
