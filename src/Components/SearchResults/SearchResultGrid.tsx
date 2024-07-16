import { Flex, List, Image, Typography } from 'antd'
import { useContext } from 'react'

import { useAppSelector } from '../../redux/hooks/hooks'
import { AppContext } from '../../context/context'

import { viewCount } from './functions/viewCount'
import { cutVideoTitle } from './functions/cutVideoTitle'


const SearchResultGrid = (): JSX.Element => {

    const { Item } = List
    const { Text } = Typography
    const data = useAppSelector(state => state.data)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const theme = useContext(AppContext)

    const setColumnsCount = (amount: number) => amount < 4 ? amount : 4

    return (
        <Flex style={{ marginTop: '3vh', width: '76vw' }} >
            <List grid={{ gutter: 12, column: setColumnsCount(amount) }} dataSource={data} renderItem={(item) => (
                <Item key={item.id}>
                    <Flex vertical >
                        <Flex style={{ width: '17vw', height: '22vh', border: '1px solid #35A2EC' }} align='center' justify='center'>
                            <Image src={item.snippet.thumbnails.high.url} height='22vh' width='22vw' />
                        </Flex>
                        <Text style={{ fontSize: '0.9rem', fontWeight: 'bold', marginTop: '1vh', minHeight: '5vh', color: theme.textColor }}>
                            {cutVideoTitle(item.snippet.title)}
                        </Text>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D', marginTop: '1vh' }}>{item.snippet.channelTitle}</Text>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>{viewCount(item.statistics.viewCount)}</Text>
                    </Flex>
                </Item>
            )} />
        </Flex>
    )
}

export default SearchResultGrid