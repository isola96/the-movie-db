/** 
 * The Movie Database (TMDB) API
 * 
 * https://developers.themoviedb.org/3/getting-started/introduction
 * 
 */

import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const res = await axios.get(endpoint)
    return res.data
}

// GET - Get a list of movies playing in theatres in the US.
export const getNowPlaying = () => {
    return get(`/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US&page=1`)
}

// GET - Get a list of the current popular movies on TMDB. This list updates daily.
export const getPopular = () => {
    return get(`/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US&page=1`)
}

// GET - Get the top rated movies on TMDB.
export const getTopRated = () => {
    return get(`/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US&page=1`)
}

// GET - Get one movie 
export const getMovie = async (id) => {
	return await axios.get(`/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&region=US`)
}   