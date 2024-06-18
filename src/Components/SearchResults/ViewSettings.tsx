import { Flex, Button, ConfigProvider } from 'antd'
import { FC } from 'react'
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons'
import { ViewType } from './SearchResult'

type ViewSettingsProps = {
    setViewType: (type: ViewType) => void
}

const ViewSettings: FC<ViewSettingsProps> = ({ setViewType }) => {
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
                <Button icon={<BarsOutlined />} onClick={() => setViewType('list')}></Button>
                <Button icon={<AppstoreOutlined />} onClick={() => setViewType('grid')}></Button>
            </ConfigProvider>
        </Flex>
    )
}

export default ViewSettings