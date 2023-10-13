import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllMovies from './pages/AllMovies';
import OneMovie from './pages/OneMovie';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='allmovies' element={<AllMovies />} />
        <Route path='one-movie' element={<OneMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
