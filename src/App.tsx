import LoginPage from './Components/LoginPage/LoginPage';
import SearchPage from './Components/HomePage/SearchPage';
import FavoritePage from './Components/FavoritesPage/FavoritesPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';

import { Routes, Route } from 'react-router-dom'
import { useAppDispatch } from './redux/hooks/hooks';
import { setData, DataItemType } from './redux/dataSlice/dataSlice';
import axios from 'axios';

function App() {

  const dispatch = useAppDispatch()
  const fetchGetSnippet = async (text: string, api_key: string, order: string, amount: number) => {
    try {
      const responseSnippet = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${text}&order=${order}&maxResults=${amount}`)
      const ids = responseSnippet.data.items.map((item: DataItemType) => item.id.videoId)
      const responseStat = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet,statistics&id=${ids.join(',')}`)
      dispatch(setData(responseStat.data.items))
      console.log(responseStat.data.items);
    } catch (error: any) {
      console.log(error);
    }
  }

  const getData = (text: string, api_key: string, order: string, amount: number) => {
    fetchGetSnippet(text, api_key, order, amount)
  }
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/search' element={<SearchPage getData={getData} />} />
      <Route path='/favorites' element={<FavoritePage getData={getData} />} />
    </Routes>
  );
}

export default App;
