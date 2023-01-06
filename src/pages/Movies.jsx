import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieGallery from '../components/MovieGallery/MovieGallery';
import { getMovieByQuery } from 'components/services/api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  const onChangeQuery = query => {
    setSearchParams(query !== '' ? { filter: query } : {});
  };

  useEffect(() => {
    if (!filter) {
      return;
    }
    getMovieByQuery({ query: filter, page: 1 }).then(({ results }) =>
      setMovies(results)
    );
  }, [filter]);

  return (
    <main>
      <h1 className="visually-hidden">Movies search</h1>
      <SearchBox onSubmit={onChangeQuery} />
      <MovieGallery movies={movies} />
    </main>
  );
};

export default Movies;
