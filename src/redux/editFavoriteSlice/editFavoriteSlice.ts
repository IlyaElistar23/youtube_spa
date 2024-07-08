import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type EditFavType = {
    id?: string,
    title: string,
    order: string,
    request: string,
    amount: number
}

const initialState: EditFavType = {
    title: '',
    order: '',
    request: '',
    amount: 12
}

const editFavoriteSlice = createSlice({
    name: 'editFav',
    initialState,
    reducers: {
        editFavTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        editFavOrder: (state, action: PayloadAction<string>) => {
            state.order = action.payload
        },
        editFavRequest: (state, action: PayloadAction<string>) => {
            state.request = action.payload
        },
        editFavAmount: (state, action: PayloadAction<number>) => {
            state.amount = action.payload
        },
        setEditValues: (state, action: PayloadAction<EditFavType>) => {
            state.amount = action.payload.amount
            state.order = action.payload.order
            state.title = action.payload.title
            state.request = action.payload.request
        }
    }
})

export default editFavoriteSlice.reducer
export const { editFavAmount, editFavOrder, editFavTitle, setEditValues, editFavRequest } = editFavoriteSlice.actions