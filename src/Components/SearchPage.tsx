import { Button, Input, Image, Typography, Flex, ConfigProvider } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const SearchPage = (): JSX.Element => {

    const { Text } = Typography

    return (
        <Flex vertical>
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
            <Flex vertical style={{
                backgroundColor: '#FAFAFA',
                height: '720px',
                width: '1440px',
                textAlign: 'center'
            }}>
                <Text style={{
                    marginTop: '220px',
                    fontSize: '36px',
                }}>Поиск видео</Text>
                <Flex align='center' justify='center' style={{
                    marginTop: '40px'
                }}>
                    <Input
                        placeholder='Что хотите посмотреть?'
                        suffix={
                            <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        defaultBorderColor: 'white',
                                        defaultHoverBorderColor: 'white'
                                    }
                                }
                            }}
                            >
                                <Button icon={<LikeOutlined />}></Button>
                            </ConfigProvider>
                        }
                        style={{
                            width: '686px',
                            height: '52px',
                            fontSize: '20px',
                            color: '#272727',
                            borderRadius: '10px 0 0 10px'
                        }} />
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultColor: 'white',
                                    defaultBg: '#35A2EC',
                                    defaultBorderColor: '#35A2EC',
                                    defaultHoverBorderColor: '#35A2EC',
                                    defaultHoverColor: '#35A2EC'
                                }
                            }
                        }}
                    >
                        <Button style={{
                            height: '52px',
                            width: '150px',
                            borderRadius: '0 10px 10px 0',
                            fontSize: '20px'
                        }}>Найти</Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SearchPage