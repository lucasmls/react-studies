import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo'
import FilteredTodoList from './FilteredTodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddTodo />
        <FilteredTodoList />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
