import styled from 'styled-components';

export const MovieItem = styled.li`
  padding: 4px;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 8px;

  & a {
    text-decoration: none;
    color: #2f2f2f;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: color 350ms linear, font-weight 350ms linear;

    &:hover {
      color: #000000;
      font-weight: 500;
    }
  }
`;
export const Gallery = styled.ul`
  padding: 4px;
`;
