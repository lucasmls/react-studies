import { combineReducers } from 'redux'

import videos from './videos'
import ui from './ui'
import selectedVideo from './selected-video'

export default combineReducers({
  videos,
  selectedVideo,
  ui,
})