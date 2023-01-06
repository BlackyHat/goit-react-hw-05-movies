import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmitChange = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitChange}>
      <label htmlFor="movies-search">
        <input
          type="text"
          id="movies-search"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
