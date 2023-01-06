import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieItem, Gallery } from './MovieGallery.styled';
import { FcFilmReel } from 'react-icons/fc';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <Gallery>
      {movies?.map(({ id, title, name }) => (
        <MovieItem key={id} className="movie__item">
          {' '}
          <FcFilmReel />
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </NavLink>
        </MovieItem>
      ))}
    </Gallery>
  );
};

export default MovieGallery;

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
