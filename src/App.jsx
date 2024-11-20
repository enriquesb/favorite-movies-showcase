import './App.css'
import { useState } from 'react'
import { PosterGrid } from './components/PosterGrid';
import { MovieSearch } from './components/MovieSearch'
import { initialFavoriteMovies } from './consts.js'

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState(initialFavoriteMovies);
  const [showSearch, setShowSearch] = useState(false)

  return (
    <main>
      <h1>Favorite Movies</h1>
      <PosterGrid
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies}
        setShowSearch={setShowSearch}
      />
      {showSearch && <MovieSearch
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies}
        setShowSearch={setShowSearch} />}

    </main>
  )
}

export default App
