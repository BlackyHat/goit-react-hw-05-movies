import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc((100% - 4 * 16px) / 5);
  padding: 4px;
  transform: scale(1.05);
  transition: transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 350ms linear;

  gap: 4px;
  padding: 4px;
  & img {
    width: 100%;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  & p {
    margin: 0;
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: -11px 29px 63px -25px rgba(0, 0, 0, 0.75);
  }
`;
export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 16px;
  padding: 16px;
`;
