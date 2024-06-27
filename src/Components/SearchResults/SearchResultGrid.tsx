import { Flex, List, Image, Typography } from 'antd'
import { useAppSelector } from '../../redux/hooks/hooks'

const SearchResultGrid = (): JSX.Element => {

    const { Item } = List
    const { Text } = Typography
    const data = useAppSelector(state => state.data)

    return (
        <Flex style={{ marginTop: '3vh', width: '76vw' }} >
            <List grid={{ gutter: 10, column: 4 }} dataSource={data} renderItem={(item) => (
                <Item>
                    <Flex vertical style={{ margin: '0 1vw' }}>
                        <Flex style={{ width: '17vw', height: '22vh', border: '1px solid #35A2EC' }} align='center' justify='center'>
                            <Image src={item.snippet.thumbnails.high.url} height='7vh' width='7vh' />
                        </Flex>
                        <Text style={{ fontSize: '0.9rem', fontWeight: 'bold', marginTop: '1vh' }}>{item.snippet.title}</Text>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D', marginTop: '1vh' }}>{item.snippet.channelTitle}</Text>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>{item.snippet.publishTime}</Text>
                    </Flex>
                </Item>
            )} />
        </Flex>
    )
}

export default SearchResultGrid