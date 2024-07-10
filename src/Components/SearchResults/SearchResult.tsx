import { Flex, Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useState, lazy, Suspense, FC } from 'react'
import SearchInfo from './SearchInfo'
import ViewSettings from './ViewSettings'
import SearchSettings from './SearchSettings'
import { StatusType } from '../../App'
import { useAppSelector } from '../../redux/hooks/hooks'

export type ViewType = 'list' | 'grid'

const SearchResultList = lazy(() => import('./SearchResultList'))
const SearchResultGrid = lazy(() => import('./SearchResultGrid'))
const AddFavoriteForm = lazy(() => import('../ModalWindow/AddFavotireForm'))

type SearchResultsPropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void,
    setStatus: (status: StatusType) => void
}

const SearchResult: FC<SearchResultsPropsType> = ({ getData, setStatus }) => {

    const [viewType, setViewType] = useState<ViewType>('list')

    const data = useAppSelector(state => state.data)

    const { Content } = Layout
    return (
        <Content style={{
            paddingLeft: '14%',
            backgroundColor: '#FAFAFA',
            width: '85vw'
        }}>
            <SearchSettings getData={getData} />
            <Flex justify='space-between' align='center' style={{ width: '76vw', height: '3vh' }}>
                <SearchInfo />
                <ViewSettings setViewType={setViewType} />
            </Flex>
            {
                // data ?
                    viewType === 'list' ?
                        <Suspense fallback={
                            <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} spinning fullscreen />
                        }>
                            <SearchResultList />
                        </Suspense>
                        :
                        <Suspense fallback={
                            <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} spinning fullscreen />
                        }>
                            <SearchResultGrid />
                        </Suspense>
                    // :
                    // <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} spinning fullscreen />
            }
            <Suspense fallback={
                <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} spinning fullscreen />
            }>
                <AddFavoriteForm />
            </Suspense>
        </Content>
    )
}

export default SearchResult