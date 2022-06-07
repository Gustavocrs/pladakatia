import styled from "styled-components";

export const ContatosSection = styled.section`
  height: 92vh;
  width: 100%;
  background-color: lightcyan;
`;

export default function Contatos() {
  return (
    <ContatosSection id="contatos">
      <h1>Página Contatos</h1>
    </ContatosSection>
  );
}
