import { createSlice } from '@reduxjs/toolkit'

export const roomsVisibilitySlice = createSlice({
  name: 'roomsVisibility',
  initialState: {
    showRooms: false,
  },
  reducers: {
    toggleRooms: (state, action) => {
      state.showRooms = !state.showRooms
    },
  }
})

export const { toggleRooms } = roomsVisibilitySlice.actions
export const selectRoomVisibility = (state) => state.roomsVisibility.showRooms

export default roomsVisibilitySlice.reducer
