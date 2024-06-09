import { Flex, Typography } from 'antd'

const SearchInfo = (): JSX.Element => {
    const { Text } = Typography
    return (
        <Flex align='center' justify='center' style={{width: '20%'}}>
            <Text style={{ fontSize: '89%' }}>Видео по запросу "{ }"</Text>
            <Text style={{ fontSize: '89%', color: '#1717194D', marginLeft: '3%' }}>7230</Text>
        </Flex>
    )
}

export default SearchInfo