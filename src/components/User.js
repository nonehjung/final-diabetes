import React, { useState, useEffect } from 'react';
import Headerbarauth from './Headerauth';
import axios from 'axios';
import { TokenApi } from '../App.js';
import "./user.css";

function User() {
    const [data, setData] = useState("");
    const Token = React.useContext(TokenApi)

    let toke = Token.token;
    const headers = {
        Authorization: `Bearer ${toke}`,
    };
    // https://fastapi-app-diabetes.herokuapp.com/login
    const getdata = async () => {
        let res = await axios
        // .get("http://127.0.0.1:8000/", { headers })
        .get("https://fastapi-app-diabetes.herokuapp.com/x", { headers })
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

    return (
        
        <div className="background">
            <Headerbarauth />
            <div className="container home-block">
                <div className="home-card">
            <div className="box">
                <div className="box-body">
                        <p className="item">Username </p>
                        <p className="itemdata">{data.username} </p>
                </div>
                <div className="box-body">
                        <p className="item">Name </p>
                        <p className="itemdata">{data.real_name} </p>
                </div>
                <div className="box-body">
                        <p className="item">Surname </p>
                        <p className="itemdata">{data.surname} </p>
                </div>
                <div className="box-body">
                        <p className="item">Date of Birth </p>   
                        <p className="itemdata">{data.dob} </p>
                </div>
                <div className="box-body">
                        <p className="item">Gender </p>
                        <p className="itemdata">{data.gender} </p>
                </div>
                <div className="box-body">
                        <p className="item">Height </p> 
                        <p className="itemdata">{data.height} cm </p>
                </div>
                <div className="box-body">
                        <p className="item">Weight </p>
                        <p className="itemdata">{data.weight} kg </p>
                </div>
                <div className="box-body">
                        <p className="item">E-mail </p>
                        <p className="itemdata">{data.email} </p>
                </div>
                        </div>      
                </div>    
            </div>
        </div>
    )
}

export default User
