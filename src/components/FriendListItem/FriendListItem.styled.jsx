import styled from '@emotion/styled';

export const Status = styled.span`
  width: 16px;
  height: 16px;
  display: block;
  background: aqua;
  border-radius: 50%;
  margin-left: 16px;
  background-color: ${props => {
    return props.online ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  width: 64px;
  height: 64px;
`;
export const Name = styled.p`
  font-family: monospace;
  font-size: 24px;
  margin: 0;
  font-weight: 600;
`;
