import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/services/api';
import {
  MovieCard,
  CardInfo,
  CardInfoTitle,
  AddList,
  BestLink,
} from './MoviesDetails.styled';
import { Rating } from '@mui/material';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { checkPoster } from 'components/utils/checkPoster';
import { hadlerScroll } from 'components/utils/handlerScroll';

const MoviesDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const backLinkHref = location.state?.from ?? '/movies';

  const [value, setValue] = useState(2);
  useEffect(() => {
    getMovieDetails(moviesId)
      .then(setMovieDetails)
      .catch(() => {
        redirectMainPage(navigate);
      });
  }, [moviesId, navigate]);

  if (!movieDetails) {
    return (
      <div>
        <BestLink to={backLinkHref}>
          <IoMdArrowRoundBack />
          Go back
        </BestLink>
        <p>Information on updating. Try another movie...</p>
        <p>You will automatically redirect to main page in 5 seconds...</p>
      </div>
    );
  }
  const {
    poster_path,
    genres,
    original_title,
    overview,
    vote_average,
    release_date,
    backdrop_path,
  } = movieDetails;
  //
  const userScoreNormalized = (vote_average * 10).toFixed();
  const genresNormalized = genres.map(({ name }) => name).join(' ');
  //
  return (
    <div>
      <BestLink to={backLinkHref}>
        <IoMdArrowRoundBack />
        Go back
      </BestLink>
      <MovieCard value={backdrop_path}>
        <img src={checkPoster(poster_path)} alt={original_title} />
        <CardInfo>
          <h2>{original_title + ' ' + release_date.slice(0, 4)}</h2>
          <p>User Score: {userScoreNormalized + ' %'}</p>
          <Rating
            name="read-only"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <CardInfoTitle>Overview</CardInfoTitle>
          <p>{overview}</p>
          <CardInfoTitle>Genres</CardInfoTitle>
          <p>{genresNormalized}</p>
        </CardInfo>
      </MovieCard>
      <AddList>
        <p>Additional information</p>
        <li>
          <BestLink
            to="cast"
            onClick={hadlerScroll}
            state={{ from: backLinkHref }}
          >
            Cast
          </BestLink>
        </li>
        <li>
          <BestLink
            to="reviews"
            onClick={hadlerScroll}
            state={{ from: backLinkHref }}
          >
            Reviews
          </BestLink>
        </li>
        <li>
          <BestLink
            to="movie-trailers"
            onClick={hadlerScroll}
            state={{ from: backLinkHref }}
          >
            Trailers
          </BestLink>
        </li>
      </AddList>
      <Outlet />
    </div>
  );
};
export default MoviesDetails;

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

function redirectMainPage(navigate) {
  return setTimeout(() => {
    return navigate('/', { replace: true });
  }, 5000);
}
