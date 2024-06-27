import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ThumbnailItem = {
    url: string,
    width: number,
    height: number
}

type ThumbnailsType = {
    default: ThumbnailItem,
    medium: ThumbnailItem,
    high: ThumbnailItem
}

type IdType = {
    channelId: string,
    kind: string
}

type SnippetType = {
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    publishTime: string,
    publishedAt: string,
    thumbnails: ThumbnailsType,
    title: string
}

export type DataItemType = {
    etag: string,
    id: IdType,
    kind: string,
    snippet: SnippetType,
}

const initialState: DataItemType[] = []

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DataItemType[]>) => {
            action.payload.forEach(item => state.push(item))
        },
        resetData: (state) => {
            state.length = 0
        }
    }
})

export default dataSlice.reducer
export const { setData, resetData } = dataSlice.actions