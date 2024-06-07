import { Typography, Button, Flex, ConfigProvider, List } from 'antd'
import SavedItem from './SavedItem'

export type SavedType = {
    request: string,
    title: string,
    sort: string,
    maxAmount: number
}

const FavoritePage = (): JSX.Element => {
    const { Text } = Typography
    const { Item } = List

    const saved: SavedType[] = [
        {
            request: '',
            title: 'React',
            sort: '',
            maxAmount: 25
        },
        {
            request: '',
            title: 'Redux',
            sort: '',
            maxAmount: 30
        }
    ]
    return (
        <Flex vertical align='flex-start' justify='center' style={{paddingLeft: '200px', paddingTop: '40px', backgroundColor: '#FAFAFA'}}>
            <Text style={{fontSize: '28px'}}>Избранное</Text>
            <List style={{marginTop: '40px'}}>
                    {
                        saved.map(item => (
                            <Flex>
                                <SavedItem item={item}/>
                            </Flex>
                        ))
                    }
            </List>
        </Flex>
    )
}

export default FavoritePage