import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/services/api';
import noPoster from './no-poster-available.png';
import { NavLink } from 'react-router-dom';
import { Card, CardInfo, CardInfoTitle, AddList } from './MoviesDetails.styled';
import { Outlet, useLocation } from 'react-router-dom';

const MoviesDetails = () => {
  const location = useLocation();
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(moviesId).then(setMovieDetails);
  }, [moviesId]);

  if (!movieDetails) {
    return;
  }
  console.log(location);
  const backLinkHref = location.state?.from ?? '/movies';

  const {
    poster_path,
    genres,
    original_title,
    overview,
    vote_average,
    release_date,
  } = movieDetails;
  return (
    <div>
      <NavLink to={backLinkHref}>Go back</NavLink>
      <Card>
        <img src={checkPoster(poster_path)} alt={original_title} />
        <CardInfo>
          <h2>{original_title + ' ' + release_date.slice(0, 4)}</h2>
          <p>User Score: {(vote_average * 10).toFixed() + ' %'}</p>
          <CardInfoTitle>Overview</CardInfoTitle>
          <p>{overview}</p>
          <CardInfoTitle>Genres</CardInfoTitle>
          <p>{genres.map(({ name }) => name).join(' ')}</p>
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
