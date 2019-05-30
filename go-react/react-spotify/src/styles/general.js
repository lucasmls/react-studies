import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
    font-family: Helvetica, sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #FADE6F;
  }
`

export default GlobalStyle
