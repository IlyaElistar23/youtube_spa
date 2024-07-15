import { Flex, Typography } from 'antd'
import { useAppSelector } from '../../redux/hooks/hooks'
import { memo, FC, useContext } from 'react'
import { AppContext } from '../../context/context'

const SearchInfo: FC = memo(() => {
    const { Text } = Typography
    const amount = useAppSelector(state => state.requestAmount.amount)
    const info = useAppSelector(state => state.info.text)
    const theme = useContext(AppContext)

    return (
        <Flex align='center' style={{ width: '100vw' }}>
            <Text style={{ fontSize: '0.9rem', margin: '0 1vh 0 0', color: theme.textColor }}>Видео по запросу "{info}"</Text>
            <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor, marginLeft: '1vw' }}>Количество результатов запроса: {amount} видео</Text>
        </Flex>
    )
})

export default SearchInfo