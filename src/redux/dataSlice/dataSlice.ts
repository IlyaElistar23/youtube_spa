import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ThumbnailItem = {
    url: string,
    width: number,
    height: number
}

type LocalizedType = {
    description: string,
    title: string
}

type ThumbnailsType = {
    default: ThumbnailItem,
    high: ThumbnailItem,
    maxres: ThumbnailItem,
    medium: ThumbnailItem,
    standart: ThumbnailItem
}

type IdType = {
    videoId: string,
    kind: string
}

type SnippetType = {
    categoryId?: string,
    channelId: string,
    channelTitle: string,
    defaultAudioLanguage: string,
    defaultLanguage: string,
    description: string,
    liveBroadcastContent: string,
    localized: LocalizedType,
    publishedAt: string,
    publishTime?: string,
    tags: string[],
    thumbnails: ThumbnailsType,
    title: string
}

type StatisticsType = {
    commentCount: string,
    favoriteCount: string,
    likeCount: string,
    viewCount: string
}

export type DataItemType = {
    etag: string,
    id: IdType,
    kind: string,
    snippet: SnippetType,
}

export type DataStatItemType = {
    etag: string,
    id: string,
    kind: string,
    snippet: SnippetType,
    statistics: StatisticsType
}

const initialState: DataStatItemType[] = []

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DataStatItemType[]>) => {
            action.payload.forEach(item => state.push(item))
        },
        resetData: (state) => {
            state.length = 0
        }
    }
})

export default dataSlice.reducer
export const { setData, resetData } = dataSlice.actions