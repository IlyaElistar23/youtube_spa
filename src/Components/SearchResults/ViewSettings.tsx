import { Flex, Button, ConfigProvider } from 'antd'
import { FC, memo, useContext } from 'react'
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons'
import { ViewType } from './SearchResult'
import { AppContext } from '../../context/context'

type ViewSettingsProps = {
    setViewType: (type: ViewType) => void
}

const ViewSettings: FC<ViewSettingsProps> = memo(({ setViewType }) => {

    const theme = useContext(AppContext)

    return (
        <Flex>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultBorderColor: theme.bgColor,
                            defaultHoverBorderColor: theme.bgColor,
                            defaultBg: theme.bgColor,
                            defaultHoverBg: theme.bgColor,
                            defaultColor: theme.textColor
                        }
                    }
                }}
            >
                <Button icon={<BarsOutlined />} onClick={() => setViewType('list')}></Button>
                <Button icon={<AppstoreOutlined />} onClick={() => setViewType('grid')}></Button>
            </ConfigProvider>
        </Flex>
    )
})

export default ViewSettings