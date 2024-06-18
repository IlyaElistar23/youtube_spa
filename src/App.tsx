import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage/LoginPage';
import SearchPage from './Components/HomePage/SearchPage';
import SearchResult from './Components/SearchResultPage/SearchResult';
import FavoritePage from './Components/FavoritesPage/FavoritesPage';
import AddFavoriteForm from './Components/ModalWindow/AddFavotireForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/favorites' element={<FavoritePage/>}/>
    </Routes>
  );
}

export default App;
