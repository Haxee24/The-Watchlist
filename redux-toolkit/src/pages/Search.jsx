import { useSelector } from 'react-redux';
import Showcase from '../components/Showcase';

export default function Search(){
    const your_movies = useSelector(state => state.watchlist.searchResults)

    return (
        <div style={{textAlign: "center"}}>
            <h1 className="text-3xl font-bold mb-4">{!your_movies.length?"No results found":"Results"}</h1>

            <Showcase movies={your_movies} free={true} />
        </div>
    )
}