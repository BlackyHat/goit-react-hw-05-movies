import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { SwitchButton } from 'components/SwitchButton/SwitchButton';
import { NavMenu } from 'components/NavMenu/NavMenu';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <NavMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Most Popular New Movies Last Mounth
          </Typography>
          <SwitchButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
