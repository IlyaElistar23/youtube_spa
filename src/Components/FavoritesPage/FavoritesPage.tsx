import { Typography, Flex, List, Layout } from 'antd'
import FavoriteItem from './FavoriteItem'
import CustomHeader from '../CustomHeader'
import { useAppSelector } from '../../redux/hooks/hooks'
import { useEffect, FC, useContext } from 'react'
import AddFavoriteForm from '../ModalWindow/AddFavotireForm'
// import { StatusType } from '../../App'
import checkAuth from '../HOC/checkAuth'
import { PropsType } from '../HomePage/SearchPage'
import { AppContext } from '../../context/context'

export type SavedType = {
    request: string,
    title: string,
    sort: string,
    maxAmount: number
}

const FavoritePage: FC<PropsType> = ({ getData, setStatus, themeType, setTheme, headerLanguage, setLanguage, language, favoritesPageLanguage, modalWindowLanguage }) => {

    const { Text } = Typography
    const { Header, Content } = Layout
    const favorites = useAppSelector(state => state.favorites)
    const theme = useContext(AppContext)

    useEffect(() => {
        localStorage.setItem(`favorites`, JSON.stringify(favorites))
    }, [favorites])

    return (
        <>
            <Header
                style={{
                    backgroundColor: theme.headerColor,
                    padding: 0,
                    height: '8vh',
                    width: '100vw',
                }}>
                <CustomHeader setStatus={setStatus} themeType={themeType} setTheme={setTheme} headerLanguage={headerLanguage} setLanguage={setLanguage} language={language}/>
            </Header>
            <Content style={{ backgroundColor: theme.bgColor, minHeight: '92vh' }}>
                <Flex vertical align='flex-start' justify='center' style={{ paddingLeft: '14vw', paddingTop: '9vh' }}>
                    <Text style={{ fontSize: '2rem', color: theme.textColor }}>{favoritesPageLanguage?.title}</Text>
                    <List style={{ marginTop: '4vh' }}>
                        {
                            favorites.map(favorite => (
                                favorite.isEditing ?
                                    <>
                                        <AddFavoriteForm favorite={favorite} modalWindowLanguage={modalWindowLanguage}/>
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