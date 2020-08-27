import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --blue: hsla(210, 50%, 60%, 1);
  --red: hsla(0, 40%, 40%, 1);
  --grey: hsla(360, 0%, 80%, 1);
  --azure: hsla(170, 80%, 90%, 1);
  font-size: calc(1vw + 1vh + 0.4vmin);
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  background-color: hsla(210, 90%, 90%, 1);
  margin: 0;
  padding: 0;
  font-family: 'Georgia',monospace;
}

button {
font-family: 'Georgia',monospace;}
`;
export default GlobalStyle;
