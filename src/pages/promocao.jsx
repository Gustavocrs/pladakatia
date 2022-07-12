import styled from "styled-components";

import Psicanalise from "../img/psicanalise.jpg";

import { tablet } from "../components/UI/variaveis";

import { fundo } from "../components/UI/variaveis"; //CORES

const SobreSection = styled.section`
  height: 92vh;
  width: 90%;
  background-color: ${fundo};
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${tablet}) {
    height: auto;
    flex-direction: column;
    border-radius: 0;
  }
`;

const DivPerfil = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${tablet}) {
    width: 100%;
  }
`;

const DivTexto = styled(DivPerfil)`
  width: 70%;
  margin: 0 80px 0 100px;
  line-height: 1.8rem;
  font-family: sans-serif;
  @media screen and (max-width: ${tablet}) {
    width: 80%;
    margin: auto auto;
  }
`;
const ImgPerfil = styled.img`
  width: 100%;
`;

export default function Promocao() {
  return (
    <SobreSection id="promocao">
      <DivTexto>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </DivTexto>
      <DivPerfil>
        <ImgPerfil src={Psicanalise} alt={Psicanalise} />
      </DivPerfil>
    </SobreSection>
  );
}
