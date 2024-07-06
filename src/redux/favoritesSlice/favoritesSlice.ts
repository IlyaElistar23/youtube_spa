import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditFavType } from '../editFavoriteSlice/editFavoriteSlice'

export type FavoritesType = {
    id: string,
    request: string,
    title: string,
    requestAmount: number,
    selectOrder: string,
    isEditing: boolean,
    isInProgress: boolean
}

const initialState: FavoritesType[] = JSON.parse(localStorage.getItem('favorites') as string) || []

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavRequest: (state, action: PayloadAction<FavoritesType>) => {
            state.push(action.payload)
        },
        editFavRequest: (state, action: PayloadAction<string>) => {
            const findFav = state.find(favorite => favorite.id === action.payload)
            if (findFav) {
                findFav.isEditing = !findFav.isEditing
            }
        },
        deleteFavRequest: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(favorite => favorite.id === action.payload)
            index !== -1 && state.splice(index, 1)
        },
        performFavRequest: (state, action: PayloadAction<string>) => {
            const findFav = state.find(favorite => favorite.id = action.payload)
            if (findFav) {
                findFav.isInProgress = !findFav.isInProgress
            }
        },
        saveFavRequest: (state, action: PayloadAction<EditFavType>) => {
            const findFav = state.find(favorite => favorite.id === action.payload.id)
            if (findFav) {
                findFav.title = action.payload.title
                findFav.selectOrder = action.payload.order
                findFav.requestAmount = action.payload.amount
            }
        }
    }
})

export default favoritesSlice.reducer
export const { addFavRequest, deleteFavRequest, editFavRequest, saveFavRequest } = favoritesSlice.actions