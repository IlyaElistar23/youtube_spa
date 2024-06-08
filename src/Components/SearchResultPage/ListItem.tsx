import { List, Typography, Image, Flex } from 'antd'
import { DataList } from '../data'

type ItemProps = {
    item: DataList
}

const ListItem = ({ item }: ItemProps): JSX.Element => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Item>
            <Flex>
                <div style={{width: '157px', height: '88px', border: '1px solid', borderColor: '#35A2EC'}}>
                <Image src={item.image}/>
                </div>
                <Flex vertical style={{marginLeft: '30px'}}>
                    <Text style={{height: '40px', fontSize: '16px', fontWeight: 'bold'}}>
                        {item.title}
                    </Text>
                    <Text style={{fontSize: '16px', color: '#1717194D'}}>
                        {item.channel}
                    </Text>
                    <Text style={{fontSize: '16px', color: '#1717194D'}}>
                        {item.views}
                    </Text>
                </Flex>
            </Flex>
        </Item>
    )
}

export default ListItem