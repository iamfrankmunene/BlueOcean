import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.jsx'

test('renders About section', () => {
  render(<App />)
  const aboutElement = screen.getByText(/About Us/i)
  expect(aboutElement).toBeInTheDocument() 
})

test('renders Reviews section', () => {
  render(<App />)
  const reviewsElement = screen.getByText(/Reviews/i)
  expect(reviewsElement).toBeInTheDocument()
})

test('renders Book Now button', () => {
  render(<App />)
  const bookNowButton = screen.getByText(/Book Now/i)
  expect(bookNowButton).toBeInTheDocument()
})
