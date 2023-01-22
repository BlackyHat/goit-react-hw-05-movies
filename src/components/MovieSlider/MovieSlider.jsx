// import { Grid } from '@mui/material';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';

export default class MovieSlider extends Component {
  render() {
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
          {this.props.movies.map(movie => (
            <Box component="div" sx={{ p: 1 }}>
              <MovieGalleryItem key={movie.id} item={movie} />
            </Box>
          ))}
        </Slider>
      </div>
    );
  }
}

// const MovieGallery = ({ movies }) => {
//   return (
//     <>
//       <Grid container spacing={2} sx={{ mb: '32px' }}>
//         {movies.map(movie => (
//           <MovieGalleryItem key={movie.id} item={movie} />
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default MovieSlider;

// MovieGallery.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string,
//       title: PropTypes.string,
//     })
//   ),
// };
