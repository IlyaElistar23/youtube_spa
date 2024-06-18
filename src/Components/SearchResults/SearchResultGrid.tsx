import { Flex, List, Image, Typography } from 'antd'
import { data } from '../data'
import GridItem from './GridItem'

const SearchResultGrid = (): JSX.Element => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Flex style={{ marginTop: '3vh', width: '76vw' }} >
            <List grid={{gutter: 10, column: 4 }} dataSource={data} renderItem={(item) => (
                <Item>
                <Flex vertical style={{margin: '0 1vw'}}>
                        <Flex style={{ width: '17vw', height: '22vh', border: '1px solid #35A2EC' }} align='center' justify='center'>
                            <Image src={item.image} height='7vh' width='7vh'/>
                        </Flex>
                        <Text style={{fontSize: '0.9rem', fontWeight: 'bold', marginTop: '1vh'}}>{item.title}</Text>
                        <Text style={{fontSize: '0.9rem', color: '#1717194D', marginTop: '1vh'}}>{item.channel}</Text>
                        <Text style={{fontSize: '0.9rem', color: '#1717194D'}}>{item.views}</Text>
                    </Flex>
                </Item>
            )} />
        </Flex>
    )
}

export default SearchResultGrid