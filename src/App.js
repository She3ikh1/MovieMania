import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=83b5ce7e'; // Added apiKey parameter

export const App = () => { 
  const [movies,setmovies]=useState([]);
  const[searchTerm,setSearchTerm]=useState('');

  const Searchmovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
     setmovies(data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  useEffect(() => {
    Searchmovies('spider');
  }, []);

  return (
    <div className='app'>
      <h1>MovieMania</h1>

      <div className='search'>
        <input
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e)=>{
          setSearchTerm(e.target.value )

        }}
        />
        <img
        src={SearchIcon}
        alt="Search"
        onClick={() =>Searchmovies(searchTerm)}
        />
      </div>

      
      { movies?.length > 0 ?(
      <div className='container'>
        {movies.map((movie)=>(
        <MovieCard movie={movie}/>
        ))}
      </div>
      ):(
        <dic className="empty">
        <h2>NO Moview Found</h2>
        </dic>
      )
      }


    </div>
  )
}

export default App;
