import React from 'react'
import RButton from './RButton'

const SearchButton = () => {
  return (
    <RButton
      handleClick={() => alert('Searching...')}
    >
      Search
    </RButton>
  )
}
 
export default SearchButton