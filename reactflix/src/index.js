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
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

