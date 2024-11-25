import { useFavoriteMovies } from '../context/FavoriteMoviesContext.jsx'


export function useManageFavoriteMovies() {
    const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();

    function addToFavorites(movie) {
        setFavoriteMovies([...favoriteMovies, {
            imdbID: movie.imdbID,
            title: movie.title,
            poster: movie.poster
        }])
    }

    function removeFromFavorites(movie) {
        setFavoriteMovies(favoriteMovies.filter(option => option.imdbID !== movie.imdbID))
    }

    return { favoriteMovies, addToFavorites, removeFromFavorites }

}




