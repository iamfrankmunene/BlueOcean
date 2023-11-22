import { createSlice } from '@reduxjs/toolkit'

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    navOpen: false,
  },
  reducers: {
    toggleNav: (state) => {
      state.navOpen = !state.navOpen
    },
  }
})

export const { toggleNav } = navSlice.actions
export const selectNavOpen = (state) => state.nav.navOpen
export default navSlice.reducer