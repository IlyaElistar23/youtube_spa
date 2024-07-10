import { Image, Flex } from 'antd'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { resetData } from '../redux/dataSlice/dataSlice'
import { resetRequest } from '../redux/searchInfoSlice/searchInfoSlice'
import { resetAmountValue } from '../redux/requestAmountSlice/requestAmountSlice'
import { StatusType } from '../App'
import { FC, memo } from 'react'

type HeaderPropsType = {
    setStatus: (status: StatusType) => void
}

const CustomHeader: FC<HeaderPropsType> = memo(({ setStatus }) => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const info = useAppSelector(state => state.info.text)
    const data = useAppSelector(state => state.data)

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(resetData())
        dispatch(resetRequest())
        dispatch(resetAmountValue(12))
        setStatus('home')
        navigate('/')
    }

    return (
        <Flex align='center' justify='space-between' style={{
            backgroundColor: 'white',
            width: '100vw'
        }}>
            <Flex align='center' justify='space-between' style={{ padding: '0 10vw', width: '20vw' }}>
                <Image src='../sibdev-logo.png' height='7vh' width='7vh' style={{ margin: '0 2vw' }} />
                <Flex align='center' justify='center' style={{ margin: '0 5vw' }}>
                    <NavLink
                        to='/search'
                        style={{
                            height: '7vh',
                            width: '7vw',
                            borderColor: 'white',
                            fontSize: '1rem',
                            textAlign: 'center'
                        }}
                        onClick={() => {
                            data.length !== 0 && dispatch(resetData())
                            info.length !== 0 && dispatch(resetRequest())
                            dispatch(resetAmountValue(12))
                            setStatus('home')
                        }}
                    >Search</NavLink>
                    <NavLink to='/favorites' style={{ height: '7vh', width: '7vw', borderColor: 'white', fontSize: '100%', textAlign: 'center' }}>Favorites</NavLink>
                </Flex>
            </Flex>
            <NavLink to='/' style={{ height: '7vh', width: '7vw', borderColor: 'white', fontSize: '1rem', padding: '0 5vw', textAlign: 'center' }} onClick={() => logout()}>Log Out</NavLink>
        </Flex>
    )
})

export default CustomHeader