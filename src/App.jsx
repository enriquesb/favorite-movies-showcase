import './App.css'
import { initialFavoriteMovies } from './consts'

function App() {

  const moviePosters = initialFavoriteMovies.map(movie =>
    <div key={movie.imdbID} className='movie-poster'>
      <img src={movie.poster} />
    </div>
  )

  const emptySlotsNeeded = Math.max(4 - moviePosters.length, 0);

  const emptySlots = Array(emptySlotsNeeded)
    .fill(null)
    .map((_, index) => <h3 className='empty-slot' key={`key-${index}`}> EMPTY SLOT</h3>)

  return (
    <main>
      <h1>Favorite Movies</h1>
      <div className='poster-grid'>
        {moviePosters}
        {emptySlots}
      </div>
    </main>
  )
}

export default App
