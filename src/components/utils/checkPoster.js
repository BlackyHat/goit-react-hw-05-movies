import noPoster from './no-poster-available.png';

export const checkPoster = img => {
  if (img) {
    return `https://image.tmdb.org/t/p/w500/${img}`;
  }
  return noPoster;
};
