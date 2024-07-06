import { Typography, Button, Flex, ConfigProvider, List, Layout } from 'antd'
import FavoriteItem from './FavoriteItem'
import CustomHeader from '../CustomHeader'
import { useAppSelector } from '../../redux/hooks/hooks'
import { useState, useEffect } from 'react'
import AddFavoriteForm from '../ModalWindow/AddFavotireForm'

export type SavedType = {
    request: string,
    title: string,
    sort: string,
    maxAmount: number
}

const FavoritePage = (): JSX.Element => {

    const { Text } = Typography
    const { Header, Content } = Layout
    const favorites = useAppSelector(state => state.favorites)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

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
                            favorites.map(favorite => (
                                favorite.isEditing ?
                                    <>
                                        <AddFavoriteForm favorite={favorite}/>
                                        <FavoriteItem favorite={favorite} />
                                    </>
                                    :
                                    <FavoriteItem favorite={favorite} />
                            ))
                        }
                    </List>
                </Flex>
            </Content>
        </>
    )
}

export default FavoritePage