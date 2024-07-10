import { Typography, Flex, List, Layout } from 'antd'
import FavoriteItem from './FavoriteItem'
import CustomHeader from '../CustomHeader'
import { useAppSelector } from '../../redux/hooks/hooks'
import { useEffect, FC } from 'react'
import AddFavoriteForm from '../ModalWindow/AddFavotireForm'
// import { StatusType } from '../../App'
import checkAuth from '../HOC/checkAuth'
import { PropsType } from '../HomePage/SearchPage'

export type SavedType = {
    request: string,
    title: string,
    sort: string,
    maxAmount: number
}

// type FavPropsType = {
//     getData: (text: string, api_key: string, order: string, amount: number) => void,
//     setStatus: (status: StatusType) => void
// }


const FavoritePage: FC<PropsType> = ({ getData, setStatus }) => {

    const { Text } = Typography
    const { Header, Content } = Layout
    const favorites = useAppSelector(state => state.favorites)

    useEffect(() => {
        localStorage.setItem(`favorites`, JSON.stringify(favorites))
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
                <CustomHeader setStatus={setStatus} />
            </Header>
            <Content style={{ backgroundColor: '#FAFAFA', minHeight: '92vh' }}>
                <Flex vertical align='flex-start' justify='center' style={{ paddingLeft: '14vw', paddingTop: '9vh' }}>
                    <Text style={{ fontSize: '2rem' }}>Избранное</Text>
                    <List style={{ marginTop: '4vh' }}>
                        {
                            favorites.map(favorite => (
                                favorite.isEditing ?
                                    <>
                                        <AddFavoriteForm favorite={favorite} />
                                        <FavoriteItem key={favorite.id} favorite={favorite} getData={getData} />
                                    </>
                                    :
                                    <FavoriteItem key={favorite.id} favorite={favorite} getData={getData} />
                            ))
                        }
                    </List>
                </Flex>
            </Content>
        </>
    )
}

export default checkAuth(FavoritePage)