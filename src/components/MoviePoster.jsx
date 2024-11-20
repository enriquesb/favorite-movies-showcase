import { useFavoriteMovies } from '../context/FavoriteMovieContext.jsx'
export function MoviePoster({ movie }) {

    const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();

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