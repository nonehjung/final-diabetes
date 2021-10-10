import React from 'react'

function Usershow(props) {
    return (
        <div>
            <p>
                <span style={{fontWeight:'bold, underline'}}>
                    {props.user.username} :
                </span> 

            </p>
        </div>
    )
}

export default Usershow
