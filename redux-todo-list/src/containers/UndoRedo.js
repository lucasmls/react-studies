import React, { Fragment } from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <Fragment>
    <button onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </Fragment>
)

const mapStateToProps = state => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UndoRedo)