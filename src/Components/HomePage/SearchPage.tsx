import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { FC, lazy, Suspense, useContext } from 'react'
import CustomHeader from '../CustomHeader'
import BaseSearch from './BaseSearch'
import { StatusType, ThemeType } from '../../App'
import checkAuth from '../HOC/checkAuth'
import { AppContext } from '../../context/context'

export type PropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void,
    status?: StatusType,
    setStatus: (status: StatusType) => void,
    themeType: ThemeType,
    setTheme: (theme: ThemeType) => void
}

const SearchResult = lazy(() => import('../SearchResults/SearchResult'))

const SearchPage: FC<PropsType> = ({ getData, status, setStatus, themeType, setTheme }) => {

    const { Header, Content } = Layout
    const theme = useContext(AppContext)

    return (
        <>
            <Header style={{
                backgroundColor: theme.headerColor,
                padding: 0,
                height: '8vh',
                width: '100vw',
            }}>
                <CustomHeader setStatus={setStatus} themeType={themeType} setTheme={setTheme} />
            </Header>
            <Content style={{
                backgroundColor: theme.bgColor,
                minHeight: '92vh',
                width: '100vw',
            }}>
                {
                    status === 'loading'
                        ?
                        <Suspense
                            fallback={
                                <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} fullscreen spinning />
                            }>
                            <SearchResult getData={getData} />
                        </Suspense>
                        :
                        <BaseSearch getData={getData} />
                }
            </Content>
        </>
    )
}

export default checkAuth(SearchPage)