import React from 'react'

// Styles
import { HeaderBar, RegisterButton } from './styles'

const Header = () => {
  return (
    <HeaderBar>
      <h6>Reactflix</h6>
      <RegisterButton>Cadastrar Vídeo</RegisterButton>
    </HeaderBar>
  );
}

export default Header;
