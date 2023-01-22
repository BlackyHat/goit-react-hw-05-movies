import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovies } from 'components/services/api';
import MovieSlider from 'components/MovieSlider/MovieSlider';
import { getToday } from 'components/utils/getToday';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(({ results }) => setMovies(results));
  }, []);
  return (
    <main>
      <h1>Trending {getToday()}</h1>
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
