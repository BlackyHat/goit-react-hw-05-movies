// import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';

const MovieSlider = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {movies.map(movie => (
          <Box key={movie.id} component="div" sx={{ p: 1 }}>
            <MovieGalleryItem item={movie} />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;

MovieSlider.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
