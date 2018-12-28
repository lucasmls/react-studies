// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Libs
import 'milligram'
import 'normalize.css'

// Components
import Reactflix from './containers/Reactflix';


ReactDOM.render(
  <Provider store={store}>
    <Reactflix />
  </Provider>, document.getElementById('root'))
