const omdb_key = import.meta.env.VITE_omdb_key;

export async function fetchMovies(movieQuery) {
    if (movieQuery === '') return null

    const url = `http://www.omdbapi.com/?apikey=${omdb_key}&s=${movieQuery}&type=movie`

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error. Response status ${response.status}`)
        }

        const json = await response.json();

        if (json.Response === "False") return null

        const movies = json.Search;

        return movies?.map(movie => ({
            title: movie.Title,
            year: movie.Year,
            imdbID: movie.imdbID,
            poster: movie.Poster,
        }))

    } catch (error) {
        console.error('Error fetching data', error)
        throw error

    }
}