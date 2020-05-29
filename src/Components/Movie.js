import React from 'react'

function Movie( { movie }) {
    return (
        <div className="movie">
                <img src={movie.medium_cover_image} alt=""></img>
             <h2>{movie.title}</h2>
        </div>
    )
}

export default Movie;
