import { Image, Flex, FloatButton } from 'antd'
import { PlusCircleOutlined, MoonOutlined, SunOutlined, TranslationOutlined } from '@ant-design/icons'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FC, memo, useContext, useState } from 'react'

import { resetData } from '../../redux/dataSlice/dataSlice'
import { resetRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { resetAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'

import { LanguageType, StatusType, ThemeType } from '../../App'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { AppContext, HeaderText } from '../../context/context'


type HeaderPropsType = {
    setStatus: (status: StatusType) => void,
    themeType: ThemeType,
    setTheme: (theme: ThemeType) => void,
    headerLanguage: HeaderText,
    setLanguage: (language: LanguageType) => void,
    language: LanguageType
}

const CustomHeader: FC<HeaderPropsType> = memo(({ setStatus, themeType, setTheme, headerLanguage, setLanguage, language }) => {

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
                width: '100vw',
                overflow: 'auto'
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
                            data.length !== 0 && dispatch(resetAmountValue(12))
                            setStatus('home')
                        }}
                    >{headerLanguage.search}</NavLink>
                    <NavLink
                        to='/favorites'
                        style={{
                            height: '7vh',
                            width: '7vw',
                            fontSize: '1rem',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: theme.headerButtonColor
                        }}>{headerLanguage.favorites}</NavLink>
                </Flex>
            </Flex>
            <FloatButton.Group
                open={open}
                icon={<PlusCircleOutlined />}
                onClick={() => onFloatChange(!open)}
                trigger='hover'
            >
                <FloatButton
                    icon={themeType === 'light' ? <MoonOutlined/> : <SunOutlined />}
                    onClick={() => setTheme(themeType === 'light' ? 'dark' : 'light')}
                    tooltip={<Flex>{headerLanguage.themeTooltipText}</Flex>} />
                <FloatButton
                    icon={<TranslationOutlined />}
                    onClick={() => setLanguage(language === 'eng' ? 'rus' : 'eng')}
                    tooltip={<Flex>{headerLanguage.langTooltipText}</Flex>} />
            </FloatButton.Group>
            <FloatButton.BackTop />
            <NavLink
                to='/'
                style={{
                    height: '7vh',
                    width: '7vw',
                    fontSize: '1rem',
                    padding: '0 5vw',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: theme.headerButtonColor
                }}
                onClick={() => logout()}>{headerLanguage.logout}</NavLink>
        </Flex>
    )
})

export default CustomHeader