import LoginPage from './Components/LoginPage/LoginPage';

import { useAppDispatch } from './redux/hooks/hooks';
import { AppContext } from './context/context';
import { darkTheme, lightTheme } from './context/appContext';

import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState, useEffect } from 'react'
import { Spin, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import axios from 'axios';

import { setData, DataItemType } from './redux/dataSlice/dataSlice';

import { engLanguage, ruLanguage } from './context/appContext'
import { NoticeType } from 'antd/es/message/interface';


const SearchPage = lazy(() => import('./Components/HomePage/SearchPage'))
const RegisterPage = lazy(() => import('./Components/RegisterPage/RegisterPage'))
const FavoritePage = lazy(() => import('./Components/FavoritesPage/FavoritesPage'))

export type StatusType = 'home' | 'loading'
export type ThemeType = 'light' | 'dark' | string
export type LanguageType = 'eng' | 'rus' | string

function App() {

  const [status, setStatus] = useState<StatusType>('home')
  const [theme, setTheme] = useState<ThemeType>(localStorage.getItem('theme') || 'light')
  const [language, setLanguage] = useState<LanguageType>('eng')

  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const changeStatus = (status: StatusType) => setStatus(status)

  const onMessage = (content: string, type: NoticeType) => {
    messageApi.open({
      type,
      content,
    })
  }


  const dispatch = useAppDispatch()
  const fetchGetSnippet = async (text: string, order: string, amount: number) => {
    try {
      changeStatus('loading')
      const responseSnippet = await axios.get(`${process.env.REACT_APP_URL_SEARCH}/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&q=${text}&order=${order}&maxResults=${amount}`)
      const ids = responseSnippet.data.items.map((item: DataItemType) => item.id.videoId)
      const responseStat = await axios.get(`${process.env.REACT_APP_URL_VIDEOS}/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&id=${ids.join(',')}`)
      dispatch(setData(responseStat.data.items))
      console.log(responseStat.data.items)
    } catch (error: any) {
      console.log(error);
    }
  }

  const getData = (text: string, order: string, amount: number) => {
    fetchGetSnippet(text, order, amount)
  }

  return (
    <AppContext.Provider value={theme === 'light' ? lightTheme : darkTheme}>
      <Routes>
        <Route path='/' element={
          <LoginPage
            language={language === 'eng' ? engLanguage.login : ruLanguage.login}
            messageApi={messageApi}
            contextHolder={contextHolder}
            message={message}
          />
        } />
        <Route path='/register' element={
          <Suspense fallback={
            <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
          }>
            <RegisterPage
              language={language === 'eng' ? engLanguage.register : ruLanguage.register}
              messageApi={messageApi}
              contextHolder={contextHolder}
              message={message}
            />
          </Suspense>
        } />
        <Route path='/search' element={
          <Suspense
            fallback={
              <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
            }>
            <SearchPage
              getData={getData}
              status={status}
              setStatus={setStatus}
              themeType={theme}
              setTheme={setTheme}
              language={language}
              setLanguage={setLanguage}
              headerLanguage={language === 'eng' ? engLanguage.header : ruLanguage.header}
              searchPageLanguage={language === 'eng' ? engLanguage.search : ruLanguage.search}
              modalWindowLanguage={language === 'eng' ? engLanguage.modal : ruLanguage.modal}
              contextHolder={contextHolder}
              onMessage={onMessage}
            />
          </Suspense>
        } />
        <Route path='/favorites' element={
          <Suspense fallback={
            <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
          }>
            <FavoritePage
              getData={getData}
              setStatus={setStatus}
              themeType={theme}
              setTheme={setTheme}
              language={language}
              setLanguage={setLanguage}
              headerLanguage={language === 'eng' ? engLanguage.header : ruLanguage.header}
              favoritesPageLanguage={language === 'eng' ? engLanguage.favotires : ruLanguage.favotires}
              modalWindowLanguage={language === 'eng' ? engLanguage.modal : ruLanguage.modal}
              contextHolder={contextHolder}
              onMessage={onMessage}
            />
          </Suspense>
        } />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;