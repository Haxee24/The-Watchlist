import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/watchlist/watchlist";

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
    }
})

export default store;