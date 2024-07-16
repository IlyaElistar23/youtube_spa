import { Flex, Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { useState, lazy, Suspense, FC, useContext } from 'react'

import SearchInfo from './SearchInfo'
import ViewSettings from './ViewSettings'
import SearchSettings from './SearchSettings'

import { AppContext, ModalWindowText, SearchPageText } from '../../context/context'


export type ViewType = 'list' | 'grid'

const SearchResultList = lazy(() => import('./SearchResultList'))
const SearchResultGrid = lazy(() => import('./SearchResultGrid'))
const AddFavoriteForm = lazy(() => import('../ModalWindow/AddFavotireForm'))

type SearchResultsPropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void,
    searchPageLanguage: SearchPageText | undefined,
    modalWindowLanguage: ModalWindowText,
    onMessage: any
}

const SearchResult: FC<SearchResultsPropsType> = ({ getData, searchPageLanguage, modalWindowLanguage, onMessage }) => {

    const [viewType, setViewType] = useState<ViewType>('list')
    const theme = useContext(AppContext)

    const { Content } = Layout
    return (
        <Content style={{
            paddingLeft: '14vw',
            backgroundColor: theme.bgColor,
            width: '85vw'
        }}>
            <SearchSettings getData={getData} searchPageLanguage={searchPageLanguage}/>
            <Flex justify='space-between' align='center' style={{ width: '76vw', height: '3vh' }}>
                <SearchInfo videoInfo={searchPageLanguage?.videoInfo} countInfo={searchPageLanguage?.countInfo} countText={searchPageLanguage?.countText}/>
                <ViewSettings setViewType={setViewType} />
            </Flex>
            {
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
            }
            <Suspense fallback={
                <Spin indicator={<LoadingOutlined spin style={{ fontSize: '96px' }} />} spinning fullscreen />
            }>
                <AddFavoriteForm modalWindowLanguage={modalWindowLanguage} onMessage={onMessage}/>
            </Suspense>
        </Content>
    )
}

export default SearchResult