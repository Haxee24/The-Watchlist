import './Movie.css'

export default function Movie({movie}){
    return (
        <div className="movieCard">
            <div className="img" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.img})`}}>
                <button className="favButton">+</button>
            </div>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}