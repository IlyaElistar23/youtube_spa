import { Flex, Typography, Input, Button, ConfigProvider } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { FC, ChangeEvent } from 'react'
import { api_key } from '../../api_key'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'

export type BaseSearchPropsType = {
    getData: (text: string, api_key: string) => void
}

const BaseSearch: FC<BaseSearchPropsType> = ({ getData }) => {

    const { Text } = Typography
    const info = useAppSelector(state => state.info.text)
    const dispatch = useAppDispatch()

    return (
        <Flex vertical style={{ padding: '13vh 0 0 0' }}>
            <Text style={{
                fontSize: '2rem',
                marginLeft: '43vw'
            }}>Поиск видео</Text>
            <Flex align='center' justify='center' style={{
                marginTop: '5vh'
            }}>
                <Input
                    value={info}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(addRequest(e.target.value))}
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
                        width: '48vw',
                        height: '5vh',
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
                    <Button
                        style={{
                            height: '5vh',
                            width: '10vw',
                            borderRadius: '0 5px 5px 0',
                            fontSize: '1.2rem'
                        }}
                        onClick={() => getData(info, api_key)}
                    >Найти</Button>
                </ConfigProvider>
            </Flex>
        </Flex>
    )
}

export default BaseSearch