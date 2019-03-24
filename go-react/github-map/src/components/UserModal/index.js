import React, { Fragment } from 'react'
import ReactModal from 'react-modal'

import { ModalStyle, ModalTitle, UserForm, ModalButton } from './styles'

const UserModal = () => (
  <Fragment>
    <ModalStyle />
    <ReactModal
      isOpen={false}
      className='user-modal'
      overlayClassName='user-modal__overlay'
      ariaHideApp={false}
    >
      <div>
        <ModalTitle>Adicionar novo usuário</ModalTitle>
        <UserForm>
          <input type='text' placeholder='Usuário no Github' />

          <div className='actions'>
            <ModalButton>Cancelar</ModalButton>
            <ModalButton backgroundColor='rgb(150, 200, 131)' type='submit'>
              Salvar
            </ModalButton>
          </div>
        </UserForm>
      </div>
    </ReactModal>
  </Fragment>
)

export default UserModal
