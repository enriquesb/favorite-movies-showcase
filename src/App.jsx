import './App.css'
import { useState } from 'react'
import { PosterGrid } from './components/PosterGrid';
import { MovieSearch } from './components/MovieSearch'
import { FavoriteMovieProvider } from './context/FavoriteMovieContext.jsx';

function App() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <FavoriteMovieProvider>
      <h1>Favorite Movies</h1>
      <PosterGrid
        setShowSearch={setShowSearch}
      />
      {showSearch && <MovieSearch
        setShowSearch={setShowSearch} />}

    </FavoriteMovieProvider>

  )
}

export default App
