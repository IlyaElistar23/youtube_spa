import { Modal, Typography, Input, Button, Slider, Flex, ConfigProvider, InputNumber, Select } from 'antd'
import type { InputNumberProps } from 'antd'
import { ChangeEvent, FC } from 'react'

import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
import { ModalWindowText } from '../../context/context'

import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { addFavTitle } from '../../redux/favoriteTitleSlice/favoriteTitleSlice'
import { addFavRequest, editFavRequest, FavoritesType, saveFavRequest } from '../../redux/favoritesSlice/favoritesSlice'
import { setAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'
import { setSelectValue } from '../../redux/selectValueSlice/selectValueSlice'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { editFavAmount, editFavOrder, editFavTitle, editFavRequestTitle } from '../../redux/editFavoriteSlice/editFavoriteSlice'


type FormPropsType = {
    favorite?: FavoritesType,
    modalWindowLanguage: ModalWindowText,
    onMessage: any
}

const AddFavoriteForm: FC<FormPropsType> = ({ favorite, modalWindowLanguage, onMessage }) => {

    const { v4: uuidv4 } = require('uuid')

    const isOpen = useAppSelector(state => state.modal.isOpen)
    const info = useAppSelector(state => state.info.text)
    const title = useAppSelector(state => state.favTitle.title)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const order = useAppSelector(state => state.select.order)
    const favorites = useAppSelector(state => state.favorites)
    const edit = useAppSelector(state => state.edit)
    const dispatch = useAppDispatch()

    const onChangeAmount: InputNumberProps['onChange'] = (value) => favorite?.isEditing ? dispatch(editFavAmount(value as number)) : dispatch(setAmountValue(value as number))

    const onChangeSelect = (value: string) => favorite?.isEditing ? dispatch(editFavOrder(value)) : dispatch(setSelectValue(value))

    const onSave = () => {
        if (favorite?.isEditing) {
            dispatch(saveFavRequest({
                id: favorite.id,
                title: edit.title,
                order: edit.order,
                request: edit.request,
                amount: edit.amount
            }))
            dispatch(editFavRequest(favorite.id))
            onMessage(`${favorite.title} ${modalWindowLanguage.editMessage}`, 'success')
        } else {
            dispatch(addFavRequest({
                id: uuidv4(),
                request: info,
                title: title,
                requestAmount: amount,
                selectOrder: order,
                isEditing: false,
            }))
            onMessage(`${title} ${modalWindowLanguage.addMessage}`, 'success')
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        dispatch(addFavTitle(''))
        dispatch(setAmountValue(12))
        dispatch(addRequest(''))
        dispatch(setSelectValue('relevance'))
        dispatch(setIsOpen(false))
    }

    const onCancelSave = () => {
        onMessage(`${modalWindowLanguage.cancelMessage}`, 'error')
        dispatch(addFavTitle(''))
        dispatch(setAmountValue(12))
        dispatch(setSelectValue('relevance'))
        dispatch(setIsOpen(false))
    }

    const { Text } = Typography
    return (
        <Modal
            style={{
                borderRadius: '10px',
            }}
            open={isOpen}
            onOk={() => dispatch(setIsOpen(false))}
            onCancel={() => dispatch(setIsOpen(false))}
            footer={[
                <Flex
                    align='center'
                    justify='center'
                    style={{ padding: '4vh 0' }}
                >
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
                        <Button
                            style={{ width: '11vw', height: '4vh', borderWidth: '0.1vh', fontSize: '1.1rem', margin: '1vh' }}
                            onClick={() => onCancelSave()}
                        >{modalWindowLanguage.button1}</Button>
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
                        <Button
                            style={{ width: '11vw', height: '4vh', borderWidth: '0.1vh', fontSize: '1.1rem' }}
                            onClick={() => onSave()}
                        >{modalWindowLanguage.button2}</Button>
                    </ConfigProvider>
                </Flex>
            ]}
        >
            <Flex
                vertical
                justify='center'
                style={{ padding: '0 1vw' }}
            >
                <Text
                    style={{ textAlign: 'center', marginTop: '5vh', fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                    {modalWindowLanguage.headTitle}
                </Text>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1rem', marginTop: '4vh' }}
                    >
                        {modalWindowLanguage.requestTitle}
                    </Text>
                    <Input
                        value={favorite?.isEditing ? edit.request : info}
                        disabled={favorite?.isEditing ? false : true}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(editFavRequestTitle(e.target.value))}
                        style={{ width: '100%', height: '100%', borderRadius: '0.5vh', border: '0.2vh solid #1717191A', fontSize: '1rem' }}
                    />
                </Flex>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1rem', marginTop: '2vh' }}
                    >
                        {modalWindowLanguage.nameTitle}
                    </Text>
                    <Input
                        value={favorite?.isEditing ? edit.title : title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => favorite?.isEditing ? dispatch(editFavTitle(e.target.value)) : dispatch(addFavTitle(e.target.value))}
                        placeholder={modalWindowLanguage.namePlaceholder}
                        style={{ width: '100%', height: '100%', borderRadius: '0.5vh', border: '0.2vh solid #1717191A', fontSize: '1rem' }}
                    />
                </Flex>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1rem', marginTop: '2vh' }}
                    >
                        {modalWindowLanguage.sortTitle}
                    </Text>
                    <Select
                        style={{ width: '100%', height: '100%', borderRadius: '0.5vh', border: '0.2vh solid #1717191A', fontSize: '1.1rem' }}
                        onChange={onChangeSelect}
                        value={favorite?.isEditing ? edit.order : order}
                        options={[
                            {
                                value: 'date',
                                label: modalWindowLanguage.sortParametrs[0]
                            },
                            {
                                value: 'rating',
                                label: modalWindowLanguage.sortParametrs[1]
                            },
                            {
                                value: 'relevance',
                                label: modalWindowLanguage.sortParametrs[2]
                            },
                            {
                                value: 'title',
                                label: modalWindowLanguage.sortParametrs[3]

                            },
                            {
                                value: 'videoCount',
                                label: modalWindowLanguage.sortParametrs[4]
                            },
                            {
                                value: 'viewCount',
                                label: modalWindowLanguage.sortParametrs[5]
                            }
                        ]}
                    />
                </Flex>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1.1rem', marginTop: '2vh' }}
                    >
                        {modalWindowLanguage.amountTitle}
                    </Text>
                    <Flex align='center' justify='center'>
                        <Slider
                            min={0}
                            max={50}
                            value={favorite?.isEditing ? edit.amount : amount}
                            onChange={onChangeAmount}
                            style={{ width: '90%', height: '1vh' }}
                        />
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
                            <InputNumber
                                min={0}
                                max={50}
                                value={favorite?.isEditing ? edit.amount : amount}
                                onChange={onChangeAmount}
                                style={{ width: '5vw', height: '4vh', fontSize: '1rem' }}
                            />
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default AddFavoriteForm