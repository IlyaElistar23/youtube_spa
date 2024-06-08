import { Button, Image, Flex } from 'antd'

const CustomHeader = (): JSX.Element => {

    return (
        <Flex align='center' justify='space-between' style={{
            backgroundColor: 'white',
            width: '1440px'
        }}>
            <Flex align='center' justify='center' style={{padding: '0 120px'}}>
                <Image src='../sibdev-logo.png' height='48px' width='48px' style={{paddingBottom: '10px'}}/>
                <Button style={{ height: '80px', width: '100px', borderColor: 'white', fontSize: '18px' }}>Поиск</Button>
                <Button style={{ height: '80px', width: '133px', borderColor: 'white', fontSize: '18px' }}>Избранное</Button>
            </Flex>
            <Button style={{ height: '80px', width: '100px', borderColor: 'white', fontSize: '18px', padding: '0 120px' }}>Выйти</Button>
        </Flex>
    )
}

export default CustomHeader