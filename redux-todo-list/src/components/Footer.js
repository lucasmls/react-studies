import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
  return (
    <div>
      <span>Filtrar: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        Todos
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completos
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Incompletos
      </FilterLink>
    </div>
  )
}

export default Footer