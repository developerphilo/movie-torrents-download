import React from 'react';
import Movie from './Movie';

function Movies( { movies }) {


    return (
        <div className="movies">
            {movies.map(movie =>(
                <Movie movie={movie} key={movie.id}/>
            ))}
        </div>
    )
}

export default Movies;
