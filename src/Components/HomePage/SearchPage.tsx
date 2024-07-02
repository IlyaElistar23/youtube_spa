import { Button, Input, Typography, Flex, ConfigProvider, Layout, Empty } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import CustomHeader from '../CustomHeader'
import SearchResult from '../SearchResults/SearchResult'
import BaseSearch from './BaseSearch'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import axios from 'axios'
import { setData } from '../../redux/dataSlice/dataSlice'

const SearchPage = (): JSX.Element => {

    const { Header, Content } = Layout

    const data = useAppSelector(state => state.data)
    const order = useAppSelector(state => state.select.order)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const dispatch = useAppDispatch()

    const fetchGetData = async (text: string, api_key: string) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${text}&order=${order}&maxResults=${amount}`)
            dispatch(setData(response.data.items))
            console.log(response.data.items);
        } catch (error: any) {
            console.log(error);
        }
    }

    const getData = (text: string, api_key: string) => {
        fetchGetData(text, api_key)
    }

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
                        <SearchResult getData={getData}/> :
                        <BaseSearch getData={getData}/>
                }
            </Content>
        </>
    )
}

export default SearchPage