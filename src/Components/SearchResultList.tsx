import { Image, Typography, List, Flex, Button, ConfigProvider } from 'antd'
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons'
import { data } from './data'
import { NavLink } from 'react-router-dom'
import FindItem from './FindItem'

const SearchResultList = (): JSX.Element => {

    const { Item } = List
    const { Text } = Typography

    return (
        <Flex vertical align='flex-start' style={{ marginTop: '40px', marginLeft: '200px', backgroundColor: '#FAFAFA' }}>
            <Flex justify='space-between' align='center' style={{ width: '840px' }}>
                <Flex align='center' justify='center'>
                    <Text style={{ fontSize: '16px' }}>Видео по запросу "{ }"</Text>
                    <Text style={{ fontSize: '16px', color: '#1717194D', marginLeft: '15px' }}>7230</Text>
                </Flex>
                <Flex>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultBorderColor: 'white',
                                    defaultHoverBorderColor: 'white',
                                }
                            }
                        }}
                    >
                        <Button icon={<BarsOutlined />}></Button>
                        <Button icon={<AppstoreOutlined />}></Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
            <Flex vertical style={{ marginTop: '20px' }}>
                {
                    data.map(item => (
                        <List>
                            <FindItem item={item}/>
                        </List>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default SearchResultList