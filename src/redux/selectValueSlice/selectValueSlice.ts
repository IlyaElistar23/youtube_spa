import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SelectValueType = {
    order: string
}

const initialState: SelectValueType = {
    order: 'relevance'
}

const selectValueSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectValue: (state, action: PayloadAction<string>) => {
            state.order = action.payload
        }
    }
})

export default selectValueSlice.reducer
export const { setSelectValue } = selectValueSlice.actions