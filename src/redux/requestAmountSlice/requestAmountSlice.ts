import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RequestAmountType = {
    amount: number
}

const initialState: RequestAmountType = {
    amount: 12
}

const requestAmountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        setAmountValue: (state, action: PayloadAction<number>) => {
            state.amount = action.payload
        }
    }
})

export default requestAmountSlice.reducer
export const { setAmountValue } = requestAmountSlice.actions