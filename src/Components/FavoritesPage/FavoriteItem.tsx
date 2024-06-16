import { Button, Typography, List, Flex, ConfigProvider } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { SavedType } from './FavoritesPage'

type Props = {
    item: SavedType
}

const FavoriteItem = ({ item }: Props): JSX.Element => {

    const { Text } = Typography
    const { Item } = List
    return (
        <Item style={{width: '72vw'}}>
            <Flex align='center' justify='space-between' style={{ backgroundColor: 'white', width: '72vw', height: '32%', padding: '1% 1.4%' }}>
                <Text style={{ fontSize: '100%', fontWeight: 'bold' }}>
                    {item.title}
                </Text>
                <Flex>
                    <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                defaultBorderColor: 'white',
                                defaultHoverBorderColor: 'white',
                                defaultActiveBorderColor: 'white'
                            }
                        }
                    }}
                    >
                        <Button icon={<SearchOutlined />}></Button>
                        <Button icon={<EditOutlined />}></Button>
                        <Button icon={<DeleteOutlined />}></Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
        </Item>
    )
}

export default FavoriteItem