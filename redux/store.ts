import { configureStore } from "@reduxjs/toolkit";
import villaSlice from './villaSlice'
import tourSlice from './tourSlice'
import adminSlice from './adminSlice'

export const store = configureStore({
    reducer: {
        villa: villaSlice,
        tour: tourSlice,
        admin: adminSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;