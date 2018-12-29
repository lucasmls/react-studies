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
  database.ref('videos').on('value', data => {
    const videos = data.val()
    Object.keys(videos)
      .sort((a, b) => videos[a].title < videos[b].title ? 1 : 1)
      .map(key => dispatch( createVideo({ id: key, title: videos[key].title }) ))
  })
}