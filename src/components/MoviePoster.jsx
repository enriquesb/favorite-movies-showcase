

export function MoviePoster({ movie }) {
    return (
        <div className='movie-poster'>
            <img src={movie.poster} />
        </div>
    )
}