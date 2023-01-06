import PropTypes from 'prop-types';

import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'components/services/api';
import { Card, CardInfo, CardInfoTitle, AddList } from './MoviesDetails.styled';

import noPoster from './no-poster-available.png';

const MoviesDetails = () => {
  const location = useLocation();
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const backLinkHref = location.state?.from ?? '/movies';
  const backRef = useRef(backLinkHref);

  useEffect(() => {
    getMovieDetails(moviesId).then(setMovieDetails);
  }, [moviesId]);

  if (!movieDetails) {
    return;
  }
  const {
    poster_path,
    genres,
    original_title,
    overview,
    vote_average,
    release_date,
  } = movieDetails;
  //
  const userScoreNormalized = (vote_average * 10).toFixed();
  const genresNormalized = genres.map(({ name }) => name).join(' ');
  //
  return (
    <div>
      <NavLink to={backRef.current}>Go back</NavLink>
      <Card>
        <img src={checkPoster(poster_path)} alt={original_title} />
        <CardInfo>
          <h2>{original_title + ' ' + release_date.slice(0, 4)}</h2>
          <p>User Score: {userScoreNormalized + ' %'}</p>
          <CardInfoTitle>Overview</CardInfoTitle>
          <p>{overview}</p>
          <CardInfoTitle>Genres</CardInfoTitle>
          <p>{genresNormalized}</p>
        </CardInfo>
      </Card>
      <AddList>
        <p>Additional information</p>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </AddList>
      <Outlet />
    </div>
  );
};
export default MoviesDetails;

function checkPoster(img) {
  if (img) {
    return `https://image.tmdb.org/t/p/w500/${img}`;
  }
  return noPoster;
}

MoviesDetails.propTypes = {
  movieDetails: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
