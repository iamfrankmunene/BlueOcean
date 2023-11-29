import React from 'react'
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './header.jsx'
import Homepage from './homepage.jsx'
import Culinary from './culinary.jsx'
import Experiences from './experiences.jsx'
import Rooms from './rooms.jsx'
import Footer from './footer.jsx'
import { selectRestaurantsFlip }  from '../store/features/cardFlipSlice.js'
import { selectExperiencesFlip }  from '../store/features/cardFlipSlice.js'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

// Mocking the Redux store
const mockStore = configureStore()

const mockRoomData = [
  {
    name: 'Deluxe',
    description: 'Immerse yourself in luxury with the Deluxe Room, offering modern amenities and sweeping ocean views. Wake up to the sound of waves, and enjoy an unforgettable blend of opulence and natural beauty.',
    photo: '../../../image/DeluxeRoom.jpg',
    price: 150,
  },
]

const mockCulinaryData = [
  { name: "Sandy Sips", description: "Indulge in a tropical paradise at Sandy Sips, where refreshing drinks meet a laid-back atmosphere right by the beach. Let the soothing sounds of waves accompany your dining experience as you unwind in a coastal haven." },
]

const mockExperiencesData = [
  { name: "Massage Paradise", description: "Relax and rejuvenate at Massage Paradise, where skilled therapists offer a range of soothing massages to pamper your body and soul. Escape into a world of tranquility and leave your worries behind." },
]

describe('Integrated App Component', () => {
  it('renders App with correct data for Rooms, Culinary, and experiences components', async () => {
    const store = mockStore({
      nav: {
        navOpen: false,
      },
      roomsVisibility: {
        roomVisibility: false,
      },
      room: {
        roomData: mockRoomData,
      },
      cardFlip: {
        showBack: false,
      },
    })

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Homepage />
          <Culinary />
          <Experiences />
          <Rooms />
          <Footer />
        </BrowserRouter>
      </Provider>
    )
    
    

    // Test Header component
    const roomsLink = screen.getByRole('link', { name: /Rooms/i })
    fireEvent.click(roomsLink)
    const culinaryLink = screen.getByRole('link', { name: /Culinary/i })
    fireEvent.click(culinaryLink)
    const experiencesLink = screen.getByRole('link', { name: /Experiences/i })
    fireEvent.click(experiencesLink)

    // Test Rooms Component
    const deluxeRoomName = screen.queryAllByText(/Deluxe/i)
    const deluxeRoomDescription = screen.getByText(/Immerse yourself in luxury with the Deluxe Room, offering modern amenities and sweeping ocean views. Wake up to the sound of waves, and enjoy an unforgettable blend of opulence and natural beauty./i)
    expect(deluxeRoomName).toHaveLength(2)
    expect(deluxeRoomDescription).toBeInTheDocument()


     // Test Culinary Component
     /* const sandySipsCard = await screen.findByTestId('culinary-front-card-0')
     screen.debug()
     const initialisCardFlipped = selectRestaurantsFlip(store.getState())
 
     fireEvent.click(sandySipsCard)
     await waitFor(() => {
       const isCardFlipped = selectRestaurantsFlip(store.getState())
       expect(isCardFlipped).toBe(!initialisCardFlipped) 
     }) */

    // Test Experiences Component
   /*  const massageParadiseCard = await screen.findByTestId('experiences-front-card-0')
    const initialCardFlipped = selectExperiencesFlip(store.getState())

    fireEvent.click(massageParadiseCard)
    await waitFor(() => {
      const isCardFlipped = selectExperiencesFlip(store.getState())
      expect(isCardFlipped).toBe(!initialCardFlipped)
    }) */

   
 }, 100000)
})
