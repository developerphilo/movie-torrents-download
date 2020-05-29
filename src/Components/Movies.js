import React from 'react';
import Movie from './Movie';

function Movies( { movies ,  openPopup }) {


    return (
        <div className="movies">
            <div></div>
            {movies.map(movie =>(
                <Movie movie={movie} id={movie.id} openPopup={openPopup}/>
            ))}
        </div>
    )
}

export default Movies;
