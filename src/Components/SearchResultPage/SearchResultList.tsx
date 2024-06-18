import { Image, Typography, List, Flex, Button, ConfigProvider } from 'antd'
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons'
import { data } from '../data'
import { NavLink } from 'react-router-dom'
import ListItem from './ListItem'

const SearchResultList = (): JSX.Element => {

    return (
            <Flex vertical style={{ marginTop: '3vh'}}>
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