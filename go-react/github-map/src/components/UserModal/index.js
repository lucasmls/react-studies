import React, { Fragment } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import { FaSpinner as LoadingSpin } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ModalStyle, ModalTitle, UserForm, ModalButton } from './styles'
import { Creators as ModalActions } from '../../store/ducks/modal'
import { Creators as UsersActions } from '../../store/ducks/users'

function UserModal ({ modal, closeUserModal, fetchUser, isLoading }) {
  function handleSubmit (e) {
    e.preventDefault()
    const username = e.target.user.value
    fetchUser({ username, coordinates: modal.coordinates })
  }

  return (
    <Fragment>
      <ModalStyle />
      <ReactModal
        isOpen={modal.isOpened}
        onRequestClose={closeUserModal}
        className='user-modal fade-in-bottom'
        overlayClassName='user-modal__overlay'
        ariaHideApp={false}
      >
        <div>
          <ModalTitle>Adicionar novo usuário</ModalTitle>
          <UserForm onSubmit={handleSubmit}>
            <input type='text' name='user' placeholder='Usuário no Github' />

            <div className='actions'>
              <ModalButton onClick={closeUserModal} type='button'>
                Cancelar
              </ModalButton>
              <ModalButton backgroundColor='rgb(150, 200, 131)' type='submit'>
                {isLoading ? <LoadingSpin className='rotate' /> : 'Salvar'}
              </ModalButton>
            </div>
          </UserForm>
        </div>
      </ReactModal>
    </Fragment>
  )
}

UserModal.propTypes = {
  modal: PropTypes.shape({
    isOpened: PropTypes.bool,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  }),
  closeUserModal: PropTypes.func,
  fetchUser: PropTypes.func,
  isLoading: PropTypes.bool
}

const mapStateToProps = state => ({
  modal: state.modal,
  isLoading: state.users.isLoading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UsersActions, ...ModalActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal)
