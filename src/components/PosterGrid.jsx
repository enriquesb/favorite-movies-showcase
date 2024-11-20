import { MoviePoster } from './MoviePoster.jsx'
import { EmptySlot } from './EmptySlot.jsx'

export function PosterGrid({ favoriteMovies, setFavoriteMovies, setShowSearch }) {
    const moviePosters = favoriteMovies.map(movie =>
        <MoviePoster
            key={movie.imdbID}
            movie={movie}
            favoriteMovies={favoriteMovies}
            setFavoriteMovies={setFavoriteMovies} />
    )

    const emptySlotsNeeded = Math.max(4 - moviePosters.length, 0);

    const emptySlots = Array(emptySlotsNeeded)
        .fill(null)
        .map((_, index) => <EmptySlot key={`key-${index}`} setShowSearch={setShowSearch} />)

    return (<div className='poster-grid'>
        {moviePosters}
        {emptySlots}
    </div>)
}