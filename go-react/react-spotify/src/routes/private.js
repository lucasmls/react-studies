import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, signedIn, ...rest }) => (
  <Route
    {...rest}
    render={properties =>
      signedIn ? (
        <Component {...properties} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: properties.location } }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  signedIn: state.auth.signedIn
})

export default connect(mapStateToProps)(PrivateRoute)
