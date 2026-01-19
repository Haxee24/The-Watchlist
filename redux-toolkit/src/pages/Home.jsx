import { useSelector, useDispatch } from 'react-redux'
import { getPopularMovies } from '../services/tmdb/moviesApi';
import { refreshPopulars } from '../features/watchlist/watchlist';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Showcase from '../components/Showcase';

export default function Home(){

    const dispatch = useDispatch();
    const movies = useSelector(state => state.watchlist.newReleases)

    useEffect( () => {
    async function loadMovies(movieloader){
        try{
        let popularMovies = await movieloader();
        popularMovies = popularMovies.map(movie => ({id: nanoid(), title: movie.title, release: movie.release_date, img: movie.poster_path, desc: movie.overview, rating: movie.adult?"R":"PG-13"}))
        dispatch(refreshPopulars(popularMovies))
        } catch (err) {
        console.log(err)
        }
    }

    loadMovies(getPopularMovies)
    }, [])

    return (
        <div className='text-center'>
            <h1 className="text-3xl font-bold mb-4">Popular Releases</h1>
            <Showcase movies={movies} free={true} />
        </div>
        
    )
}