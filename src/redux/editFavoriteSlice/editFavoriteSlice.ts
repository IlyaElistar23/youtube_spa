import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// type EditTitleType = {
//     id: string,
//     title: string
// }

// type EditOrderType = {
//     id: string,
//     order: string
// }

// type EditAmountType = {
//     id: string,
//     amount: number
// }

export type EditFavType = {
    id?: string,
    title: string,
    order: string,
    amount: number
}

const initialState: EditFavType = {
    title: '',
    order: '',
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
        editFavAmount: (state, action: PayloadAction<number>) => {
            state.amount = action.payload
        },
        setEditValues: (state, action: PayloadAction<EditFavType>) => {
            state.amount = action.payload.amount
            state.order = action.payload.order
            state.title = action.payload.title
        }
    }
})

export default editFavoriteSlice.reducer
export const { editFavAmount, editFavOrder, editFavTitle, setEditValues } = editFavoriteSlice.actions