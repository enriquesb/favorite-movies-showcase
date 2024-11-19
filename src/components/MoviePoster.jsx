

export function MoviePoster({ movie, favoriteMovies, setFavoriteMovies }) {
    function handleDelete() {
        setFavoriteMovies(favoriteMovies.filter(option => option.imdbID !== movie.imdbID))
    }
    return (
        <div className='movie-poster'>
            <img src={movie.poster} alt={`${movie.title} Poster`} />
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}