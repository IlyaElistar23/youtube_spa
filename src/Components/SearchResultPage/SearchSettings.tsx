import { Typography, Input, Button, Flex, ConfigProvider } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const SearchSettings = (): JSX.Element => {
    const { Text } = Typography
    return (
        <Flex vertical>
            <Text style={{
                fontSize: '28px',
                marginTop: '40px'
            }}>Поиск видео</Text>
            <Flex align='center' style={{ marginTop: '12px'}}>
                <Input
                    placeholder='Что хотите посмотреть?'
                    style={{
                        width: '890px',
                        height: '52px',
                        borderRadius: '5px 0 0 5px',
                        fontSize: '20px'
                    }}
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
                    } />
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
    )
}

export default SearchSettings