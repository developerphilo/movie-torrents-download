import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Popup( { selected, closePopup }) {
    return (
        <div className="popup">
            <div className="intro">
                        <h1>{selected.title}</h1>
                        <h3>Genres: {selected.genres}</h3>
                        <h3>Rat : {""} {selected.rating} {""}<FontAwesomeIcon icon={faStar} /></h3>
                       
                        <div className="plot" >
                                <img src={selected.medium_cover_image} alt=""></img>
                                <p >{selected.description_intro}</p>
                        </div>
                        <div className="downlo">
                                       <div>
                                                <p>Size: {selected.torrents[0].size}</p>
                                                <p>Quality : {selected.torrents[0].quality}</p>
                                                <p>Runtime: {selected.runtime} Min</p>
                                       </div>
                                       <div>
                                        <button onClick={closePopup} >Close</button>
                                       </div>
                        </div>
                        

                        
            </div>
        </div>
    )
}

export default Popup
