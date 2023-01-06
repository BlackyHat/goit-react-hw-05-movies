import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import { getMovieByQuery } from 'components/services/api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onChangeQuery = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery({ query }).then(({ results }) => setMovies(results));
  }, [query]);

  return (
    <main>
      <h1 className="visually-hidden">Movies search</h1>
      <SearchBox onSubmit={onChangeQuery} />
      <MovieGallery movies={movies} />
    </main>
  );
};

export default Movies;
