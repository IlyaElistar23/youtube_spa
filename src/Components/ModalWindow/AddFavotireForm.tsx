import { Modal, Typography, Input, Button, Slider, Flex, ConfigProvider, InputNumber, Select } from 'antd'
import type { InputNumberProps } from 'antd'
import { ChangeEvent, FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { addFavTitle } from '../../redux/favoriteTitleSlice/favoriteTitleSlice'
import { addFavRequest, editFavRequest, FavoritesType, saveFavRequest } from '../../redux/favoritesSlice/favoritesSlice'
import { setAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'
import { setSelectValue } from '../../redux/selectValueSlice/selectValueSlice'
import { addRequest } from '../../redux/searchInfoSlice/searchInfoSlice'
import { editFavAmount, editFavOrder, editFavTitle } from '../../redux/editFavoriteSlice/editFavoriteSlice'

type FormPropsType = {
    favorite?: FavoritesType,
}

const AddFavoriteForm: FC<FormPropsType> = ({ favorite }) => {

    const { v4: uuidv4 } = require('uuid')

    const isOpen = useAppSelector(state => state.modal.isOpen)
    const info = useAppSelector(state => state.info.text)
    const title = useAppSelector(state => state.favTitle.title)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const order = useAppSelector(state => state.select.order)
    const favorites = useAppSelector(state => state.favorites)
    const edit = useAppSelector(state => state.edit)
    const dispatch = useAppDispatch()

    const onChangeAmount: InputNumberProps['onChange'] = (newValue) => favorite?.isEditing ? dispatch(editFavAmount(newValue as number)) : dispatch(setAmountValue(newValue as number))

    const onChangeSelect = (value: string) => favorite?.isEditing ? dispatch(editFavOrder(value)) : dispatch(setSelectValue(value))

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
                    style={{ margin: '4vh 0', }}
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
                            onClick={() => {
                                dispatch(setIsOpen(false))
                            }}
                        >Не сохранять</Button>
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
                            onClick={() => {
                                if (favorite?.isEditing) {
                                    dispatch(saveFavRequest({
                                        id: favorite.id,
                                        title: edit.title,
                                        order: edit.order,
                                        amount: edit.amount
                                    }))
                                    dispatch(editFavRequest(favorite.id))
                                } else {
                                    dispatch(addFavRequest({
                                        id: uuidv4(),
                                        request: info,
                                        title: title,
                                        requestAmount: amount,
                                        selectOrder: order,
                                        isEditing: false,
                                        isInProgress: false
                                    }))
                                }
                                localStorage.setItem('favorites', JSON.stringify(favorites))
                                dispatch(addFavTitle(''))
                                dispatch(setAmountValue(12))
                                dispatch(addRequest(''))
                                dispatch(setSelectValue('relevance'))
                                dispatch(setIsOpen(false))
                            }}
                        >Сохранить</Button>
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
                    Сохранить запрос
                </Text>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1rem', marginTop: '4vh' }}
                    >
                        Запрос
                    </Text>
                    <Input
                        value={favorite?.isEditing ? favorite.request : info}
                        disabled
                        style={{ width: '100%', height: '100%', borderRadius: '0.5vh', border: '0.2vh solid #1717191A', fontSize: '1rem' }}
                    />
                </Flex>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1rem', marginTop: '2vh' }}
                    >
                        Название
                    </Text>
                    <Input
                        value={favorite?.isEditing ? edit.title : title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => favorite?.isEditing ? dispatch(editFavTitle(e.target.value)) : dispatch(addFavTitle(e.target.value))}
                        placeholder='Укажите название'
                        style={{ width: '100%', height: '100%', borderRadius: '0.5vh', border: '0.2vh solid #1717191A', fontSize: '1rem' }}
                    />
                </Flex>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1rem', marginTop: '2vh' }}
                    >
                        Сортировать
                    </Text>
                    <Select
                        placeholder='Без сортировки'
                        style={{ width: '100%', height: '100%', borderRadius: '0.5vh', border: '0.2vh solid #1717191A', fontSize: '1.1rem' }}
                        onChange={onChangeSelect}
                        value={favorite?.isEditing ? edit.order : order}
                        options={[
                            {
                                value: 'date',
                                label: 'По дате создания'
                            },
                            {
                                value: 'rating',
                                label: 'По рейтингу'
                            },
                            {
                                value: 'relevance',
                                label: 'По релевантности'
                            },
                            {
                                value: 'title',
                                label: 'По названию'

                            },
                            {
                                value: 'videoCount',
                                label: 'По количеству загруженных видео на канале'
                            },
                            {
                                value: 'viewCount',
                                label: 'По количеству просмотров'
                            }
                        ]}
                    />
                </Flex>
                <Flex vertical>
                    <Text
                        style={{ fontSize: '1.1rem', marginTop: '2vh' }}
                    >
                        Максимальное количество
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
                                style={{ width: '20%', height: '4vh', fontSize: '1rem' }}
                            />
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default AddFavoriteForm