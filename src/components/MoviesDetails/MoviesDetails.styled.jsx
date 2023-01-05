import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid black;
  & img {
    width: 240px;
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
