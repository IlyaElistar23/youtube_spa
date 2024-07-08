import { Flex, Layout } from 'antd'
import { useState, FC } from 'react'
import SearchInfo from './SearchInfo'
import ViewSettings from './ViewSettings'
import SearchSettings from './SearchSettings'
import SearchResultList from './SearchResultList'
import SearchResultGrid from './SearchResultGrid'
import AddFavoriteForm from '../ModalWindow/AddFavotireForm'

export type ViewType = 'list' | 'grid'

type SearchResultsPropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void
}

const SearchResult: FC<SearchResultsPropsType> = ({ getData }) => {

    const [viewType, setViewType] = useState<ViewType>('list')

    const { Content } = Layout
    return (
        <Content style={{
            paddingLeft: '14%',
            backgroundColor: '#FAFAFA',
            width: '85vw'
        }}>
            <SearchSettings getData={getData}/>
            <Flex justify='space-between' align='center' style={{ width: '76vw', height: '3vh' }}>
                <SearchInfo />
                <ViewSettings setViewType={setViewType} />
            </Flex>
            {
                viewType === 'list' ?
                    <SearchResultList /> :
                    <SearchResultGrid />
            }
            <AddFavoriteForm />
        </Content>
    )
}

export default SearchResult