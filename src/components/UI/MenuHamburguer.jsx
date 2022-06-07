import styled from "styled-components";
import { branco } from "./variaveis";

export const Line = styled.div`
  width: 35px;
  height: 3px;
  background-color: ${branco};
  margin: 5px 15px 0 0;
  border-radius: 5px;
`;

export default function MenuHamburguer() {
  return (
    <>
      <Line />
      <Line />
      <Line />
    </>
  );
}
