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
                height: '80px',
                width: '1440x',
            }}>
                <CustomHeader/>
            </Header>
            <Content style={{
                paddingLeft: '200px',
                backgroundColor: '#FAFAFA',
                width: '1240px'
            }}>
                <SearchSettings/>
                <Flex justify='space-between' align='center' style={{ width: '1040px', height: '24px', marginTop: '40px'}}>
                    <SearchInfo />
                    <ViewSettings />
                </Flex>
                <SearchResultGrid/>
            </Content>
        </>
    )
}

export default SearchResult