import React, { Fragment } from 'react'
import ReactModal from 'react-modal'

import { ModalStyle, ModalTitle, RepositoryForm, ModalButton } from './styles'

const RepositoryModal = () => (
  <Fragment>
    <ModalStyle />
    <ReactModal
      isOpen
      className='repository-modal'
      overlayClassName='repository-modal__overlay'
      ariaHideApp={false}
    >
      <div>
        <ModalTitle>Adicionar novo usuário</ModalTitle>
        <RepositoryForm>
          <input type='text' placeholder='Usuário no Github' />

          <div className='actions'>
            <ModalButton>Cancelar</ModalButton>
            <ModalButton backgroundColor='rgb(150, 200, 131)' type='submit'>
              Salvar
            </ModalButton>
          </div>
        </RepositoryForm>
      </div>
    </ReactModal>
  </Fragment>
)

export default RepositoryModal
