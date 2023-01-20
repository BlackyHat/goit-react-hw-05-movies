import { List, ListItem } from '@mui/material';
import { Link } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        mx: '32px',
      }}
      component="nav"
      aria-label="main mailbox folders"
    >
      <ListItem disablePadding color="inherit">
        <Link to="/" variant="contained">
          Home
        </Link>
      </ListItem>
      <ListItem disablePadding color="inherit">
        <Link to="/movies">Movies</Link>
      </ListItem>
    </List>
  );
};
