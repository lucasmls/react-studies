import React, { Fragment } from 'react'
import Map from './components/Map'
import UsersList from './components/UsersList'
import UserModal from './components/UserModal'
import GlobalStyle from './styles/globals'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer autoClose={5000} />

      <Map />
      <UsersList />
      <UserModal />
    </Fragment>
  )
}

export default App
