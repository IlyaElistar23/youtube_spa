import { Flex, Input, Typography, Button, ConfigProvider } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const SearchSettings = (): JSX.Element => {

    const { Text } = Typography

    return (
        <Flex vertical style={{
            padding: '5vh 0'
        }}>
            <Text style={{
                fontSize: '1.5rem',
                textAlign: 'left'
            }}>Поиск видео</Text>
            <Flex style={{
                paddingTop: '2vh'
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
                        width: '69vw',
                        height: '4vh',
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
                        height: '4vh',
                        width: '7vw',
                        borderRadius: '0 5px 5px 0',
                        fontSize: '1.2rem'
                    }}>Найти</Button>
                </ConfigProvider>
            </Flex>
        </Flex>
    )
}

export default SearchSettings