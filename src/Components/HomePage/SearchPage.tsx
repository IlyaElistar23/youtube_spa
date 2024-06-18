import { Button, Input, Typography, Flex, ConfigProvider, Layout } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import CustomHeader from '../CustomHeader'

const SearchPage = (): JSX.Element => {

    const { Text } = Typography
    const { Header, Content } = Layout

    return (
        <>
            <Header style={{
                backgroundColor: 'white',
                padding: 0,
                height: '8vh',
                width: '100vw',
            }}>
                <CustomHeader />
            </Header>
            <Content>
                <Flex vertical style={{
                    backgroundColor: '#FAFAFA',
                    minHeight: '79vh',
                    width: '100vw',
                    textAlign: 'center',
                    padding: '13vh 0 0 0'
                }}>
                    <Text style={{
                        fontSize: '2rem',
                    }}>Поиск видео</Text>
                    <Flex align='center' justify='center' style={{
                        marginTop: '5vh'
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
                                width: '48vw',
                                height: '5vh',
                                fontSize: '1.1rem',
                                color: '#272727',
                                borderRadius: '5px 0 0 5px'
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
                                height: '5vh',
                                width: '10vw',
                                borderRadius: '0 5px 5px 0',
                                fontSize: '1.2rem'
                            }}>Найти</Button>
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Content>
        </>
    )
}

export default SearchPage