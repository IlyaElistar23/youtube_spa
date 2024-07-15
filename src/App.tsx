import LoginPage from './Components/LoginPage/LoginPage';
// import SearchPage from './Components/HomePage/SearchPage';
// import FavoritePage from './Components/FavoritesPage/FavoritesPage';
// import RegisterPage from './Components/RegisterPage/RegisterPage';

import { useAppDispatch } from './redux/hooks/hooks';
import { AppContext } from './context/context';
import { darkTheme, lightTheme } from './context/appContext';

import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState, useEffect } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios';

import { setData, DataItemType } from './redux/dataSlice/dataSlice';
import { setAmountValue } from './redux/requestAmountSlice/requestAmountSlice';


const SearchPage = lazy(() => import('./Components/HomePage/SearchPage'))
const RegisterPage = lazy(() => import('./Components/RegisterPage/RegisterPage'))
const FavoritePage = lazy(() => import('./Components/FavoritesPage/FavoritesPage'))

export type StatusType = 'home' | 'loading'

export type ThemeType = 'light' | 'dark' | string

function App() {

  const [status, setStatus] = useState<StatusType>('home')
  const [theme, setTheme] = useState<ThemeType>(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const changeStatus = (status: StatusType) => setStatus(status)

  const dispatch = useAppDispatch()
  const fetchGetSnippet = async (text: string, api_key: string, order: string, amount: number) => {
    try {
      changeStatus('loading')
      const responseSnippet = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${text}&order=${order}&maxResults=${amount}`)
      const ids = responseSnippet.data.items.map((item: DataItemType) => item.id.videoId)
      const responseStat = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet,statistics&id=${ids.join(',')}`)
      dispatch(setData(responseStat.data.items))
      dispatch(setAmountValue(responseStat.data.items.length))
      console.log(responseStat.data.items);
    } catch (error: any) {
      console.log(error);
    }
  }

  const getData = (text: string, api_key: string, order: string, amount: number) => {
    fetchGetSnippet(text, api_key, order, amount)
  }

  return (
    <AppContext.Provider value={theme === 'light' ? lightTheme : darkTheme}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={
          <Suspense fallback={
            <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
          }>
            <RegisterPage />
          </Suspense>
        } />
        <Route path='/search' element={
          <Suspense
            fallback={
              <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
            }>
            <SearchPage getData={getData} status={status} setStatus={setStatus} themeType={theme} setTheme={setTheme} />
          </Suspense>
        } />
        <Route path='/favorites' element={
          <Suspense fallback={
            <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
          }>
            <FavoritePage getData={getData} setStatus={setStatus} themeType={theme} setTheme={setTheme} />
          </Suspense>
        } />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
