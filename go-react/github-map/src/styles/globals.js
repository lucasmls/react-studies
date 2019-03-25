import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialised !important;
    font-family: sans-serif;
  }

  .fade-in-left {
    animation: fadeInLeft .5s;
  }

  .fade-in-bottom {
    animation: fadeInBottom .6s;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translatex(-100px);
    }
    to {
      opacity: 1;
      transform: translatex(0);
    }
  }

  @keyframes fadeInBottom {
    from {
      opacity: 0;
      top: 40%;
    }
    to {
      opacity: 1;
      top: 50%;
    }
  }

`

export default GlobalStyle
