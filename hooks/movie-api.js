export const useMovieApi = async () => {
  let moviesList = [];
  const MOVIE_API_URL = 'http://localhost:3000/movies';
  await fetch(MOVIE_API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(movies => {
    moviesList = movies;
  });

  return moviesList;
};
