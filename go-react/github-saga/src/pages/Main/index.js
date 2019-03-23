import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FavoriteActions from '../../store/actions/favorites'

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.oneOf([null, PropTypes.string]),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string
        })
      )
    })
  }

  state = {
    repositoryInput: ''
  }

  handleAddRepository = e => {
    e.preventDefault()
    this.props.addFavoriteRequest(this.state.repositoryInput)
    this.setState({ repositoryInput: '' })
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

          {this.props.favorites.loading && <span>Loading...</span>}
          {!!this.props.favorites.error && (
            <span style={{ color: '#f00' }}>{this.props.favorites.error}</span>
          )}
        </form>

        <ul>
          {this.props.favorites.data.map(favorite => (
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
