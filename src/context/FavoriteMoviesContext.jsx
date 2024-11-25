import { createContext, useContext, useState } from "react";

const FavoriteMoviesContext = createContext();

export function FavoriteMoviesProvider({ children }) {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    return (
        <FavoriteMoviesContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
            {children}
        </FavoriteMoviesContext.Provider>

    )
}

export function useFavoriteMovies() {
    return useContext(FavoriteMoviesContext)
}

