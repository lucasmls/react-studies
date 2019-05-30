import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// Style
import GeneralStyles from './styles/general'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <BrowserRouter>
      <GeneralStyles />
      <ToastContainer autoClose={5000} />
      <p>Spotify!</p>
    </BrowserRouter>
  )
}

export default App
