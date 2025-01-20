import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { productsSlice } from './slices/productsSlice'
import { cartsSlice } from './slices/myPurchasesSlice'
// ...

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    productsReducer:productsSlice.reducer,
    cartsReducer:cartsSlice.reducer
      },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch