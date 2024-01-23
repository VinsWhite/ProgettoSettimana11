import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/album/:id' element={<AlbumPage />}/>
        <Route path='/artist/:id' element={<ArtistPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
