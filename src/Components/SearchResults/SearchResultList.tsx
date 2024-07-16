import { List, Flex } from 'antd'
import ListItem from './ListItem'
import { useAppSelector } from '../../redux/hooks/hooks'


const SearchResultList = (): JSX.Element => {

    const data = useAppSelector(state => state.data)

    return (
        <Flex vertical style={{ marginTop: '3vh' }}>
            <List>
                {
                    data.map(item => (
                        <ListItem key={item.id} item={item} />
                    ))
                }
            </List>
        </Flex>
    )
}

export default SearchResultList