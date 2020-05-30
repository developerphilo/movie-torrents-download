import React from 'react'

function Movi( { movi , id , openPopup }) {
    return (
        <div className="movi" onClick={()=> openPopup(id)} >
            <img src={movi.medium_cover_image}  alt=""></img>
            <p>Rat: {movi.rating}</p>
            <h2> {movi.title}</h2>
            
        </div>
    )
}

export default Movi;
