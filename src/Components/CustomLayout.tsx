import { Button, Image, Flex, ConfigProvider, Layout } from 'antd'
// import { Outlet } from 'react-router-dom'

const CustomLayout = (): JSX.Element => {

    const { Header, Content } = Layout

    return (
        <Layout>
            <Header>
                <Flex align='center' justify='space-between' style={{
                    height: '80px',
                    width: '1440x',
                    backgroundColor: 'white',
                    margin: '0 120px',
                }}>
                    <Flex align='center' justify='center'>
                        <Image src='../sibdev-logo.png' height='48px' width='48px' />
                        <Button style={{ height: '80px', width: '100px', borderColor: 'white', fontSize: '18px' }}>Поиск</Button>
                        <Button style={{ height: '80px', width: '133px', borderColor: 'white', fontSize: '18px' }}>Избранное</Button>
                    </Flex>
                    <Button style={{ height: '80px', width: '100px', borderColor: 'white', fontSize: '18px' }}>Выйти</Button>
                </Flex>
            </Header>
            <Content>
                {/* <Outlet /> */}
            </Content>
        </Layout>
    )
}

export default CustomLayout