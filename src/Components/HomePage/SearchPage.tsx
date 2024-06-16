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
                height: '10%',
                width: '100%',
            }}>
                <CustomHeader />
            </Header>
            <Content>
                <Flex vertical style={{
                    backgroundColor: '#FAFAFA',
                    height: '90%',
                    width: '100%',
                    textAlign: 'center',
                    padding: '13% 0 22% 0'
                }}>
                    <Text style={{
                        margin: '0 0',
                        fontSize: '200%',
                    }}>Поиск видео</Text>
                    <Flex align='center' justify='center' style={{
                        marginTop: '3%'
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
                                width: '48%',
                                height: '7%',
                                fontSize: '111%',
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
                                height: '7%',
                                width: '10%',
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