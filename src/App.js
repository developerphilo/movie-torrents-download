import React , { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';

const App= ()=>{


                              const[ state , setState]=useState({
                                      title:"rabbit",
                                      results:[],
                                      selected:[]

                                });
                              
                                const Search=(e)=>{
                                  if( e.key === "Enter"){
                                    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${state.title}`)
                                    .then(response=>response.json())
                                    .then(data=>{
                                      let dat = data.data.movies;
                                      setState( prevState=>{
                                        return{ ...prevState, results:dat}
                                      })
                                    })

                                  }
                                };

                              const handleInput=(e)=>{
                                let typed= e.target.value;
                                setState(prevState=>{
                                  return{...prevState, title:typed}
                                })
                              };
                              console.log(state.results);
                return (

                        <div className="App">
                          <Navbar handleInput={ handleInput } Search={ Search }  />
                          <Movies movies={state.results} />

                        </div>
                );
              
            }

export default App;
