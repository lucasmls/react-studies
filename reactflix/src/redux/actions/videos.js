import { ADD_VIDEO } from './types'
import { database } from '../../config/firebase'

export const registerVideo = payload => async dispatch => {
  await database.ref('videos').child(payload.id).update({ ...payload })
  dispatch(createVideo(payload))
}

export const createVideo = payload => ({
  type: ADD_VIDEO,
  payload
})

export const fetchVideos = () => async dispatch => {
  database.ref('videos').on('value', videos => {
    console.log(videos.val())
    videos.forEach(video => { dispatch(createVideo(video.val())) })
  })
}