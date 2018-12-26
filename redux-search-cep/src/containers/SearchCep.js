// React
import React from 'react'

// Components
import SearchForm from '../components/SearchForm'
import AddressTable from '../components/AddressTable'

const SearchCep = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>Search CEP!</h3>
      </div>

      <div className="row">

        <div className="column column-40">
          <SearchForm />
        </div>

        <div className="column column-60">
          <AddressTable />
        </div>

      </div>
    </div>
  );
}

export default SearchCep;