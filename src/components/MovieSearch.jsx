import { useState, useCallback } from 'react'
import { fetchMovies } from '../services/movies.js'
import { useManageFavoriteMovies } from '../hooks/useManageFavoriteMovies.jsx';
import debounce from 'just-debounce-it';

export function MovieSearch({ setShowSearch }) {
    const { addToFavorites } = useManageFavoriteMovies();
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    function handleChange(e) {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setSearchResult([]);
        debouncedGetMovies(newQuery);
    }

    const debouncedGetMovies = useCallback(
        debounce(async (query) => {
            if (query.trim() === "") {
                setSearchResult([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);

            try {
                const movies = await fetchMovies(query);
                setSearchResult(movies || []);
            } catch (error) {
                console.error("Error", error);
                setSearchResult([]);
            } finally {
                setIsLoading(false)
            }
        }, 400)
        , [])


    return (
        <div className="movie-search">
            <button onClick={handleCloseSearch}>close</button>
            <p>Movie Search</p>
            <input value={query} onChange={handleChange} />
            {isLoading && <p>Loading...</p>}
            {searchResult && <ul>{movieOptions}</ul>}
        </div>
    )
}