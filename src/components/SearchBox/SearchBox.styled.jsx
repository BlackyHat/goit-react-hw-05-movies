import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  borderRadius: '8px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    backgroundColor: theme.palette.mode === 'light' ? '#dfdfdf' : '#2b2b2b',
  },
}));

export const DelButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '32px',
  widht: '32px',
  position: 'absolute',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'red',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '0',
  cursor: 'pointer',

  alignItems: 'center',
  justifyContent: 'center',
}));
export const SubmitButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: 'absolute',
  height: '24px',
  widht: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#fff',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '0',
  cursor: 'pointer',

  alignItems: 'center',
  justifyContent: 'center',
}));
