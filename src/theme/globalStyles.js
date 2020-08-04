import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding: 0;

 /* The emerging W3C standard
that is currently Firefox-only */
  scrollbar-width: thin;
  scrollbar-color: #264182 #4488D1;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 15px;
}
*::-webkit-scrollbar-track {
  background: #4488D1;
}
*::-webkit-scrollbar-thumb {
  background-color: #264182;
  border-radius: 20px;
  border: 2px solid #4488D1;
  box-shadow: inset 0 -90px 0px 0px #4488D1;
}

html{
    font-size: 62.5%;
   
}

body{
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: #4488D1;
}

a{
    word-wrap: break-all;
}
`;

export default GlobalStyle;
