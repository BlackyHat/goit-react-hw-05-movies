import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieCard = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  margin-top: 16px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.56),
      rgba(0, 0, 0, 0.56)
    ),
    ${({ value }) => value && `url(https://image.tmdb.org/t/p/w500/${value})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & img {
    width: 40%;
    border-radius: 8px;
    object-fit: contain;
    transition: transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
      transform: scale(1.05);
    }
  }
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    font-weight: 700;
    color: #fff;
  }

  & p {
    color: #fff;
  }
`;
export const CardInfoTitle = styled.p`
  font-weight: 700;
`;
export const AddList = styled.ul`
  /* padding-bottom: 8px; */
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row-reverse;
  & p {
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }

  & li {
    list-style: none;
  }
`;
export const BestLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: black;
  gap: 8px;
  display: flex;
  padding: 4px;
  margin-top: 16px;
  margin-left: 16px;
  background-color: #dadada;
  border-radius: 8px;
  width: 120px;
  letter-spacing: 1.5;
  font-weight: 500;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: #c2c2c2;
    background-color: #4a4a4a;

    font-weight: 500;
  }
`;
