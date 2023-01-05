import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 360px;
  border: 1px solid #e5eaf1;
  font-family: Roboto, sans-serif;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  margin: 24px 0 24px;
  border-radius: 50%;
  width: 180px;
  heigth: 180px;
  border: 1px solid #e5eaf1;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px;
`;
export const Location = styled.p`
  margin: 0 0 32px;
  font-size: 16px;
  color: #7f8ea5;
`;
export const Tag = styled.p`
  font-size: 16px;
  color: #7f8ea5;
  margin: 0 0 16px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: center;
  background-color: #f3f6f9;
  padding-inline-start: 0px;
  & li {
    width: 120px;
    display: flex;
    padding: 16px 8px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #e5eaf1;
  }
`;

export const Label = styled.span`
  margin: 0 0 8px;
  font-size: 14px;
  color: #7f8ea5;
`;

export const Quantity = styled.span`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
`;
