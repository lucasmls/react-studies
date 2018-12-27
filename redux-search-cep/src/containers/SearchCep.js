// React
import React from 'react'

// Components
import SearchForm from '../components/SearchForm'
import AddressTable from '../components/AddressTable'

// Redux
import { connect } from 'react-redux'
import { fetchAddress } from '../redux/actions/address/address'

const SearchCep = ({ handleSubmit, address }) => {
  return (
    <div className="container">
      <div className="row">
        <h3>Search CEP!</h3>
      </div>

      <div className="row">

        <div className="column column-40">
          <SearchForm handleSubmit={handleSubmit} />
        </div>

        <div className="column column-60">
          <AddressTable { ...address } />
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  address: state.address
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: (e) => {
    e.preventDefault()
    const CEP = e.target.cep.value
    dispatch(fetchAddress(CEP))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCep)