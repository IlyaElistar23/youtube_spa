import { List, Typography, Image, Flex } from 'antd'
import { FC } from 'react'
import { DataItemType } from '../../redux/dataSlice/dataSlice'

type ListProps = {
    item: DataItemType
}

const ListItem: FC<ListProps> = ({ item }) => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Item style={{ width: '76vw' }}>
            <Flex style={{ width: '80vw' }}>
                <Flex justify='center' align='center' style={{ width: '20vw', height: '22vh', borderColor: '#35A2EC', border: '1px solid #35A2EC' }}>
                    <Image src={item.snippet.thumbnails.high.url} />
                </Flex>
                <Flex vertical style={{ marginLeft: '3vw', width: '80vw' }}>
                    <Text style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '2vh' }}>
                        {item.snippet.title}
                    </Text>
                    <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>
                        {item.snippet.channelTitle}
                    </Text>
                    <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>
                        {item.snippet.publishTime}
                    </Text>
                </Flex>
            </Flex>
        </Item>
    )
}

export default ListItem