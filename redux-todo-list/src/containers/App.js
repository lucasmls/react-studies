import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddTodo />
        <TodoList />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
