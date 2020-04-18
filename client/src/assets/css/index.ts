import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }
  
  h1, button {
    @import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');
    font-family: 'Quantico', sans-serif;
  }

  #root {
    max-width: 100vw;
    margin: 0 auto;
  }

  .fonter {
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  .user-font {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;