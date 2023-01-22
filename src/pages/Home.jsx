import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovies } from 'components/services/api';
import MovieSlider from 'components/MovieSlider/MovieSlider';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieSlider movies={movies} />
    </main>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
