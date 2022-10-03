import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`




/* dosis-regular - latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 400;
  src: url('../Fonts/dosis-v27-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../Fonts/dosis-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../Fonts/dosis-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
  
}

/* dosis-500 - latin */
@font-face {
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 500;
  src: url('../Fonts/dosis-v27-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
  
       url('../Fonts/dosis-v27-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../Fonts/dosis-v27-latin-500.woff') format('woff'), /* Modern Browsers */
  
}




* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    font-family: 'Dosis', sans-serif;
}



code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

.card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 120px 0 100px 0;
}


`
export default GlobalStyle
