import { useSelector, useDispatch } from 'react-redux'
import { getPopularMovies } from '../services/tmdb/moviesApi';
import { refreshPopulars } from '../features/watchlist/watchlist';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Movie from '../components/Movie';

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
        <div className='flex flex-col items-center'>
            <h1>Popular Releases</h1>
            <div className='inline-flex flex-wrap gap-4 md:max-w-[70%] max-w-[90%] '>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}