import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies?.map(({ id, title, name }) => (
        <li key={id} className="movie__item">
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </NavLink>
        </li>
      ))}
    </ul>
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
