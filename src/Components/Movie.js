import React from 'react'

function Movie( { movie, id, openPopup}) {
    return (
        <div className="movie" onClick={()=> openPopup(id)}  >
                <img src={movie.medium_cover_image} alt=""></img>
             <h2>{movie.title}</h2>
        </div>
    )
}

export default Movie;
