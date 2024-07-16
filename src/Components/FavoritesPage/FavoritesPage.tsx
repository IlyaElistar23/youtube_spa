import { Typography, Flex, List, Layout, Empty, Button, ConfigProvider } from 'antd'
import { useEffect, FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks/hooks'

import FavoriteItem from './FavoriteItem'
import CustomHeader from '../CustomHeader'
import AddFavoriteForm from '../ModalWindow/AddFavotireForm'
import checkAuth from '../HOC/checkAuth'

import { PropsType } from '../HomePage/SearchPage'
import { AppContext } from '../../context/context'

export type SavedType = {
    request: string,
    title: string,
    sort: string,
    maxAmount: number
}

const FavoritePage: FC<PropsType> = ({
    getData,
    setStatus,
    themeType,
    setTheme,
    headerLanguage,
    setLanguage,
    language,
    favoritesPageLanguage,
    modalWindowLanguage,
    contextHolder,
    onMessage
}) => {

    const { Text } = Typography
    const { Header, Content } = Layout

    const favorites = useAppSelector(state => state.favorites)
    const theme = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem(`favorites`, JSON.stringify(favorites))
    }, [favorites])

    return (
        <>
            {contextHolder}
            <Header
                style={{
                    backgroundColor: theme.headerColor,
                    padding: 0,
                    height: '8vh',
                    width: '100vw',
                }}>
                <CustomHeader setStatus={setStatus} themeType={themeType} setTheme={setTheme} headerLanguage={headerLanguage} setLanguage={setLanguage} language={language} />
            </Header>
            <Content style={{ backgroundColor: theme.bgColor, minHeight: '92vh' }}>
                <Flex vertical align='flex-start' justify='center' style={{ paddingLeft: '14vw', paddingTop: '9vh' }}>
                    <Text style={{ fontSize: '2rem', color: theme.textColor }}>{favoritesPageLanguage?.title}</Text>
                    <List style={{ marginTop: '4vh' }}>
                        {
                            favorites.length !== 0 ? favorites.map(favorite => (
                                favorite.isEditing ?
                                    <>
                                        <AddFavoriteForm favorite={favorite} modalWindowLanguage={modalWindowLanguage} onMessage={onMessage} />
                                        <FavoriteItem key={favorite.id} favorite={favorite} getData={getData} onMessage={onMessage} />
                                    </>
                                    :
                                    <FavoriteItem key={favorite.id} favorite={favorite} getData={getData} onMessage={onMessage} />
                            )) :
                                <Flex align='center' justify='center' style={{ width: '75vw' }}>
                                    <Empty
                                        description={
                                            <Text style={{ color: theme.textColor }}>
                                                {favoritesPageLanguage?.emptyDescription}
                                            </Text>
                                        }
                                    >
                                        <ConfigProvider
                                            theme={{
                                                components: {
                                                    Button: {
                                                        defaultColor: theme.searchButtonDefaultTextColor,
                                                        defaultBg: theme.searchButtonDefaultBgColor,
                                                        defaultBorderColor: theme.searchButtonDefaultBorderColor,
                                                        defaultHoverBorderColor: theme.searchButtonActiveBorderColor,
                                                        defaultHoverColor: theme.searchButtonActiveTextColor,
                                                        defaultHoverBg: theme.searchButtonActiveBgColor
                                                    }
                                                }
                                            }}
                                        >
                                            <Button
                                                onClick={() => navigate('/search')}
                                            >
                                                {favoritesPageLanguage?.emptyButton}
                                            </Button>
                                        </ConfigProvider>
                                    </Empty>
                                </Flex>
                        }
                    </List>
                </Flex>
            </Content>
        </>
    )
}

export default checkAuth(FavoritePage)