import { Button, Image, Flex } from 'antd'
import { NavLink } from 'react-router-dom'

const CustomHeader = (): JSX.Element => {

    return (
        <Flex align='center' justify='space-between' style={{
            backgroundColor: 'white',
            width: '100%'
        }}>
            <Flex align='center' justify='space-between' style={{ padding: '0 10%', width: '20%' }}>
                <Image src='../sibdev-logo.png' height='20%' width='20%' style={{ margin: '0 2%' }} />
                <Flex align='center' justify='center' style={{marginRight: '20%'}}>
                    <NavLink to='/search' style={{ height: '4.5em', width: '33%', borderColor: 'white', fontSize: '100%', margin: '0 15%' }}>Поиск</NavLink>
                    <NavLink to='/favorites' style={{ height: '4.5em', width: '45%', borderColor: 'white', fontSize: '100%', margin: '0 15%' }}>Избранное</NavLink>
                </Flex>
            </Flex>
            <NavLink to='/' style={{ height: '4.5em', width: '10%', borderColor: 'white', fontSize: '100%', padding: '0 5%', textAlign: 'center' }}>Выйти</NavLink>
        </Flex>
    )
}

export default CustomHeader