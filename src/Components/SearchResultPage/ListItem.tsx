import { List, Typography, Image, Flex } from 'antd'
import { DataList } from '../data'

type ItemProps = {
    item: DataList
}

const ListItem = ({ item }: ItemProps): JSX.Element => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Item style={{ width: '90%' }}>
            <Flex style={{ width: '100%' }}>
                <Flex justify='center' align='center' style={{ width: '30%', height: '30%', borderColor: '#35A2EC', border: '1px solid #35A2EC' }}>
                    <Image src={item.image} />
                </Flex>
                <Flex vertical style={{ marginLeft: '3%', width: '80%' }}>
                    <Text style={{ fontSize: '89%', fontWeight: 'bold', marginBottom: '3%' }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: '89%', color: '#1717194D' }}>
                        {item.channel}
                    </Text>
                    <Text style={{ fontSize: '89%', color: '#1717194D' }}>
                        {item.views}
                    </Text>
                </Flex>
            </Flex>
        </Item>
    )
}

export default ListItem