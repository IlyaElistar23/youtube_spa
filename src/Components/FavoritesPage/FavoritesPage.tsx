import { Typography, Button, Flex, ConfigProvider, List, Layout } from 'antd'
import FavoriteItem from './FavoriteItem'
import CustomHeader from '../CustomHeader'

export type SavedType = {
    request: string,
    title: string,
    sort: string,
    maxAmount: number
}

const FavoritePage = (): JSX.Element => {
    const { Text } = Typography
    const { Header, Content } = Layout

    const saved: SavedType[] = [
        {
            request: '',
            title: 'React',
            sort: '',
            maxAmount: 25
        },
        {
            request: '',
            title: 'Redux',
            sort: '',
            maxAmount: 30
        }
    ]
    return (
        <>
            <Header
                style={{
                    backgroundColor: 'white',
                    padding: 0,
                    height: '80px',
                    width: '100%',
                }}>
                <CustomHeader />
            </Header>
            <Content style={{ backgroundColor: '#FAFAFA', minHeight: '720px' }}>
                <Flex vertical align='flex-start' justify='center' style={{ paddingLeft: '14%', paddingTop: '40px', width: '86%' }}>
                    <Text style={{ fontSize: '28px' }}>Избранное</Text>
                    <List style={{ marginTop: '40px' }}>
                        {
                            saved.map(item => (
                                <FavoriteItem item={item} />
                            ))
                        }
                    </List>
                </Flex>
            </Content>
        </>
    )
}

export default FavoritePage