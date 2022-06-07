import { createGlobalStyle } from "styled-components";
import { fundo } from "./UI/variaveis";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 8vh;
}

a{
  text-decoration: none;
  color: inherit;
}
body{
  background-color: ${fundo};
  overflow-x: hidden;
}
`;
