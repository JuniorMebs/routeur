import React, { useState } from 'react';
import Header from './header';
import './App.css'

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "b57e0c63"; 
        const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data);

            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="shoppies">
         {/*Header component*/}
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;