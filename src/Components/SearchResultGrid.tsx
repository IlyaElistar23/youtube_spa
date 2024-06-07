import { Image, Typography, Row, Col } from 'antd'

type DataType = {
    image: string,
    title: string,
    channel: string,
    views: number
}

const SearchResultGrid = (): JSX.Element => {

    const { Text } = Typography

    const data: DataType[] = [
        {
            image: '',
            title: 'React',
            channel: 'Elistar',
            views: 10
        },
        {
            image: '',
            title: 'React',
            channel: 'Gutzu',
            views: 100
        },
        {
            image: '',
            title: 'React',
            channel: 'Bykova',
            views: 5
        },
        {
            image: '',
            title: 'React',
            channel: 'Filipchik',
            views: 15
        },
        {
            image: '',
            title: 'Redux',
            channel: 'Gutzu',
            views: 0
        },
        {
            image: '',
            title: 'Redux',
            channel: 'Bykova',
            views: 0
        },
        {
            image: '',
            title: 'Redux',
            channel: 'Elistar',
            views: 0
        },
        {
            image: '',
            title: 'Redux',
            channel: 'Filipchik',
            views: 0
        },
        {
            image: '',
            title: 'RTK',
            channel: 'Bykova',
            views: 0
        },
        {
            image: '',
            title: 'RTK',
            channel: 'Filipchik',
            views: 0
        },
        {
            image: '',
            title: 'RTK',
            channel: 'Gutzu',
            views: 0
        },
        {
            image: '',
            title: 'RTK',
            channel: 'Elistar',
            views: 0
        },
    ]

    return (
        <>
            {
                data.map(item => (
                    <Row>
                        <Col span={6}>
                            <Image src={item.image}/>
                            <Text>{item.title}</Text>
                            <Text>{item.channel}</Text>
                            <Text>{item.views}</Text>
                    </Col>
                    </Row>
                ))
            }
        </>
    )
}

export default SearchResultGrid