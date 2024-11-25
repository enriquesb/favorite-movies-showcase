import { useManageFavoriteMovies } from '../hooks/useManageFavoriteMovies.jsx';

export function MoviePoster({ movie }) {

    const { removeFromFavorites } = useManageFavoriteMovies();

    return (
        <div className='movie-poster'>
            <img src={movie.poster} alt={`${movie.title} Poster`} />
            <button onClick={() => removeFromFavorites(movie)}>Delete</button>
        </div>
    )
}