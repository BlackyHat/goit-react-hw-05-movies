// import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieTrailers } from 'components/services/api';
import { Card, Gallery } from './MovieTrailers.styled';
import { BsPlayCircle } from 'react-icons/bs';

const MovieTrailers = () => {
  const { moviesId } = useParams();
  const [movieTrailers, setMovieTrailers] = useState(null);

  useEffect(() => {
    getMovieTrailers(moviesId).then(({ results }) => setMovieTrailers(results));
  }, [moviesId]);

  if (!movieTrailers) {
    return;
  }

  return (
    <Gallery>
      {movieTrailers.map(({ id, key, name }) => (
        <Card key={id}>
          <a href={`https://youtu.be/${key}`} target="blank">
            <picture>
              <source
                srcSet={`https://i.ytimg.com/vi_webp/${key}/mqdefault.webp`}
                type="image/webp"
              />
              <img
                src={`https://i.ytimg.com/vi/${key}/mqdefault.jpg`}
                alt={name}
              />
            </picture>
            <BsPlayCircle />
            <p>{name}</p>
          </a>
        </Card>
      ))}
    </Gallery>
  );
};

export default MovieTrailers;

// id: '63c7187389f74900c7026420';
// iso_639_1: 'en';
// iso_3166_1: 'US';
// key: 'F98mUUse4JU';
// name: 'Film Composer Chanda Dancy';
// official: true;
// published_at: '2023-01-17T17:53:06.000Z';
// site: 'YouTube';
// size: 1080;
// type: 'Behind the Scenes';

// MovieTrailers.propTypes = {
//   movieCast: PropTypes.arrayOf(
//     PropTypes.shape({
//       cast_id: PropTypes.string.isRequired,
//       character: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       profile_path: PropTypes.string.isRequired,
//     })
//   ),
// };
