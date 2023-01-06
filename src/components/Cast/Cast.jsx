import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/services/api';
import { Card, Gallery } from './Cast.styled';
import noPoster from './no_foto.jpg';

const Cast = () => {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getMovieCredits(moviesId).then(({ cast }) => setMovieCast(cast));
  }, [moviesId]);

  if (!movieCast) {
    return;
  }

  return (
    <Gallery>
      {movieCast.map(({ cast_id, character, name, profile_path }) => (
        <Card key={cast_id}>
          <img src={checkPoster(profile_path)} alt="name" />
          <p>{name}</p>
          <p>Character: {character}</p>
        </Card>
      ))}
    </Gallery>
  );
};

export default Cast;

function checkPoster(img) {
  if (img) {
    return `https://image.tmdb.org/t/p/w500/${img}`;
  }
  return noPoster;
}

Cast.propTypes = {
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};
