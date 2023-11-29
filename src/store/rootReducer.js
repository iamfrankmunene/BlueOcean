import { combineReducers } from '@reduxjs/toolkit'
import navReducer from './features/navSlice.js'
import roomReducer from './features/roomSlice.js'
import roomsVisibilityReducer from './features/roomsVisibilitySlice.js'
import cardFlipReducer from './features/cardFlipSlice.js'

const rootReducer = combineReducers({
  nav: navReducer,
  room: roomReducer,
  roomsVisibility: roomsVisibilityReducer,
  cardFlip: cardFlipReducer
})

export default rootReducer
