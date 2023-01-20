import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import { getMovieByQuery } from 'components/services/api';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GalleryPoster } from 'components/GalleryPoster/GalleryPoster';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const notify = qntt => toast(`Wow so easy! Founded ${qntt} films.`);

  const onChangeQuery = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery({ query }).then(({ results, total_results }) => {
      notify(total_results);
      setMovies(results);
    });
  }, [query]);

  return (
    <main>
      <h1>Movies search</h1>
      <SearchBox onSubmit={onChangeQuery} />
      {!movies.length && <GalleryPoster />}

      <MovieGallery movies={movies} />
      <ToastContainer theme={'dark'} position="top-center" />
    </main>
  );
};

export default Movies;
