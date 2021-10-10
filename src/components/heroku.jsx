import React, { useState } from 'react'
import axios from 'axios'

function Heroku() {
    const [hellodata, sethellodata] = useState([])

    axios.get('https://fastapi-app-diabetes.herokuapp.com')
        .then(res => {
            sethellodata(res.data['Hello'])
            console.log(res.data)
        })
        // .catch(err => console.log(err.res.data))
    
    return (
        <div>
            This is heroku page.
            <h1>{hellodata}</h1>
        </div>
    )
}

export default Heroku;

