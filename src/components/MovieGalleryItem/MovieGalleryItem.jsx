import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActionArea,
} from '@mui/material';
import { NewLink } from './MovieGalleryItem.styled';
import { checkPoster } from 'components/utils/checkPoster';

const MovieGalleryItem = ({ item }) => {
  const location = useLocation();
  return (
    <Grid item xs={12} md={3}>
      <CardActionArea>
        <Card sx={{ maxWidth: 345 }}>
          <NewLink to={`/movies/${item.id}`} state={{ from: location }}>
            <CardMedia
              component="img"
              height="80%"
              image={checkPoster(item.poster_path)}
              title={item.name}
              alt={item.name}
            />
            <CardContent
              sx={{
                flexShrink: 1,
                display: 'flex',
                flexDirection: 'column',
                pt: '24px',
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: '12px',
                }}
              >
                <Rating
                  name="read-only"
                  value={item.vote_average / 2}
                  readOnly
                />
                {item.vote_average.toFixed(1)}
              </Typography>
              <Typography
                variant="label"
                gutterBottom
                component="h5"
                sx={{
                  textOverflow: 'ellipsis',
                  maxWidth: 345,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.title || item.name}
              </Typography>
            </CardContent>
          </NewLink>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default MovieGalleryItem;

MovieGalleryItem.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
