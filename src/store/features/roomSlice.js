import { createSlice } from '@reduxjs/toolkit'

const initialRoomData = [
  {
    name: 'Classic',
    description: 'Discover comfort and sophistication in our Classic Room, where modern furnishings and a cozy ambiance ensure a peaceful retreat. Perfect for those who appreciate simplicity with a touch of luxury.',
    photo: '../../../image/ClassicRoom.jpg',
    price: 100,
  },
  {
    name: 'Deluxe',
    description: 'Immerse yourself in luxury with the Deluxe Room, offering modern amenities and sweeping ocean views. Wake up to the sound of waves, and enjoy an unforgettable blend of opulence and natural beauty.',
    photo: '../../../image/DeluxeRoom.jpg',
    price: 150,
  },
  {
    name: 'Premium',
    description: 'Indulge in the opulent Premium Suite, where comfort meets style. With a spacious layout and thoughtfully curated amenities, this suite promises a memorable stay. Experience unmatched tranquility and relaxation in a setting designed for discerning guests..',
    photo: '../../../image/PremiumSuite.jpg',
    price: 300,
  },
  {
    name: 'Executive',
    description: 'Elevate your stay with the Executive Suite, featuring a separate living area for the ultimate luxury experience. Enjoy breathtaking ocean views, creating a tranquil escape for those seeking the finest in hospitality.',
    photo: '../../../image/ExecutiveSuite.jpg',
    price: 500,
  },
  {
    name: 'Presidential',
    description: 'Unwind in the Prresidential Suite, where every moment is accompanied by stunning vistas of the azure waters. This room blends contemporary design with seaside charm, providing an oasis of serenity. Revel in the luxury of both comfort and breathtaking ocean panoramas.',
    photo: '../../../image/PresidentialSuite.jpg',
    price: 800,
  },
  {
    name: 'RoyalPenthouse',
    description: 'The RoyalPenthouse Retreat defines luxury with exclusive features, elegant design, and awe-inspiring ocean views. Experience unparalleled services, including a personal chef and dedicated assistant. Your stay is further elevated with a private car and driver for seamless exploration—a refined escape beyond compare.',
    photo: '../../../image/RoyalPenthouseSuite.jpg',
    price: 1000,
  }
]

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomData: initialRoomData,
  },
  reducers: {},
})

export const selectRoomData = (state) => state.room.roomData

export default roomSlice.reducer
