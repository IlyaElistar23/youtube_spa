import { configureStore } from '@reduxjs/toolkit'

import dataSlice from './dataSlice/dataSlice'
import searchInfoSlice from './searchInfoSlice/searchInfoSlice'
import favoritesSlice from './favoritesSlice/favoritesSlice'
import favoriteTitleSlice from './favoriteTitleSlice/favoriteTitleSlice'
import modalSlice from './modalSlice/modalSlice'
import requestAmountSlice from './requestAmountSlice/requestAmountSlice'
import selectValueSlice from './selectValueSlice/selectValueSlice'
import editFavoriteSlice from './editFavoriteSlice/editFavoriteSlice'

export const store = configureStore({
    reducer: {
        data: dataSlice, // Массив данных для отображения, получен с сервера
        info: searchInfoSlice,  // Значение запроса
        favorites: favoritesSlice, // Массив избранных запросов
        favTitle: favoriteTitleSlice, // пойдет в модальное окно в поле название
        modal: modalSlice, // Открыто ли модальное окно
        requestAmount: requestAmountSlice, // Значение количества запросов
        select: selectValueSlice, // Значение способа сортировки
        edit: editFavoriteSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch