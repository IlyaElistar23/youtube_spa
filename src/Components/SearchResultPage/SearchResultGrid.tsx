import { Flex, List, Image, Typography } from 'antd'
import { data } from '../data'
import GridItem from './GridItem'

const SearchResultGrid = (): JSX.Element => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Flex style={{ marginTop: '20px', width: '1040px' }}>
            <List grid={{gutter: 10, column: 4 }} dataSource={data} renderItem={(item) => (
                <Item>
                    <Flex vertical >
                        <Flex style={{ width: '245px', height: '138px', border: '1px solid #35A2EC' }}>
                            <Image src={item.image} height='48px' width='48px'/>
                        </Flex>
                        <Text style={{fontSize: '14px', fontWeight: 'bold', marginTop: '8px'}}>{item.title}</Text>
                        <Text style={{fontSize: '14px', color: '#1717194D', marginTop: '8px'}}>{item.channel}</Text>
                        <Text style={{fontSize: '14px', color: '#1717194D'}}>{item.views}</Text>
                    </Flex>
                </Item>
            )} />
        </Flex>
    )
}

export default SearchResultGrid