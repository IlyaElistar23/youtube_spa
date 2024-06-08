import { Flex, Button, ConfigProvider } from 'antd'
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons'

const ViewSettings = (): JSX.Element => {
    return (
        <Flex>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultBorderColor: '#FAFAFA',
                            defaultHoverBorderColor: '#FAFAFA',
                            defaultBg: '#FAFAFA',
                            defaultHoverBg: '#FAFAFA'
                        }
                    }
                }}
            >
                <Button icon={<BarsOutlined />}></Button>
                <Button icon={<AppstoreOutlined />}></Button>
            </ConfigProvider>
        </Flex>
    )
}

export default ViewSettings