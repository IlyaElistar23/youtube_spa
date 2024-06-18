import { Flex, Layout } from 'antd'
import { useState } from 'react'
import SearchInfo from './SearchInfo'
import ViewSettings from './ViewSettings'
import SearchSettings from './SearchSettings'
import SearchResultList from './SearchResultList'
import SearchResultGrid from './SearchResultGrid'

export type ViewType = 'list' | 'grid'

const SearchResult = (): JSX.Element => {

    const [viewType, setViewType] = useState<ViewType>('list')

    const { Content } = Layout
    return (
        <Content style={{
            paddingLeft: '14%',
            backgroundColor: '#FAFAFA',
            width: '85vw'
        }}>
            <SearchSettings />
            <Flex justify='space-between' align='center' style={{ width: '76vw', height: '3vh' }}>
                <SearchInfo />
                <ViewSettings setViewType={setViewType}/>
            </Flex>
            {
                viewType === 'list' ?
                <SearchResultList/> :
                <SearchResultGrid/>
            }
        </Content>
    )
}

export default SearchResult