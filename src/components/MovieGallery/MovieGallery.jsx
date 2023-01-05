import { NavLink, useLocation } from 'react-router-dom';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies?.map(({ id, title, name }) => (
        <li key={id} className="movie__item">
          <NavLink to={`${id}`} state={{ from: location }}>
            {title || name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieGallery;
