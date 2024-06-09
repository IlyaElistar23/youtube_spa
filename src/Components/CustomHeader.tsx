import { Button, Image, Flex } from 'antd'

const CustomHeader = (): JSX.Element => {

    return (
        <Flex align='center' justify='space-between' style={{
            backgroundColor: 'white',
            width: '100%'
        }}>
            <Flex align='center' justify='center' style={{padding: '0 8%'}}>
                <Image src='../sibdev-logo.png' height='12%' width='12%'/>
                <Button style={{ height: '4.5em', width: '33%', borderColor: 'white', fontSize: '100%' }}>Поиск</Button>
                <Button style={{ height: '4.5em', width: '45%', borderColor: 'white', fontSize: '100%' }}>Избранное</Button>
            </Flex>
            <Button style={{ height: '4.5em', width: '10%', borderColor: 'white', fontSize: '100%', padding: '0 8%' }}>Выйти</Button>
        </Flex>
    )
}

export default CustomHeader