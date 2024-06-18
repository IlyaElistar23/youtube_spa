import { Flex, Typography } from 'antd'

const SearchInfo = (): JSX.Element => {
    const { Text } = Typography
    return (
        <Flex align='center' style={{width: '100vw'}}>
            <Text style={{ fontSize: '0.9rem', margin: '0 1vh 0 0' }}>Видео по запросу "{ }"</Text>
            <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>7230</Text>
        </Flex>
    )
}

export default SearchInfo