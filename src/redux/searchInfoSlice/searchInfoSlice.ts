import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SearchInfoType = {
    text: string
}

const initialState: SearchInfoType = {
    text: ''
}

const searchInfoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        addRequest: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
        resetRequest: (state) => {
            state.text = ''
        }
    }
})

export default searchInfoSlice.reducer
export const { addRequest, resetRequest } = searchInfoSlice.actions