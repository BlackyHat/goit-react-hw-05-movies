import axios from 'axios';
const API_KEY = '174cdfa11f0283dda9735618fe57e2fe';
const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

export const getMovies = async () => {
  const { data } = await movieApi.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
export const getMovieByQuery = async params => {
  const { data } = await movieApi.get('/search/movie', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      include_adult: false,
      ...params,
    },
  });

  return data;
};
export const getMovieDetails = async movie_id => {
  const { data } = await movieApi.get(`/movie/${movie_id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data || '';
};
export const getMovieCredits = async movie_id => {
  const { data } = await movieApi.get(`/movie/${movie_id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};
export const getMovieReviews = async movie_id => {
  const { data } = await movieApi.get(`/movie/${movie_id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};
