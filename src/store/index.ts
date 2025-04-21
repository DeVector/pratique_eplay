import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/Cart'
import api from '../service/api'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
