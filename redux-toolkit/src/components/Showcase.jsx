import Movie from "./Movie"

export default function Showcase({movies, free}) {
    return (
        <div className='inline-flex flex-wrap gap-4 md:max-w-[70%] max-w-[90%] '>
            {movies.map(movie => <Movie key={movie.id} movie={movie} free={free} />)}
        </div>
    )
}