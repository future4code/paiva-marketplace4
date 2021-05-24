import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*{ 
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}

html {
    max-width: 100vw;
    min-height: 100vh;
}
body, #root {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased !important;
}

`