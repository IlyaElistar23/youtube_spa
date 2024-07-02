import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritesTitleType = {
    title: string
}

const initialState: FavoritesTitleType = {
    title: ''
}

const favoriteTitleSlice = createSlice({
    name: 'favoriteTitle',
    initialState,
    reducers: {
        addFavTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        }
    }
})

export default favoriteTitleSlice.reducer
export const { addFavTitle } = favoriteTitleSlice.actions