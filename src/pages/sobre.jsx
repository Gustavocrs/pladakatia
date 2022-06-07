import styled from "styled-components";

import FotoPerfil from "../img/Fotosemfundo.png";

import { tablet } from "../components/UI/variaveis";

import { fundo } from "../components/UI/variaveis"; //CORES

const SobreSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: ${fundo};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${tablet}) {
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
  margin: 0 80px 0 20px;
  line-height: 1.8rem;
  @media screen and (max-width: ${tablet}) {
    width: 80%;
    margin: auto auto;
  }
`;

export default function Sobre() {
  return (
    <SobreSection id="sobre">
      <DivPerfil>
        <img src={FotoPerfil} alt="" />
      </DivPerfil>
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
    </SobreSection>
  );
}
