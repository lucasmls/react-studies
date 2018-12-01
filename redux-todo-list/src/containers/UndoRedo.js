import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import mousetrap from 'mousetrap'


const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => {
  mousetrap.bind('ctrl+z', onUndo);
  mousetrap.bind('ctrl+shift+z', onRedo)

  return (
    <div>
      <button onClick={onUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={onRedo} disabled={!canRedo}>
        Redo
      </button>
    </div>
  )
}

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