import React from 'react'

// Redux
import { connect } from 'react-redux'
import { openRegisterForm } from '../../redux/actions/ui'

// Styles
import { HeaderBar, RegisterButton } from './styles'

const Header = ({ handleOpenRegister }) => {
  return (
    <HeaderBar>
      <h6>Reactflix</h6>
      <RegisterButton onClick={handleOpenRegister}>Cadastrar Vídeo</RegisterButton>
    </HeaderBar>
  );
}

const mapDispatchToProps = dispatch => ({
  handleOpenRegister: () => dispatch(openRegisterForm())
})

export default connect(null, mapDispatchToProps)(Header);
