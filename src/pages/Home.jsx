import { getMovies } from 'components/services/api';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieGallery movies={movies} />
    </div>
  );
};

export default Home;
