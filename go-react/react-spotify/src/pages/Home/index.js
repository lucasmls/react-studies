import React from 'react'

import { toast } from 'react-toastify'

function Home () {
  const showToast = () => {
    toast.success('Bem vindo!', {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  return (
    <div onClick={showToast} style={{ cursor: 'pointer' }}>
      <h2>Home page!</h2>
    </div>
  )
}

export default Home
