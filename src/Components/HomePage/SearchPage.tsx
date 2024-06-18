import { Button, Input, Typography, Flex, ConfigProvider, Layout, Empty } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import CustomHeader from '../CustomHeader'
import SearchResult from '../SearchResults/SearchResult'
import BaseSearch from './BaseSearch'
import { data } from '../data'

const SearchPage = (): JSX.Element => {

    const { Header, Content } = Layout

    return (
        <>
            <Header style={{
                backgroundColor: 'white',
                padding: 0,
                height: '8vh',
                width: '100vw',
            }}>
                <CustomHeader />
            </Header>
            <Content style={{
                    backgroundColor: '#FAFAFA',
                    minHeight: '92vh',
                    width: '100vw',
                }}>
                    {
                        data.length !== 0 ? 
                        <SearchResult/> :
                        <BaseSearch/>
                    }
            </Content>
        </>
    )
}

export default SearchPage