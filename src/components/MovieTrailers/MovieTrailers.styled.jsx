import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc((100% - 2 * 16px) / 3);
  padding: 4px;
  border-radius: 4px;

  transform: scale(1.03);
  transition: transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    box-shadow 350ms linear;

  gap: 4px;
  padding: 4px;
  & a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    position: relative;

    & svg {
      width: 40px;
      height: 40px;
      position: absolute;
      fill: currentColor;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  & img {
    width: 100%;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 4px;
    overflow: hidden;
  }

  & p {
    margin: 0;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(#090909b7, #41414157);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: -11px 29px 63px -25px rgba(0, 0, 0, 0.75);
    overflow: hidden;
  }
`;
export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 16px;
  padding: 16px;
`;
