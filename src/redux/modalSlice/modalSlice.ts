import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = {
    isOpen: boolean
}

const initialState: ModalType = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        }
    }
})

export default modalSlice.reducer
export const { setIsOpen } = modalSlice.actions