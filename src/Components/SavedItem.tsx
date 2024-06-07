import { Button, Typography, List, Flex } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { SavedType } from './FavoritesPage'

type Props = {
    item: SavedType
}

const SavedItem = ({ item }: Props): JSX.Element => {

    const { Text } = Typography
    const { Item } = List
    return (
        <Item>
            <Flex align='center' justify='space-between' style={{ backgroundColor: 'white', width: '1040px', height: '47px' }}>
                <Text style={{fontSize: '16px'}}>
                    {item.title}
                </Text>
                <Flex>
                    <Button icon={<SearchOutlined />}></Button>
                    <Button icon={<EditOutlined />}></Button>
                    <Button icon={<DeleteOutlined />}></Button>
                </Flex>
            </Flex>
        </Item>
    )
}

export default SavedItem