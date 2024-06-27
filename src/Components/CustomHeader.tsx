import { Image, Flex } from 'antd'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks/hooks'
import { resetData } from '../redux/dataSlice/dataSlice'
import { resetRequest } from '../redux/searchInfoSlice/searchInfoSlice'

const CustomHeader = (): JSX.Element => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const logout = () => {
        localStorage.removeItem('token')
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
                            dispatch(resetData())
                            dispatch(resetRequest())
                        }}
                    >Поиск</NavLink>
                    <NavLink to='/favorites' style={{ height: '7vh', width: '7vw', borderColor: 'white', fontSize: '100%', textAlign: 'center' }}>Избранное</NavLink>
                </Flex>
            </Flex>
            <NavLink to='/' style={{ height: '7vh', width: '7vw', borderColor: 'white', fontSize: '1rem', padding: '0 5vw', textAlign: 'center' }} onClick={() => logout()}>Выйти</NavLink>
        </Flex>
    )
}

export default CustomHeader