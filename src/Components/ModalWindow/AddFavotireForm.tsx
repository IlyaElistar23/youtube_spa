import { Modal, Typography, Input, Button, Slider, Flex, ConfigProvider, InputNumber, Select } from 'antd'

const AddFavoriteForm = (): JSX.Element => {

    const { Text } = Typography
    return (
            <Flex style={{ borderRadius: '10px', width: '30%', height: '60%', backgroundColor: 'white' }}>
                <Flex vertical justify='center' style={{ padding: '0 3%', marginLeft: '12%' }}>
                    <Text style={{ textAlign: 'center', marginTop: '7%', fontSize: '100%', fontWeight: 'bold' }}>Сохранить запрос</Text>
                    <Flex vertical>
                        <Text style={{ fontSize: '80%', marginTop: '7%' }}>Запрос</Text>
                        <Input disabled style={{ width: '100%', height: '100%', borderRadius: '5px', border: '1px solid #1717191A', fontSize: '111%' }} />
                    </Flex>
                    <Flex vertical>
                        <Text style={{ fontSize: '80%', marginTop: '3.5%' }}>Название</Text>
                        <Input placeholder='Укажите название' style={{ width: '100%', height: '100%', borderRadius: '5px', border: '1px solid #1717191A', fontSize: '111%' }} />
                    </Flex>
                    <Flex vertical>
                        <Text style={{ fontSize: '80%', marginTop: '3.5%' }}>Сортировать по</Text>
                        <Select placeholder='Без сортировки' style={{ width: '100%', height: '100%', borderRadius: '5px', border: '1px solid #1717191A', fontSize: '20px' }} />
                    </Flex>
                    <Flex vertical>
                        <Text style={{ fontSize: '16px', marginTop: '24px' }}>Максимальное количество</Text>
                        <Flex align='center'>
                            <Slider min={0} max={50} style={{ width: '70%', height: '3.5%' }} />
                            <ConfigProvider
                                theme={{
                                    components: {
                                        InputNumber: {
                                            paddingInline: 30,
                                            paddingBlock: 6
                                        }
                                    }
                                }}
                            >
                                <InputNumber min={0} max={50} style={{ width: '30%', height: '100%', marginLeft: '1%', fontSize: '100%' }} />
                            </ConfigProvider>
                        </Flex>
                    </Flex>
                    <Flex align='center' justify='space-between' style={{ margin: '7% 0', }}>
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
                            <Button style={{ width: '49%', height: '100%', borderWidth: '1px', fontSize: '111%', margin: '1%' }}>Не сохранять</Button>
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
                            <Button style={{ width: '49%', height: '100%', borderWidth: '1px', fontSize: '111%' }}>Сохранить</Button>
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Flex>
    )
}
export default AddFavoriteForm