import { Flex, Layout } from 'antd'
import SearchInfo from './SearchInfo'
import ViewSettings from './ViewSettings'
import SearchResultList from './SearchResultList'
import SearchResultGrid from './SearchResultGrid'

const SearchResult = (): JSX.Element => {

    const { Content } = Layout
    return (
        <Content style={{
            paddingLeft: '14%',
            backgroundColor: '#FAFAFA',
            width: '85vw'
        }}>
            <Flex justify='space-between' align='center' style={{ width: '76vw', height: '3vh', marginTop: '4vh' }}>
                <SearchInfo />
                <ViewSettings/>
            </Flex>
        </Content>
    )
}

export default SearchResult