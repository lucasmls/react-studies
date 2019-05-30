import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, signedIn, ...rest }) => (
  <Route
    {...rest}
    render={properties =>
      !signedIn ? (
        <Component {...properties} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: properties.location } }}
        />
      )
    }
  />
)

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  signedIn: state.auth.signedIn
})

export default connect(mapStateToProps)(PublicRoute)
