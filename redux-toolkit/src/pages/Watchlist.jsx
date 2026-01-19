import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import { useEffect } from "react";
import Showcase from "../components/Showcase";



export default function Watchlist(){
    const your_movies = useSelector(state => state.watchlist.watchlist);


    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(your_movies));
    }, [your_movies])

    return(
        <div style={{textAlign: "center"}}>
            <h1 className="text-3xl font-bold mb-4">{!your_movies.length?"Nothing to see":"Your Watchlist"}</h1>
            <Showcase movies={your_movies} free={false} />
        </div>
    )
}