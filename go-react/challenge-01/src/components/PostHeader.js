import React from 'react'
import PropTypes from 'prop-types'

const PostHeader = ({ author, authorPhoto, postTime }) => (
  <div className="post__header">
    <div className="post__header__img">
      <img src={authorPhoto} />
    </div>

    <div className="post__header__info">
      <h3>{author}</h3>
      <span>{postTime}</span>
    </div>
  </div>
)

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  authorPhoto: PropTypes.string.isRequired,
  postTime: PropTypes.string.isRequired
}

export default PostHeader
