import { Button, Typography, List, Flex, ConfigProvider } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { SavedType } from './FavoritesPage'
import { FavoritesType, editFavRequest, deleteFavRequest } from '../../redux/favoritesSlice/favoritesSlice'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { setEditValues } from '../../redux/editFavoriteSlice/editFavoriteSlice'

type Props = {
    favorite: FavoritesType,
}

const FavoriteItem = ({ favorite }: Props): JSX.Element => {

    const { Text } = Typography
    const { Item } = List

    const dispatch = useAppDispatch()

    return (
        <Item style={{ width: '72vw' }}>
            <Flex align='center' justify='space-between' style={{ backgroundColor: 'white', width: '72vw', height: '2vh', padding: '2vh 4vh' }}>
                <Text style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    {favorite.title}
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
                        <Button icon={<SearchOutlined />}></Button>  {/* при нажатии на кнопку будет устанавливать соответствующий order и amount для избранного */}
                        <Button onClick={() => {
                            dispatch(editFavRequest(favorite.id))
                            dispatch(setEditValues({
                                title: favorite.title,
                                order: favorite.selectOrder,
                                amount: favorite.requestAmount
                            }))
                            dispatch(setIsOpen(true))
                        }} icon={<EditOutlined />}></Button>
                        <Button onClick={() => dispatch(deleteFavRequest(favorite.id))} icon={<DeleteOutlined />}></Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
        </Item>
    )
}

export default FavoriteItem