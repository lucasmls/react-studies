// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Libs
import 'milligram'
import 'normalize.css'
import { database } from './config/firebase'

// Components
import Reactflix from './containers/Reactflix';

const videos = database.ref('videos')
videos.on('value',
  snapshot => console.log(snapshot.val()),
  error => console.log(error)
)

const specificVideo = videos.child('-LUmVt-z8oOq-qkT6irX')
console.log(specificVideo)
specificVideo.update({
  title: 'Update'
})

ReactDOM.render(
  <Provider store={store}>
    <Reactflix />
  </Provider>, document.getElementById('root'))
