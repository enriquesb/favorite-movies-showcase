import './App.css'
import { useState } from 'react'
import { PosterGrid } from './components/PosterGrid';
import { MovieSearch } from './components/MovieSearch'
import { FavoriteMoviesProvider } from './context/FavoriteMoviesContext.jsx';

function App() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <FavoriteMoviesProvider>
      <main>
        <h1>Favorite Movies Showcase</h1>
        <PosterGrid
          setShowSearch={setShowSearch}
        />
        {showSearch && <MovieSearch
          setShowSearch={setShowSearch} />}
      </main>

    </FavoriteMoviesProvider>

  )
}

export default App
