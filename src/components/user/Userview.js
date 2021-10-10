import React from 'react'
import Usershow from './Usershow'

function Userview(props) {
    console.log(props.userInfo)
    return (
        <div>
            <ul>
                {props.userInfo.map(user => <Usershow user={user} />)}
            </ul>
        </div>
    )
}
export default Userview
