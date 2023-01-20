// Imports
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
// import { Container } from './SharedLayout.styled';
import { Container } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        {/* <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header> */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
