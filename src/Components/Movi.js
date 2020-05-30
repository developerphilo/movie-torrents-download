import React from 'react'

function Movi( { movi }) {
    return (
        <div className="movi">
            <img src={movi.medium_cover_image}  alt=""></img>
            <p>Rat: {movi.rating}</p>
            <h2> {movi.title}</h2>
            
        </div>
    )
}

export default Movi;
