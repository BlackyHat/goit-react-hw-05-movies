import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid black;
  & img {
    width: 30%;
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

  & .title {
    font-weight: 700;
  }
`;
export const CardInfoTitle = styled.p`
  font-weight: 700;
`;
export const AddList = styled.ul`
  padding-bottom: 24px;
  border-bottom: 1px solid black;
`;
export const BestLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  color: black;
  gap: 8px;
  display: flex;
  padding: 4px;

  &:hover {
    color: #383737;
    font-weight: 500;
  }
`;
