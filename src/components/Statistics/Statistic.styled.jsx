import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 8px 16px;
  color: #fff;

  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
