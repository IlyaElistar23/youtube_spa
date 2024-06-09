import { Flex, List, Image, Typography } from 'antd'
import { data } from '../data'
import GridItem from './GridItem'

const SearchResultGrid = (): JSX.Element => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Flex style={{ marginTop: '2.5%', width: '89%'}} align='center' justify='center'>
            <List grid={{gutter: 10, column: 4 }} dataSource={data} renderItem={(item) => (
                <Item>
                    <Flex vertical >
                        <Flex style={{ width: '100%', height: '20%', border: '1px solid #35A2EC' }}>
                            <Image src={item.image} height='50%' width='50%'/>
                        </Flex>
                        <Text style={{fontSize: '90%', fontWeight: 'bold', marginTop: '2%'}}>{item.title}</Text>
                        <Text style={{fontSize: '90%', color: '#1717194D', marginTop: '2%'}}>{item.channel}</Text>
                        <Text style={{fontSize: '90%', color: '#1717194D'}}>{item.views}</Text>
                    </Flex>
                </Item>
            )} />
        </Flex>
    )
}

export default SearchResultGrid