import React ,{ useState , useEffect} from 'react';
import Movi from './Movi';

function Upcoming( { openPopup }) {


    useEffect(()=>{
        Upcoming();

    }, [])

    const[movie,Setmovies]=useState([]);

     const Upcoming =async()=>{
         const response = await fetch(`https://yts.mx/api/v2/list_movies.json`);
         const data = await response.json();
         let movei = data.data.movies;
         Setmovies(movei);


     }
    
    return (
        <div>
            <div className="heading">
                    <h1 className="heading">POPULAR DOWNLOADS </h1>
                    <p>Download YTS YIFY movies: HD smallest size</p>
            </div>
            
                <div className="upcoming">
                    {movie.map(movi=>(
                        <Movi movi={movi}  id={movi.id} openPopup={  openPopup } />
                    ))}
                    
                </div>
        </div>
    )
}

export default Upcoming;
