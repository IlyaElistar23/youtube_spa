import { Button, Typography, List, Flex, ConfigProvider } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { FC, useContext } from 'react'
import { FavoritesType, editFavRequest, deleteFavRequest } from '../../redux/favoritesSlice/favoritesSlice'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { setEditValues } from '../../redux/editFavoriteSlice/editFavoriteSlice'
import { api_key } from '../../api_key'
import { useNavigate } from 'react-router-dom'
import { setAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { AppContext } from '../../context/context'
import { resetData } from '../../redux/dataSlice/dataSlice'

type FavItemPropsType = {
    favorite: FavoritesType,
    getData: (text: string, api_key: string, order: string, amount: number) => void
}

const FavoriteItem: FC<FavItemPropsType> = ({ favorite, getData }) => {

    const { Text } = Typography
    const { Item } = List
    const theme = useContext(AppContext)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <Item style={{ width: '72vw' }}>
            <Flex align='center' justify='space-between' style={{ backgroundColor: theme.headerColor, width: '72vw', height: '2vh', padding: '2vh 4vh' }}>
                <Text style={{ fontSize: '1rem', fontWeight: 'bold', color: theme.textColor }}>
                    {favorite.title}
                </Text>
                <Flex>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultBorderColor: theme.headerColor,
                                    defaultHoverBorderColor: theme.headerColor,
                                    defaultBg: theme.headerColor,
                                    defaultHoverBg: theme.headerColor,
                                    defaultColor: theme.subTitleColor
                                }
                            }
                        }}
                    >
                        <Button
                            onClick={() => {
                                dispatch(resetData())
                                getData(favorite.request, api_key, favorite.selectOrder, favorite.requestAmount)
                                dispatch(setAmountValue(favorite.requestAmount))
                                dispatch(addRequest(favorite.request))
                                navigate('/search')
                            }}
                            icon={<SearchOutlined />}></Button>
                        <Button onClick={() => {
                            dispatch(editFavRequest(favorite.id))
                            dispatch(setEditValues({
                                title: favorite.title,
                                order: favorite.selectOrder,
                                request: favorite.request,
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