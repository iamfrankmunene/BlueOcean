import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'menu',
  initialState: {
    menuOpen: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.menuOpen = !state.menuOpen
    },
  },
})

export const { toggleMenu } = navSlice.actions
export const selectMenuOpen = (state) => state.menu.menuOpen // Selector for getting the menu state
export default navSlice.reducer