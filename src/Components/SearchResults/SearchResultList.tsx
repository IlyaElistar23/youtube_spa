import { Image, Typography, List, Flex, Button, ConfigProvider } from 'antd'
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import ListItem from './ListItem'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'

const SearchResultList = (): JSX.Element => {

    const data = useAppSelector(state => state.data)

    return (
        <Flex vertical style={{ marginTop: '3vh' }}>
            <List>
                {
                    data.map(item => (
                        <ListItem item={item} />
                    ))
                }
            </List>
        </Flex>
    )
}

export default SearchResultList