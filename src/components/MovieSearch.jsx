import { useState } from 'react'
import { fetchMovies } from '../services/movies.js'
import { useManageFavoriteMovies } from '../hooks/useManageFavoriteMovies.jsx';

export function MovieSearch({ setShowSearch }) {
    const { addToFavorites } = useManageFavoriteMovies();
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

    const movieOptions = searchResult.map(option => (
        <li key={option.imdbID} onClick={() => handleOptionClick(option)}>{option.title} ({option.year})</li>
    ))

    function handleOptionClick(option) {
        addToFavorites(option);
        setQuery("");
        setSearchResult([]);
        setShowSearch(false);
    }

    function handleCloseSearch() {
        setShowSearch(false);
    }


    return (
        <div className="movie-search">
            <button onClick={handleCloseSearch}>close</button>
            <p>Movie Search</p>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search Movies</button>
            {searchResult && <ul>{movieOptions}</ul>}
        </div>
    )
}