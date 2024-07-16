import { Flex, Input, Typography, Button, ConfigProvider } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

import { FC, ChangeEvent, memo, useContext } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { api_key } from '../../api_key'
import { AppContext, SearchPageText } from '../../context/context'

import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { resetData } from '../../redux/dataSlice/dataSlice'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { resetAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'


type SearchSettingsPropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void,
    searchPageLanguage: SearchPageText | undefined,
    requestInput: any,
    onMessage: any
}

const SearchSettings: FC<SearchSettingsPropsType> = memo(({ getData, searchPageLanguage, requestInput, onMessage }) => {

    const { Text } = Typography

    const info = useAppSelector(state => state.info.text)
    const order = useAppSelector(state => state.select.order)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const dispatch = useAppDispatch()

    const theme = useContext(AppContext)

    return (
        <Flex vertical style={{
            padding: '5vh 0'
        }}>
            <Text style={{
                fontSize: '1.5rem',
                textAlign: 'left',
                color: theme.textColor
            }}>{searchPageLanguage?.title}</Text>
            <Flex style={{
                paddingTop: '2vh'
            }}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorTextPlaceholder: theme.placeholderColor,
                            colorBorder: theme.defaultBorderColor
                        }
                    }}
                >
                    <Input
                        value={info}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(addRequest(e.target.value))}
                        onPressEnter={() => {
                            dispatch(resetAmountValue(12))
                            dispatch(resetData())
                            getData(info, api_key, order, amount)
                        }}
                        placeholder={searchPageLanguage?.placeholder}
                        suffix={
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            defaultBorderColor: theme.headerColor,
                                            defaultHoverBorderColor: theme.headerColor,
                                            defaultBg: theme.headerColor,
                                            defaultHoverBg: theme.headerColor,
                                            defaultColor: theme.subTitleColor
                                        }
                                    }
                                }}
                            >
                                <Button
                                    icon={<HeartOutlined />}
                                    onClick={() => {
                                        if (info.length === 0) {
                                            onMessage(searchPageLanguage?.message, 'error')
                                            requestInput.current?.focus()
                                        } else {
                                            dispatch(setIsOpen(true))
                                        }
                                        if (amount !== 12) {
                                            dispatch(resetAmountValue(12))
                                        }
                                    }}
                                ></Button>
                            </ConfigProvider>
                        }
                        style={{
                            width: '69vw',
                            height: '4vh',
                            fontSize: '1.1rem',
                            color: theme.textColor,
                            backgroundColor: theme.headerColor,
                            borderRadius: '5px 0 0 5px'
                        }} />
                </ConfigProvider>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                defaultColor: theme.searchButtonDefaultTextColor,
                                defaultBg: theme.searchButtonDefaultBgColor,
                                defaultBorderColor: theme.searchButtonDefaultBorderColor,
                                defaultHoverBorderColor: theme.searchButtonActiveBorderColor,
                                defaultHoverColor: theme.searchButtonActiveTextColor,
                                defaultHoverBg: theme.searchButtonActiveBgColor
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
                            if (info.length === 0) {
                                onMessage(searchPageLanguage?.message, 'error')
                            } else {
                                dispatch(resetAmountValue(12))
                                dispatch(resetData())
                                getData(info, api_key, order, amount)
                            }
                        }}
                    >{searchPageLanguage?.button}</Button>
                </ConfigProvider>
            </Flex>
        </Flex>
    )
})

export default SearchSettings