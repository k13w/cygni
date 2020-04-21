import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
    @import url('https://fonts.googleapis.com/css2?family=Economica&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');
  }
  
  h1, button {
    font-family: 'Quantico', sans-serif;
  }

  #root {
    max-width: 100vw;
    margin: 0 auto;
  }

  hr {
    position: relative;
    margin: 20px;
    opacity: 0.3;
    margin-top: 50px;
  }

  h4 {
    font-family: 'Economica', sans-serif;
  }

  .footer {
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap');
    font-family: 'Baloo Bhaina 2', cursive;
  }
`;