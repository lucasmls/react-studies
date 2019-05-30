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
    font-family: 'Montserrat', sans-serif;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #181818;
  }

  html, body, #root {
    height: 100%;
  }
`

export default GlobalStyle
