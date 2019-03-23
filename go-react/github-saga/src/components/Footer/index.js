import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Footer = ({ favCount }) => (
  <footer>
    <p>Você tem {favCount} favoritos.</p>
  </footer>
)

Footer.propTypes = {
  favCount: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  favCount: state.favorites.length
})

export default connect(mapStateToProps)(Footer)
