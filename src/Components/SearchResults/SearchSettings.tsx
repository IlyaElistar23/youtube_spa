import { Flex, Input, Typography, Button, ConfigProvider } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { FC, ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { api_key } from '../../api_key'
import { resetData } from '../../redux/dataSlice/dataSlice'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'

type SearchSettingsType = {
    getData: (text: string, api_key: string) => void
}

const SearchSettings: FC<SearchSettingsType> = ({ getData }) => {

    const { Text } = Typography

    const info = useAppSelector(state => state.info.text)
    const dispatch = useAppDispatch()

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
                            <Button
                                icon={<LikeOutlined />}
                                onClick={() => {
                                    dispatch(setIsOpen(true))
                                }}
                            ></Button>
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
                    <Button
                        style={{
                            height: '4vh',
                            width: '7vw',
                            borderRadius: '0 5px 5px 0',
                            fontSize: '1.2rem'
                        }}
                        onClick={() => {
                            dispatch(resetData())
                            getData(info, api_key)
                        }}
                    >Найти</Button>
                </ConfigProvider>
            </Flex>
        </Flex>
    )
}

export default SearchSettings