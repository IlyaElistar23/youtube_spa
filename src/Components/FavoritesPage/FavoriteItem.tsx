import { Button, Typography, List, Flex, ConfigProvider, Popconfirm } from 'antd'
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'

import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../redux/hooks/hooks'
import { AppContext } from '../../context/context'
import { FavoriteItemMessageType } from '../../context/context'

import { FavoritesType, editFavRequest, deleteFavRequest } from '../../redux/favoritesSlice/favoritesSlice'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { setEditValues } from '../../redux/editFavoriteSlice/editFavoriteSlice'
import { setAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { resetData } from '../../redux/dataSlice/dataSlice'


type FavItemPropsType = {
    favorite: FavoritesType,
    getData: (text: string, order: string, amount: number) => void,
    onMessage: any,
    itemLanguage: FavoriteItemMessageType | undefined
}

const FavoriteItem: FC<FavItemPropsType> = ({ favorite, getData, onMessage, itemLanguage }) => {

    const { Text } = Typography
    const { Item } = List

    const theme = useContext(AppContext)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    return (
        <>
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
                                        defaultColor: theme.textColor
                                    }
                                }
                            }}
                        >
                            <Button
                                onClick={() => {
                                    dispatch(resetData())
                                    getData(favorite.request, favorite.selectOrder, favorite.requestAmount)
                                    dispatch(setAmountValue(favorite.requestAmount))
                                    dispatch(addRequest(favorite.request))
                                    navigate('/search')
                                }}
                                icon={<SearchOutlined />} />
                            <Button onClick={() => {
                                dispatch(editFavRequest(favorite.id))
                                dispatch(setEditValues({
                                    title: favorite.title,
                                    order: favorite.selectOrder,
                                    request: favorite.request,
                                    amount: favorite.requestAmount
                                }))
                                dispatch(setIsOpen(true))
                            }} icon={<EditOutlined />} />
                            <Popconfirm
                                title={itemLanguage?.popconfirm.title}
                                description={itemLanguage?.popconfirm.description}
                                okText={itemLanguage?.popconfirm.okText}
                                cancelText={itemLanguage?.popconfirm.cancelText}
                                onCancel={() => {
                                    onMessage(itemLanguage?.cancelMessage, 'error')
                                }}
                                onConfirm={() => {
                                    dispatch(deleteFavRequest(favorite.id))
                                    onMessage(`${favorite.title} ${itemLanguage?.confirmMessage}`, 'success')
                                }}
                                style={{
                                    backgroundColor: theme.bgColor,
                                    color: theme.textColor
                                }}
                            >
                                <Button icon={<DeleteOutlined />} />
                            </Popconfirm>
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Item>
        </>
    )
}

export default FavoriteItem