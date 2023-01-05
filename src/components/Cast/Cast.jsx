import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/services/api';
import { useState, useEffect } from 'react';
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
      {movieCast.map(({ id, character, name, profile_path }) => (
        <Card key={id}>
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
