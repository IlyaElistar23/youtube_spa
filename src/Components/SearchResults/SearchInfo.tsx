import { Flex, Typography } from 'antd'
import { useAppSelector } from '../../redux/hooks/hooks'

const SearchInfo = (): JSX.Element => {
    const { Text } = Typography
    const amount = useAppSelector(state => state.requestAmount.amount)
    
    return (
        <Flex align='center' style={{ width: '100vw' }}>
            <Text style={{ fontSize: '0.9rem', margin: '0 1vh 0 0' }}>Видео по запросу "{ }"</Text>
            <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>{amount}</Text>
        </Flex>
    )
}

export default SearchInfo