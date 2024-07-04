import { Layout } from 'antd'
import CustomHeader from '../CustomHeader'
import SearchResult from '../SearchResults/SearchResult'
import BaseSearch from './BaseSearch'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import axios from 'axios'
import { DataItemType, setData } from '../../redux/dataSlice/dataSlice'

const SearchPage = (): JSX.Element => {

    const { Header, Content } = Layout

    const data = useAppSelector(state => state.data)
    const order = useAppSelector(state => state.select.order)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const dispatch = useAppDispatch()

    const fetchGetSnippet = async (text: string, api_key: string) => {
        try {
            const responseSnippet = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${text}&order=${order}&maxResults=${amount}`)
            // передавать order и amount при вызове функции как параметр, 
            const ids = responseSnippet.data.items.map((item: DataItemType) => item.id.videoId)
            const responseStat = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet,statistics&id=${ids.join(',')}`)
            dispatch(setData(responseStat.data.items))
            console.log(responseStat.data.items);
        } catch (error: any) {
            console.log(error);
        }
    }

    const getData = (text: string, api_key: string) => {
        fetchGetSnippet(text, api_key)
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
                        <SearchResult getData={getData} /> :
                        <BaseSearch getData={getData} />
                }
            </Content>
        </>
    )
}

export default SearchPage