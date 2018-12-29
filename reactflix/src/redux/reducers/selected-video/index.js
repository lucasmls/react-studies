
export const selectedVideo = (state = '', action) => {
  switch (action.type) {
    case 'SELECT_VIDEO':
      return action.videoKey
    default:
      return state
  }
}

export default selectedVideo