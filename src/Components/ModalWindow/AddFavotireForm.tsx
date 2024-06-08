import { Modal, Typography, Input, Button, Slider, Flex, ConfigProvider, InputNumber, Select } from 'antd'
import { ConfigConsumer } from 'antd/es/config-provider'

const AddFavoriteForm = (): JSX.Element => {

    const { Text } = Typography
    return (
        <Flex style={{ border: '1px solid', borderRadius: '10px', width: '510px', height: '573px' }}>
            <Flex vertical style={{ padding: '0 40px' }}>
                <Text style={{ textAlign: 'center', marginTop: '36px', fontSize: '18px', fontWeight: 'bold' }}>Сохранить запрос</Text>
                <Flex vertical>
                    <Text style={{ fontSize: '16px', marginTop: '36px' }}>Запрос</Text>
                    <Input disabled style={{ width: '430px', height: '48px', borderRadius: '5px', border: '1px solid #1717191A', fontSize: '20px' }} />
                </Flex>
                <Flex vertical>
                    <Text style={{ fontSize: '16px', marginTop: '24px' }}>Название</Text>
                    <Input placeholder='Укажите название' style={{ width: '430px', height: '48px', borderRadius: '5px', border: '1px solid #1717191A', fontSize: '20px' }} />
                </Flex>
                <Flex vertical>
                    <Text style={{ fontSize: '16px', marginTop: '24px' }}>Сортировать по</Text>
                    <Select placeholder='Без сортировки' style={{ width: '430px', height: '48px', borderRadius: '5px', border: '1px solid #1717191A', fontSize: '20px' }} />
                </Flex>
                <Flex vertical>
                    <Text style={{ fontSize: '16px', marginTop: '24px' }}>Максимальное количество</Text>
                    <Flex align='center'>
                        <Slider min={0} max={50} style={{ width: '310px', height: '18px' }} />
                        <ConfigProvider
                            theme={{
                                components: {
                                    InputNumber: {
                                        paddingInline: 40,
                                        paddingBlock: 6
                                    }
                                }
                            }}
                        >
                            <InputNumber min={0} max={50} style={{ width: '100px', height: '48px', marginLeft: '10px', fontSize: '20px' }} />
                        </ConfigProvider>
                    </Flex>
                </Flex>
                <Flex align='center' justify='center' style={{ marginTop: '31px' }}>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultBg: 'white',
                                    defaultBorderColor: '#1390E5',
                                    defaultColor: '#1390E5',
                                    defaultHoverColor: 'red',
                                    defaultHoverBorderColor: 'red'
                                }
                            }
                        }}
                    >
                        <Button style={{ width: '210px', height: '52px', borderWidth: '1px', fontSize: '20px', margin: '5px' }}>Не сохранять</Button>
                    </ConfigProvider>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultBg: '#1390E5',
                                    defaultBorderColor: '#1390E5',
                                    defaultColor: 'white'
                                }
                            }
                        }}
                    >
                        <Button style={{ width: '210px', height: '52px', borderWidth: '1px', fontSize: '20px', margin: '5px' }}>Сохранить</Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default AddFavoriteForm