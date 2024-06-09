import { Flex, Layout } from 'antd'
import CustomHeader from '../CustomHeader'
import SearchInfo from './SearchInfo'
import ViewSettings from './ViewSettings'
import SearchSettings from './SearchSettings'
import SearchResultList from './SearchResultList'
import SearchResultGrid from './SearchResultGrid'

const SearchResult = (): JSX.Element => {
    const { Header, Content } = Layout
    return (
        <>
            <Header style={{
                backgroundColor: 'white',
                padding: 0,
                height: '10%',
                width: '100%',
            }}>
                <CustomHeader/>
            </Header>
            <Content style={{
                paddingLeft: '14%',
                backgroundColor: '#FAFAFA',
                width: '86%'
            }}>
                <SearchSettings/>
                <Flex justify='space-between' align='center' style={{ width: '89%', height: '3%', marginTop: '4%'}}>
                    <SearchInfo />
                    <ViewSettings />
                </Flex>
                <SearchResultList/>
            </Content>
        </>
    )
}

export default SearchResult