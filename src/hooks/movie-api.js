import { reactive, watch } from '@vue/composition-api';
const API_KEY = 'a5549d08';

export const useMovieApi = () => {
  const state = reactive({
    search: 'Harry',
    loading: true,
    movies: []
  });

  watch(() => {
    // const MOVIE_API_URL = 'movies.json';
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movies = jsonResponse.Search;
        state.loading = false;
      });
  });

  return state;
};

export const getMovieDetails = async (imdbID) => {
  const MOVIE_API_URL = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;

  let response = await fetch(MOVIE_API_URL)
  const json = await response.json();  
  return json;
}
