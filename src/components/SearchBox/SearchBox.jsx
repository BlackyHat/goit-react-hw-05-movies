import PropTypes from 'prop-types';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import {
  Search,
  StyledInputBase,
  DelButton,
  SubmitButton,
} from './SearchBox.styled';
import { RiSearchFill } from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmitChange = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handlerClick = () => {
    setQuery('');
  };

  return (
    <Search onSubmit={onSubmitChange}>
      <StyledInputBase
        placeholder="Search some film by name..."
        inputProps={{ 'aria-label': 'movies-search' }}
        type="text"
        id="movies-search"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <IconContext.Provider value={{ size: '24px' }}>
        <SubmitButton type="submit">
          <RiSearchFill />
        </SubmitButton>
        {query.length > 0 && (
          <DelButton type="button" onClick={handlerClick}>
            <TiDelete />
          </DelButton>
        )}
      </IconContext.Provider>
    </Search>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
