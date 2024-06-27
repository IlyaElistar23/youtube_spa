import { configureStore } from '@reduxjs/toolkit'

import dataSlice from './dataSlice/dataSlice'
import searchInfoSlice from './searchInfoSlice/searchInfoSlice'

export const store = configureStore({
    reducer: {
        data: dataSlice,
        info: searchInfoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch