import { Flex, Typography } from 'antd'
import { useAppSelector } from '../../redux/hooks/hooks'
import { memo, FC, useContext } from 'react'
import { AppContext } from '../../context/context'

type SearchInfoType = {
    videoInfo: string | undefined,
    countText: string | undefined,
    countInfo: string | undefined
}

const SearchInfo: FC<SearchInfoType> = memo(({ videoInfo, countInfo, countText }) => {
    const { Text } = Typography
    const info = useAppSelector(state => state.info.text)
    const theme = useContext(AppContext)
    const data = useAppSelector(state => state.data)

    return (
        <Flex align='center' style={{ width: '100vw' }}>
            <Text style={{ fontSize: '0.9rem', margin: '0 1vh 0 0', color: theme.textColor }}>{videoInfo} "{info}"</Text>
            <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor, marginLeft: '1vw' }}>{countText}: {data.length} {countInfo}</Text>
        </Flex>
    )
})

export default SearchInfo