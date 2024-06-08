import { Flex, Typography } from 'antd'

const SearchInfo = (): JSX.Element => {
    const { Text } = Typography
    return (
        <Flex align='center' justify='center'>
            <Text style={{ fontSize: '16px' }}>Видео по запросу "{ }"</Text>
            <Text style={{ fontSize: '16px', color: '#1717194D', marginLeft: '15px' }}>7230</Text>
        </Flex>
    )
}

export default SearchInfo