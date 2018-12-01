import React, { Component, Fragment } from 'react';

import AddTodo from './AddTodo'
import FilteredTodoList from './FilteredTodoList'
import UndoRedo from './UndoRedo'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
          <div>
            <AddTodo />
            <FilteredTodoList />
            <Footer />
          </div>
          <UndoRedo />
        </div>
      </Fragment>
    );
  }
}

export default App;
