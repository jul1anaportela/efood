import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#e66767',
  branca: '#fff',
  background: '#fff8f2',
  bege: '#ffebd9'
}

export const GlobalCss = createGlobalStyle`
    * {
       margin: 0;
       padding:0;
       box-sizing: border-box;
       font-family: Roboto, sans-serif; 
       text-decoration: none;
       list-style: none;
    }
    body {
        background-color: ${cores.background};
        color: ${cores.vermelho};
    }
    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
