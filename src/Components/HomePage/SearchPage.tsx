import { Layout } from 'antd'
import { FC } from 'react'
import CustomHeader from '../CustomHeader'
import SearchResult from '../SearchResults/SearchResult'
import BaseSearch from './BaseSearch'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import axios from 'axios'
import { DataItemType, setData } from '../../redux/dataSlice/dataSlice'

type PropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void
}

const SearchPage: FC<PropsType> = ({ getData }) => {

    const { Header, Content } = Layout

    const data = useAppSelector(state => state.data)
    // const order = useAppSelector(state => state.select.order)
    // const amount = useAppSelector(state => state.requestAmount.amount)
    // const dispatch = useAppDispatch()

    // const fetchGetSnippet = async (text: string, api_key: string, order: string, amount: number) => {
    //     try {
    //         const responseSnippet = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${text}&order=${order}&maxResults=${amount}`)
    //         const ids = responseSnippet.data.items.map((item: DataItemType) => item.id.videoId)
    //         const responseStat = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet,statistics&id=${ids.join(',')}`)
    //         dispatch(setData(responseStat.data.items))
    //         console.log(responseStat.data.items);
    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // }

    // const getData = (text: string, api_key: string, order: string, amount: number) => {
    //     fetchGetSnippet(text, api_key, order, amount)
    // }

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