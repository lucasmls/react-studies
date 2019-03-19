import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'

const Post = ({ post }) => (
  <div className="post">
    <PostHeader {...post} />
    <p className="post__content">{post.content}</p>
  </div>
)

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorPhoto: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired
  })
}

export default Post
