import mixFilms from './mix-films.jpg';
import { ImgPoster } from './GalleryPoster.styled';

export const GalleryPoster = () => {
  return (
    <>
      <ImgPoster src={mixFilms} alt="mix films" width="840" />
    </>
  );
};
