import Home from 'components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

const Movies = () => {
  return <div>Movies Page</div>;
};

const Reviews = () => {
  return <div>Reviews Page</div>;
};

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        <Route path="*" element={<Reviews />} />
      </Routes>
    </Container>
  );
};
