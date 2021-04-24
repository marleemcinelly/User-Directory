import React from 'react'

const User = (props) => {
    return (
        <div style={{margin: 20}}>
            <h4>{props.name} ({props.gender})</h4>
            <img src={props.image} alt={props.name} />
            <h6>email: {props.email}</h6>
            <h6>phone: {props.phone}</h6>
        </div>
    )
}

export default User