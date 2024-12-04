import { useState, useCallback } from 'react'
import { fetchMovies } from '../services/movies.js'
import { useManageFavoriteMovies } from '../hooks/useManageFavoriteMovies.jsx';
import debounce from 'just-debounce-it';

export function MovieSearch({ setShowSearch }) {
    const { favoriteMovies, addToFavorites } = useManageFavoriteMovies();
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

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
                setHasSearched(false);
                return;
            }

            setIsLoading(true);

            try {
                const movies = await fetchMovies(query);
                const favoriteIds = favoriteMovies.map(movie => movie.imdbID);
                const filteredMovies = movies.filter(movie => !favoriteIds.includes(movie.imdbID))
                setSearchResult(filteredMovies || []);
            } catch (error) {
                console.error("Error", error);
                setSearchResult([]);
            } finally {
                setIsLoading(false);
                setHasSearched(true);
            }
        }, 400)
        , [favoriteMovies])

    const showNoResult = hasSearched && !isLoading && searchResult.length == 0 && query.trim() !== "";


    return (
        <div className='modal-overlay'>
            <div className='modal-box'>
                <div className="movie-search">
                    <button className='close-button' onClick={handleCloseSearch}>X</button>
                    <p>Pick a Favorite Movie</p>
                    <input value={query} onChange={handleChange} className='search-input' />
                    {isLoading && <p className='loading-message'>Loading...</p>}
                    {showNoResult && <p className='no-result-message'>No movies found for your query.</p>}
                </div>

                {searchResult.length > 0 && (
                    <div className='search-results'>
                        <ul className='fetched-movie-list'>{movieOptions}</ul>
                    </div>)}

            </div>
        </div>
    )
}