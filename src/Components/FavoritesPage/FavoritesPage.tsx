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
                    height: '8vh',
                    width: '100vw',
                }}>
                <CustomHeader />
            </Header>
            <Content style={{ backgroundColor: '#FAFAFA', minHeight: '92vh' }}>
                <Flex vertical align='flex-start' justify='center' style={{ paddingLeft: '14vw', paddingTop: '9vh' }}>
                    <Text style={{ fontSize: '2rem' }}>Избранное</Text>
                    <List style={{ marginTop: '4vh' }}>
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