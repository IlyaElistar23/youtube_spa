import { Flex, Typography } from 'antd'
import { useAppSelector } from '../../redux/hooks/hooks'
import { memo, FC } from 'react'

const SearchInfo: FC = memo(() => {
    const { Text } = Typography
    const amount = useAppSelector(state => state.requestAmount.amount)
    const info = useAppSelector(state => state.info.text)

    return (
        <Flex align='center' style={{ width: '100vw' }}>
            <Text style={{ fontSize: '0.9rem', margin: '0 1vh 0 0' }}>Видео по запросу "{info}"</Text>
            <Text style={{ fontSize: '0.9rem', color: '#1717194D', marginLeft: '2vw' }}>{amount}</Text>
        </Flex>
    )
})

export default SearchInfo