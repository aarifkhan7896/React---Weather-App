import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <>
        <div className="innerComponent">
            <img src={props.icon} alt="img" />
            <span>{props.temp}&#176;C</span>
            <h1>{props.name}</h1>
            <p>{props.country}</p>
        </div>
    </>
  )
}

export default Card