import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FavoriteActions from '../../store/actions/favorites'

class Main extends Component {
  static propTypes = {
    addFavorite: PropTypes.func,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string
      })
    )
  }

  state = {
    repositoryInput: ''
  }

  handleAddRepository = e => {
    e.preventDefault()
    console.log('handleAddRepository')
    this.props.addFavorite()
  }

  render () {
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder='usuário/repositório'
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            type='text'
          />
          <button type='submit'>Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong>({favorite.description})
              </p>
              <a href={favorite.url} target='blank'>
                Ver no Github
              </a>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
