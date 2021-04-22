import React from "react"
import "./styles.css"

const Card = ({movie:{Poster,Year,Type,Title}})=>{

    return (
    <div className="card">
        <div className= "image">
            <img src={Poster}/>
        </div>
        <div className="info">
            <div className="title">{Title}</div>
            <div>{Year}</div>
            <div>{Type}</div>

        </div>
    </div>)
}

export default Card