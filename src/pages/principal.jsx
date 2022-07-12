import styled from "styled-components";

import Banner from "../img/fundo.jpg";

import { tablet } from "../components/UI/variaveis";
import { branco, corPrimaria } from "../components/UI/variaveis";
import { barlow, sansserif } from "../components/UI/variaveis";

const Container = styled.section`
  height: 92vh;
  width: 100%;
  margin: 50px 0 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url(${Banner}) no-repeat;
  background-size: cover;
  overflow-x: hidden;
  

  .esquerda {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: inherit;
  }
  .direita {
    display: flex;
    align-items: center;
    width: 60%;
    height: inherit;
  }
  @media screen and (max-width: ${tablet}) {
    height: 93vh;
    border-radius: 0;
  }
  
`;

const Ptext = styled.p`
  background-color: ${corPrimaria};
  color: ${branco};
  font-family: ${(barlow, sansserif)};
  font-size: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 120px;
  width: 50%;
  opacity: 70%;
  margin: 0 0 30px 0;

  @media screen and (max-width: ${tablet}) {
    width: 100%;
    border-radius: 0;
  }
`;

export default function Principal() {
  return (
    <Container id="principal">
      <Ptext>O que você planeja para amanhã?</Ptext>
    </Container>
  );
}
