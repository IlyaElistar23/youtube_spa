import { Image, Flex, FloatButton } from 'antd'
import { PlusCircleOutlined, MoonOutlined, SunOutlined, TranslationOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { resetData } from '../redux/dataSlice/dataSlice'
import { resetRequest } from '../redux/searchInfoSlice/searchInfoSlice'
import { resetAmountValue } from '../redux/requestAmountSlice/requestAmountSlice'
import { StatusType, ThemeType } from '../App'
import { FC, memo, useContext, useState } from 'react'
import { AppContext } from '../context/context'

type HeaderPropsType = {
    setStatus: (status: StatusType) => void,
    themeType: ThemeType,
    setTheme: (theme: ThemeType) => void
}

const CustomHeader: FC<HeaderPropsType> = memo(({ setStatus, themeType, setTheme }) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const info = useAppSelector(state => state.info.text)
    const data = useAppSelector(state => state.data)

    const theme = useContext(AppContext)

    const [open, setOpen] = useState(false)

    const onFloatChange = (checked: boolean) => setOpen(checked)

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(resetData())
        dispatch(resetRequest())
        dispatch(resetAmountValue(12))
        setStatus('home')
        navigate('/')
    }

    return (
        <Flex align='center' justify='space-between'
            style={{
                backgroundColor: theme.headerColor,
                width: '100vw'
            }}>
            <Flex align='center' justify='space-between' style={{ padding: '0 10vw', width: '20vw' }}>
                <Image src='../sibdev-logo.png' height='7vh' width='7vh' />
                <Flex align='center' justify='center' >
                    <NavLink
                        to='/search'
                        style={{
                            height: '7vh',
                            width: '7vw',
                            borderColor: theme.headerColor,
                            fontSize: '1rem',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: theme.headerButtonColor
                        }}
                        onClick={() => {
                            data.length !== 0 && dispatch(resetData())
                            info.length !== 0 && dispatch(resetRequest())
                            dispatch(resetAmountValue(12))
                            setStatus('home')
                        }}
                    >Search</NavLink>
                    <NavLink to='/favorites' style={{ height: '7vh', width: '7vw', fontSize: '100%', textAlign: 'center', fontWeight: 'bold', color: theme.headerButtonColor }}>Favorites</NavLink>
                </Flex>
            </Flex>
            <FloatButton.Group
                open={open}
                icon={<PlusCircleOutlined />}
                onClick={() => onFloatChange(!open)}
                trigger='hover'
            >
                <FloatButton icon={themeType === 'light' ? <SunOutlined /> : <MoonOutlined />} onClick={() => setTheme(themeType === 'light' ? 'dark' : 'light')} />
                <FloatButton icon={<TranslationOutlined />} />
            </FloatButton.Group>
            <NavLink to='/' style={{ height: '7vh', width: '7vw', fontSize: '1rem', padding: '0 5vw', textAlign: 'center', fontWeight: 'bold', color: theme.headerButtonColor }} onClick={() => logout()}>Log Out</NavLink>
        </Flex>
    )
})

export default CustomHeader