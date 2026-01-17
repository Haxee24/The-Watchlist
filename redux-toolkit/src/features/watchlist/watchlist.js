import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getPopularMovies } from "../../services/tmdb/moviesApi";

const newMovies = getPopularMovies();

const createMovieInfo = function({title, desc, img, release, rating}){
    return {
        id: nanoid(),
        title: title,
        desc: desc,
        img: img,
        release: release,
        rating: rating,
    }
}

const initialState =  {
    watchlist: [
        {
            title: "Interstellar",
            img: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            director: "Nolan",
            cast: ["Mathew McConaughey", "Harry Styles"],
            genre: "Science-Fiction",
        }
    ],
    newReleases: []
}

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        refreshPopulars: (state, action) => {
            state.newReleases = action.payload
        },
        addMovie:  (state, actions) =>{ state.watchlist.push(actions.payload)},
        delMovie: (state, actions) => {
            state.watchlist = state.watchlist.filter(movie => movie.id !== actions.payload)
        }
    }
})

export const {refreshPopulars, addMovie, delMovie} = watchlistSlice.actions;
export default watchlistSlice.reducer;

