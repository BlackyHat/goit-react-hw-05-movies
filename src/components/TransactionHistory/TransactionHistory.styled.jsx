import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 640px;
  text-align: center;
  border-collapse: collapse;
  border: 0.5px solid #dadada;

  & tbody tr:nth-of-type(even) {
    background-color: #ceccce;
  }
  & tbody td {
    border: 0.5px solid #dadada;
  }
`;
export const TransactionTableHead = styled.thead`
  background: #6fa6ba;
  font-size: 16px;
  color: white;
  height: 42px;
  border: 0.5px solid #dadada;
`;
export const TransactionTableRow = styled.tr`
  height: 42px;
  border-color: #ceccce;
`;
