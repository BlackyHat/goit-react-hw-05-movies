import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/services/api';
import { ReviewItem, ReviewAuthor } from './Reviews.styled';

const Reviews = () => {
  const { moviesId } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    getMovieReviews(moviesId).then(({ results }) => setMovieReview(results));
  }, [moviesId]);

  if (!movieReview) {
    return;
  }

  return movieReview.length > 0 ? (
    <ul>
      {movieReview.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <ReviewAuthor>Author: {author.toUpperCase()}</ReviewAuthor>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ul>
  ) : (
    <p>We don't have reviews for this movie.</p>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieReview: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
