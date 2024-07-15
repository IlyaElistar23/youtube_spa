import { Flex, Typography, Input, Button, ConfigProvider } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { FC, ChangeEvent, useContext } from 'react'
import { api_key } from '../../api_key'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import AddFavoriteForm from '../ModalWindow/AddFavotireForm'
import { resetAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'
import { AppContext, ModalWindowText, SearchPageText } from '../../context/context'

type BaseSearchPropsType = {
    getData: (text: string, api_key: string, order: string, amount: number) => void,
    searchPageLanguage: SearchPageText | undefined,
    modalWindowLanguage: ModalWindowText
}

const BaseSearch: FC<BaseSearchPropsType> = ({ getData, searchPageLanguage, modalWindowLanguage }) => {

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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(addRequest(e.target.value))}
                        onPressEnter={() => {
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
                                        dispatch(setIsOpen(true))
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
                            getData(info, api_key, order, amount)
                        }}
                    >{searchPageLanguage?.button}</Button>
                </ConfigProvider>
            </Flex>
            <AddFavoriteForm modalWindowLanguage={modalWindowLanguage}/>
        </Flex>
    )
}

export default BaseSearch