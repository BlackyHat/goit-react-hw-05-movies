import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)(({ theme }) => ({
  borderRadius: '8px',
  textDecoration: 'none',
  boxShadow: 'none',
  textTransform: 'uppercase',
  width: '120px',
  textAlign: 'center',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
  borderColor: teal[700],
  fontWeight: 700,
  letterSpacing: 1.5,
  '&:active': {
    backgroundColor: teal[700],
  },
  '&.active': {
    backgroundColor: teal[900],
    borerColor: teal[700],
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem teal[900]',
  },
}));
