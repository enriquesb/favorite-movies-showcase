import './App.css'
import { useState } from 'react'
import { PosterGrid } from './components/PosterGrid';
import { MovieSearch } from './components/MovieSearch'
import { initialFavoriteMovies } from './consts.js'

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState(initialFavoriteMovies);

  return (
    <main>
      <h1>Favorite Movies</h1>
      <PosterGrid favoriteMovies={favoriteMovies} />
      <MovieSearch
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies} />
    </main>
  )
}

export default App
