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
    watchlist: [],
    newReleases: []
}

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState,
    reducers: {
        refreshPopulars: (state, action) => {
            state.newReleases = action.payload
        },
        addMovie:  (state, actions) =>{
            if (!state.watchlist.some(item => item.id == actions.payload.id)){
                state.watchlist.push(actions.payload)
            }
        },
        delMovie: (state, actions) => {
            state.watchlist = state.watchlist.filter(movie => movie.id !== actions.payload)
        }
    }
})

export const {refreshPopulars, addMovie, delMovie} = watchlistSlice.actions;
export default watchlistSlice.reducer;

