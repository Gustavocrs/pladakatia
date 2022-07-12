import styled from "styled-components";

import { corPrimaria, fundo, barlow } from "../components/UI/variaveis";

const TerapiaStyled = styled.div`
  height: 92vh;
  background-color: ${fundo};
  font-family: ${barlow};
  display: flex;
  justify-content: space-between;
  color: ${corPrimaria};
  font-size: 2rem;
`;

const DivStyled = styled.div`
  width: 50%;
  margin: 10px;
  background-color: ${corPrimaria};
  font-family: ${barlow};
  display: flex;
  justify-content: center;
  color: ${fundo};
  font-size: 2rem;
  text-align: center;
  border-radius: 5px;
`;

const DivStyledImg = styled(DivStyled)`
  background-color: ${fundo};
  color: ${corPrimaria};
`

export default function Terapia() {
  return (
    <div id="terapia">
      <TerapiaStyled>
        <DivStyledImg>Imagem</DivStyledImg>
        <DivStyled>Texto</DivStyled>
      </TerapiaStyled>
    </div>
  );
}
