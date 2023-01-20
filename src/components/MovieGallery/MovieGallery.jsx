import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const MovieGallery = ({ movies }) => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: '32px' }}>
        {movies.map(movie => (
          <MovieGalleryItem key={movie.id} item={movie} />
        ))}
      </Grid>
    </>
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
