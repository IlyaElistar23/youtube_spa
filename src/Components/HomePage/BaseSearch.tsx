import { Flex, Typography, Input, Button, ConfigProvider } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { FC, ChangeEvent, useContext } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { AppContext, ModalWindowText, SearchPageText } from '../../context/context'
import { emptyField } from '../SearchResults/functions/emptyField'

import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { resetAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'

import AddFavoriteForm from '../ModalWindow/AddFavotireForm'


type BaseSearchPropsType = {
    getData: (text: string, order: string, amount: number) => void,
    searchPageLanguage: SearchPageText | undefined,
    modalWindowLanguage: ModalWindowText,
    requestInput: any,
    onMessage: any
}

const BaseSearch: FC<BaseSearchPropsType> = ({ getData, searchPageLanguage, modalWindowLanguage, requestInput, onMessage }) => {

    const { Text } = Typography
    const info = useAppSelector(state => state.info.text)
    const order = useAppSelector(state => state.select.order)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const dispatch = useAppDispatch()

    const theme = useContext(AppContext)

    return (
        <Flex vertical style={{ padding: '13vh 0 0 0' }}>
            <Text style={{
                fontSize: '2rem',
                marginLeft: '43vw',
                color: theme.textColor
            }}>{searchPageLanguage?.title}</Text>
            <Flex align='center' justify='center' style={{
                marginTop: '5vh'
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
                        ref={requestInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(addRequest(e.target.value))}
                        onPressEnter={() => {
                            if (emptyField(info)) {
                                onMessage(searchPageLanguage?.message, 'error')
                                requestInput.current?.focus()
                            } else {
                                getData(info, order, amount)
                            }
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
                                        if (emptyField(info)) {
                                            onMessage(searchPageLanguage?.message, 'error')
                                            requestInput.current?.focus()
                                        } else {
                                            dispatch(setIsOpen(true))
                                        }
                                        if (amount !== 12) {
                                            dispatch(resetAmountValue(12))
                                        }
                                    }}
                                >
                                </Button>
                            </ConfigProvider>
                        }
                        style={{
                            width: '48vw',
                            height: '5vh',
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
                            height: '5vh',
                            width: '10vw',
                            borderRadius: '0 5px 5px 0',
                            fontSize: '1.2rem'
                        }}
                        onClick={() => {
                            if (emptyField(info)) {
                                onMessage(searchPageLanguage?.message, 'error')
                                requestInput.current?.focus()
                            } else {
                                getData(info, order, amount)
                            }
                        }}
                    >{searchPageLanguage?.button}</Button>
                </ConfigProvider>
            </Flex>
            <AddFavoriteForm modalWindowLanguage={modalWindowLanguage} onMessage={onMessage} />
        </Flex>
    )
}

export default BaseSearch