import React from 'react'

export default function Alert(props) {
    let capitalise=(str)=>{
        return (str[0].toUpperCase()+str.slice(1));
    }
    return (
        props.alert&&<div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalise(props.alert.type)}:</strong> {props.alert.message}
    </div>
    )
}
