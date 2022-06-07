import styled from "styled-components";

import Banner from "../img/fundo.jpg";

import { tablet } from "../components/UI/variaveis";
import { branco, vermelho } from "../components/UI/variaveis";
import { barlow, sansserif } from "../components/UI/variaveis";

const Container = styled.section`
  height: 92vh;
  width: 100%;
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

const ImgPerfil = styled.img`
  width: 300px;
  height: 300px;
  background-color: ${vermelho};
  border-radius: 150px;
  margin: 0 50px;
`;

const Ptext = styled.p`
  background-color: ${vermelho};
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
      {/* <div className="esquerda">
        <ImgPerfil src={FotoPerfil} alt="Foto de perfil" />
      </div>
      <div className="direita">
        <h1>Frase de efeito</h1>
      </div> */}
    </Container>
  );
}
