import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const NewLink = styled(Link)(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    color: 'inherit',
  },
}));
