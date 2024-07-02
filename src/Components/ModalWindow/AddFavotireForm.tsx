import { Modal, Typography, Input, Button, Slider, Flex, ConfigProvider, InputNumber, Select } from 'antd'
import type {InputNumberProps} from 'antd'
import { ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
import { setIsOpen } from '../../redux/modalSlice/modalSlice'
import { addFavTitle } from '../../redux/favoriteTitleSlice/favoriteTitleSlice'
import { addFavRequest } from '../../redux/favoritesSlice/favoritesSlice'
import { setAmountValue } from '../../redux/requestAmountSlice/requestAmountSlice'
import { setSelectValue } from '../../redux/selectValueSlice/selectValueSlice'

const AddFavoriteForm = (): JSX.Element => {

    const {v4: uuidv4} = require('uuid')

    const isOpen = useAppSelector(state => state.modal.isOpen)
    const info = useAppSelector(state => state.info.text)
    const title = useAppSelector(state => state.favTitle.title)
    const amount = useAppSelector(state => state.requestAmount.amount)
    const order = useAppSelector(state => state.select.order)
    const dispatch = useAppDispatch()

    const onChangeAmount: InputNumberProps['onChange'] = (newValue) => {
        dispatch(setAmountValue(newValue as number))
    }

    const onChangeSelect = (value: string) => {
        dispatch(setSelectValue(value))
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
                                dispatch(addFavRequest({
                                    id: uuidv4(),
                                    request: info,
                                    title: title,
                                    requestAmount: amount,
                                    selectOrder: order,
                                    isEditing: false
                                }))
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
                        value={info}
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
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(addFavTitle(e.target.value))}
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
                            value={typeof amount === 'number' ? amount : 0}
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
                                value={amount}
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