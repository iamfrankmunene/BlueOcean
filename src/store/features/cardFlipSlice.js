import { createSlice } from "@reduxjs/toolkit"

const cardFlipSlice = createSlice({
    name: "cardFlip",
    initialState: {
        showBack: false
    },
    reducers: {
        toggleDescription: (state) => {
            state.showBack = !state.showBack
        }
    }
})

export const {toggleDescription} = cardFlipSlice.actions
export const selectcardFlip = (state) => state.cardFlip.showBack
export default cardFlipSlice.reducer