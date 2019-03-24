import React, { Fragment } from 'react'
import Map from './components/Map'
import UsersList from './components/UsersList'
import UserModal from './components/UserModal'
import GlobalStyle from './styles/globals'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Map />
      <UsersList />
      <UserModal />
    </Fragment>
  )
}

export default App
