import { useSelector } from "react-redux";
import Movie from "../components/Movie";



export default function Watchlist(){
    const your_movies = useSelector(state => state.watchlist.watchlist)
    console.log(your_movies);

    return(
        <div style={{textAlign: "center"}}>
            <h1>{!your_movies.length?"Nothing to see":"YOUR WATCHLIST"}</h1>

            <div className='inline-flex flex-wrap gap-4 md:max-w-[70%] max-w-[90%] '>
                {your_movies.map(movie => <Movie id={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}