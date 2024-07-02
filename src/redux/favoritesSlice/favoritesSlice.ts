import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FavoritesType = {
    id: string,
    request: string,
    title: string,
    requestAmount: number,
    selectOrder: string,
    isEditing: boolean
}

const initialState: FavoritesType[] = []

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavRequest: (state, action: PayloadAction<FavoritesType>) => {
            state.push(action.payload)
        },
        // editFavRequest: (state, action: PayloadAction<string>) => {
        //     const findFav = state.find(favorite => favorite.id === action.payload)
        //     if (findFav) {
        //         findFav.isEditing = !findFav.isEditing
        //     }
        // },
        // deleteFavRequest: (state, action: PayloadAction<string>) => {
        //     const index = state.findIndex(favorite => favorite.id === action.payload)
        //     index !== -1 && state.splice(index, 1)
        // }
    }
})

export default favoritesSlice.reducer
export const { addFavRequest } = favoritesSlice.actions