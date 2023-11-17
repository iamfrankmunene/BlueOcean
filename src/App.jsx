import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import Header from './components/header'
import Homepage from './components/homepage'
import Footer from './components/footer'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
