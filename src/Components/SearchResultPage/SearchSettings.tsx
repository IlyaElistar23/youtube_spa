import { Typography, Input, Button, Flex, ConfigProvider } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const SearchSettings = (): JSX.Element => {
    const { Text } = Typography
    return (
        <Flex vertical>
            <Text style={{
                fontSize: '140%',
                marginTop: '4%'
            }}>Поиск видео</Text>
            <Flex align='center' style={{ marginTop: '1.5%'}}>
                <Input
                    placeholder='Что хотите посмотреть?'
                    style={{
                        width: '80%',
                        height: '7%',
                        borderRadius: '5px 0 0 5px',
                        fontSize: '111%'
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
                                height: '7%',
                                width: '10%',
                                borderRadius: '0 5px 5px 0',
                                fontSize: '125% '
                            }}>Найти</Button>
                        </ConfigProvider>
            </Flex>
        </Flex>
    )
}

export default SearchSettings