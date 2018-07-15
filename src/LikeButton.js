import React from 'react'
import RButton from './RButton'

const LikeButton = () => {
  return (
    <RButton
      handleClick={() => alert('Like!')}
    >Like</RButton>
  )
}
 
export default LikeButton