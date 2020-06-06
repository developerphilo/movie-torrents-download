import React , { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';

function Navbar({ handleInput , Search }){


                    const[state,setState] =useState({
                        feature: [],
                        genres: []
                        });                 
                        // this is the feature function      
                        useEffect(() => {
                                featuredMovie()
                        }, []);
                // fetch movies and store in the sfeatured movie state
            const featuredMovie= ()=>{
                fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=30`)
                .then(response =>response.json())
                .then(data=>{
                    let dtmovi= []
                    data.data.movies.map(row => dtmovi=row );
                    setState(prevState =>{
                        return{...prevState, feature: dtmovi}
                    });               
                })
            }
    const title = state.feature.title;
    const rating = state.feature.rating;
    const year = state.feature.year;
    const para = state.feature.genres;

    return (
        <div className="nav">
            <div className="opag">
                                        {/* this is the nav bar section */}
                                        <div className="nav-bar">
                        <div><h3>MOVIE UI</h3></div>
                                    <div>
                                        <ul>
                                            <li><a>SUPPORT</a></li>
                                            <li><a>ABOUT US</a></li>
                                            <li><a>FAQ</a></li>
                                        </ul>
                                    </div>
                        </div>
                        {/* this is the end of the nav bar section */}

                    {/* this is the feeatured movie section */}
                    <div className="featured">
                        <h2>Movie Of The Week </h2>
                        <h3>{ title }</h3>
                        <p>{ para }</p>
                        <h4>Rating : { rating } <span><FontAwesomeIcon icon={faStar} /></span></h4>
                        <h4>Year : {year}</h4>

                    </div>

                    <div className="input">
                    <input 
                        type="text" 
                        placeholder="Search For Movies"
                        onChange={ handleInput }
                        onKeyPress={ Search}
                        
                    />
                        
                    </div>
            </div>
    
        </div>
      
    );
}
export default Navbar;
