import { configureStore } from '@reduxjs/toolkit'
import navReducer from './features/navSlice'

export const store = configureStore({
  reducer: {
    menu: navReducer,
    // Add other reducers if needed
  },
})
