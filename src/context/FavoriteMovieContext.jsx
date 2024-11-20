import { createContext, useContext, useState } from "react";

const FavoriteMovieContext = createContext();

export function FavoriteMovieProvider({ children }) {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    return (
        <FavoriteMovieContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
            {children}
        </FavoriteMovieContext.Provider>

    )
}

export function useFavoriteMovies() {
    return useContext(FavoriteMovieContext)
}

