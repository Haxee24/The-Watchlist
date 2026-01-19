import './Movie.css';
import { useDispatch } from 'react-redux'
import { addMovie, delMovie } from '../features/watchlist/watchlist';
import toast, {Toaster} from 'react-hot-toast';

export default function Movie({movie, free}){
    const dispatch = useDispatch();
    function addToList(){
    toast.success(movie.title + " added to Watchlist!",   {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
)
        dispatch(addMovie(movie));
    }

    function delFromList(){
    toast.error(movie.title + " removed from Watchlist!", {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    }})
        dispatch(delMovie(movie.id));
    }

    return (
        <div className="movieCard text-center">
            <div className="img" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.img})`}}>
                <button onClick={free?addToList:delFromList} className="favButton">{free?"+":"🗑"}</button>
            </div>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p className='text-gray-500'>{movie.release?.split("-")[0]}</p>
            </div>
        </div>
    )
}