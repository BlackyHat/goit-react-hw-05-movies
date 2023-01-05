import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul movies={movies}>
        {movies?.map(({ id, title, name }) => (
          <li key={id}>
            <NavLink>{title || name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

export const getMovies = async params => {
  const { data } = await movieApi.get('/trending/all/day', {
    params: {
      api_key: '174cdfa11f0283dda9735618fe57e2fe',
      ...params,
    },
  });
  return data;
};
