import { configureStore } from '@reduxjs/toolkit'
import { popupSlice } from './popupSlice'

export const store = configureStore({
  reducer: {
    popup: popupSlice.reducer
  }
})

export type AppState = ReturnType<typeof store.getState>
