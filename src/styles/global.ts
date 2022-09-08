import { createGlobalStyle } from 'styled-components';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

import '@fontsource/archivo/300.css';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/500.css';
import '@fontsource/archivo/700.css';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing: border-box; 
   }
     
   #root{
    height: 100%;
   }

   html,
   body {
     height: 100%;
     width: 100%;
     line-height: 1.5;
     font-family: "Poppins";
     overflow-y: scroll;
   }  

   main {
    height: 100%;
   }

  ::placeholder {
    color: ${theme.colors.placeholder};
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.colors.placeholder};
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${theme.colors.placeholder};
  }

  * {
    -webkit-tap-highlight-color: ${theme.colors.transparent};
    -moz-tap-highlight-color: ${theme.colors.transparent};  
  }
`;

export default GlobalStyles;
