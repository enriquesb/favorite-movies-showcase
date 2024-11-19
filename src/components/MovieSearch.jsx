import { useState } from 'react'
import { fetchMovies } from '../services/movies.js'

export function MovieSearch({ favoriteMovies, setFavoriteMovies }) {

    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    async function handleSearch() {
        if (query.trim() === "") {
            setSearchResult([]);
            return;
        }

        try {
            const movies = await fetchMovies(query);
            setSearchResult(movies || []);
        } catch (error) {
            console.error("Error", error);
            setSearchResult([]);
        }
    }

    function addToFavorite(movieData) {
        setFavoriteMovies([...favoriteMovies, {
            imdbID: movieData.imdbID,
            title: movieData.title,
            poster: movieData.poster
        }])
    }

    const movieOptions = searchResult.map(option => (
        <li key={option.imdbID} onClick={() => handleOptionClick(option)}>{option.title} ({option.year})</li>
    ))

    function handleOptionClick(option) {
        addToFavorite(option);
        setQuery("");
        setSearchResult([]);
    }


    return (
        <div className="movie-search">
            <p>Movie Search</p>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search Movies</button>
            {searchResult && <ul>{movieOptions}</ul>}
        </div>
    )
}