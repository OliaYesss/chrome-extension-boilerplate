import { createSlice } from '@reduxjs/toolkit'

export interface PopupState {
  isOpen: boolean
}

const initialState: PopupState = {
  isOpen: false
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})
