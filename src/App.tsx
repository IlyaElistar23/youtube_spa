import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import SearchPage from './Components/HomePage/SearchPage';
import SearchResult from './Components/SearchResultPage/SearchResult';
import FavoritePage from './Components/FavoritesPage/FavoritesPage';
import AddFavoriteForm from './Components/ModalWindow/AddFavotireForm';

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <SearchPage /> */}
      <SearchResult />
      {/* <FavoritePage />
      <AddFavoriteForm /> */}
    </>
  );
}

export default App;
