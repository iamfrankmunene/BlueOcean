import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Mocking the Redux store
const mockStore = configureStore();

const mockRoomData = [
  {
    name: 'Deluxe',
    description: 'Immerse yourself in luxury with the Deluxe Room, offering modern amenities and sweeping ocean views. Wake up to the sound of waves, and enjoy an unforgettable blend of opulence and natural beauty.',
    photo: '../../../image/DeluxeRoom.jpg',
    price: 150,
  },
];

const mockCulinaryData = [
  { name: "Sandy Sips", description: "Indulge in a tropical paradise at Sandy Sips, where refreshing drinks meet a laid-back atmosphere right by the beach. Let the soothing sounds of waves accompany your dining experience as you unwind in a coastal haven." },
];

const mockActivityData = [
  { name: "Massage Paradise", description: "Relax and rejuvenate at Massage Paradise, where skilled therapists offer a range of soothing massages to pamper your body and soul. Escape into a world of tranquility and leave your worries behind." },
];

describe('Integrated App Component', () => {
  it('renders App with correct data for Rooms, Culinary, and Activity components', () => {
    const store = mockStore({
      room: {
        roomData: mockRoomData,
      },
      cardFlip: {
        cardFlipped: false,
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Test Rooms Component
    const deluxeRoomName = screen.queryAllByText(/Deluxe/i);
    const deluxeRoomDescription = screen.getByText(/Immerse yourself in luxury with the Deluxe Room/i);
    expect(deluxeRoomName).toHaveLength(1);
    expect(deluxeRoomDescription).toBeInTheDocument();

    // Test Culinary Component
    const sandySipsCard = screen.getByAltText(/Sandy Sips/i);
    fireEvent.click(sandySipsCard);
    expect(store.getActions()).toEqual([{ type: 'cardFlip/toggleDescription' }]);

    // Test Activity Component
    const massageParadiseCard = screen.getByAltText(/Massage Paradise/i);
    fireEvent.click(massageParadiseCard);
    expect(store.getActions()).toEqual([{ type: 'cardFlip/toggleDescription' }]);
  });
});
