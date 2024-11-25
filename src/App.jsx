import './App.css'
import { useState } from 'react'
import { PosterGrid } from './components/PosterGrid';
import { MovieSearch } from './components/MovieSearch'
import { FavoriteMoviesProvider } from './context/FavoriteMoviesContext.jsx';

function App() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <FavoriteMoviesProvider>
      <h1>Favorite Movies</h1>
      <PosterGrid
        setShowSearch={setShowSearch}
      />
      {showSearch && <MovieSearch
        setShowSearch={setShowSearch} />}

    </FavoriteMoviesProvider>

  )
}

export default App
