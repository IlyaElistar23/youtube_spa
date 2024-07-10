import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { FC, lazy, Suspense } from 'react'
import CustomHeader from '../CustomHeader'
import BaseSearch from './BaseSearch'
import { StatusType } from '../../App'

type PropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void,
    status: StatusType,
    setStatus: (status: StatusType) => void
}

const SearchResult = lazy(() => import('../SearchResults/SearchResult'))

const SearchPage: FC<PropsType> = ({ getData, status, setStatus }) => {

    const { Header, Content } = Layout

    return (
        <>
            <Header style={{
                backgroundColor: 'white',
                padding: 0,
                height: '8vh',
                width: '100vw',
            }}>
                <CustomHeader setStatus={setStatus} />
            </Header>
            <Content style={{
                backgroundColor: '#FAFAFA',
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
                            <SearchResult getData={getData} setStatus={setStatus} />
                        </Suspense>
                        :
                        <BaseSearch getData={getData} />
                }
            </Content>
        </>
    )
}

export default SearchPage