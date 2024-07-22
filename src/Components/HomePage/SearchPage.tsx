import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { FC, lazy, Suspense, useContext, useRef, useEffect } from 'react'
import CustomHeader from '../CustomHeader/CustomHeader'
import BaseSearch from './BaseSearch'
import { LanguageType, StatusType, ThemeType } from '../../App'
import checkAuth from '../HOC/checkAuth'
import { AppContext, HeaderText, SearchPageText, FavoritesPageText, ModalWindowText } from '../../context/context'


export type PropsType = {
    getData: (text: string, order: string, amount: number) => void,
    status?: StatusType,
    setStatus: (status: StatusType) => void,
    themeType: ThemeType,
    setTheme: (theme: ThemeType) => void,
    language: LanguageType,
    setLanguage: (language: LanguageType) => void,
    headerLanguage: HeaderText,
    searchPageLanguage?: SearchPageText,
    favoritesPageLanguage?: FavoritesPageText,
    modalWindowLanguage: ModalWindowText,
    contextHolder: any,
    onMessage: any
}

const SearchResult = lazy(() => import('../SearchResults/SearchResult'))

const SearchPage: FC<PropsType> = ({
    getData,
    status,
    setStatus,
    themeType,
    setTheme,
    headerLanguage,
    setLanguage,
    language,
    searchPageLanguage,
    modalWindowLanguage,
    contextHolder,
    onMessage
}) => {

    const { Header, Content } = Layout
    const theme = useContext(AppContext)

    const requestInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        requestInput.current?.focus()
    }, [])

    return (
        <>
            <Header style={{
                backgroundColor: theme.headerColor,
                padding: 0,
                height: '8vh',
                width: '100vw',
                overflow: 'auto'
            }}>
                <CustomHeader
                    setStatus={setStatus}
                    themeType={themeType}
                    setTheme={setTheme}
                    headerLanguage={headerLanguage}
                    setLanguage={setLanguage}
                    language={language}
                />
            </Header>
            <Content
                style={{
                    backgroundColor: theme.bgColor,
                    minHeight: '92vh',
                    width: '100vw',
                }}>
                {contextHolder}
                {
                    status === 'loading'
                        ?
                        <Suspense
                            fallback={
                                <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
                            }>
                            <SearchResult
                                getData={getData}
                                searchPageLanguage={searchPageLanguage}
                                modalWindowLanguage={modalWindowLanguage}
                                onMessage={onMessage}
                                requestInput={requestInput}
                            />
                        </Suspense>
                        :
                        <BaseSearch
                            getData={getData}
                            searchPageLanguage={searchPageLanguage}
                            modalWindowLanguage={modalWindowLanguage}
                            requestInput={requestInput}
                            onMessage={onMessage}
                        />
                }
            </Content>
        </>
    )
}

export default checkAuth(SearchPage)