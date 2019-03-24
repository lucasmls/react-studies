import React, { Fragment } from 'react'
import Map from './components/Map'
import UsersList from './components/UsersList'
import RepositoryModal from './components/RepositoryModal'
import GlobalStyle from './styles/globals'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Map />
      <UsersList />
      <RepositoryModal />
    </Fragment>
  )
}

export default App
