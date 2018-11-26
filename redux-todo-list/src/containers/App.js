import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddTodo />
        <TodoList />
      </Fragment>
    );
  }
}

export default App;
