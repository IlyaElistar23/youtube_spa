import { Image, Typography, List, Flex } from 'antd'
import { DataList } from '../data'

type GridItem = {
    item: DataList
}

const GridItem = ({ item }: GridItem): JSX.Element => {
    const { Item } = List
    const { Text } = Typography
    return (
        <Flex vertical>
            <Image src={item.image} />
            <Text></Text>
            <Text></Text>
        </Flex>
    )
}

export default GridItem