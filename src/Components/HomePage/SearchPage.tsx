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
                height: '80px',
                width: '1440x',
            }}>
                <CustomHeader />
            </Header>
            <Content>
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
                                height: '52px',
                                width: '150px',
                                borderRadius: '0 5px 5px 0',
                                fontSize: '20px'
                            }}>Найти</Button>
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Content>
        </>
    )
}

export default SearchPage