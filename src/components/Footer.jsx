import styled from "styled-components";

import BannerGustavocrs from "../img/Loguts.png";

import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import { vermelho, branco, coral } from "./UI/variaveis"; //CORES
import { barlow, sansserif } from "./UI/variaveis"; //FONTES
import { mobile, tablet } from "./UI/variaveis"; //RESPONSIVIDADE

const Foo = styled.footer`
  display: flex;
  justify-content: space-around;
  height: 125px;
  width: 100%;
  background-color: ${vermelho};
  color: ${branco};
  font-family: ${(barlow, sansserif)};

  @media screen and (max-width: ${tablet}) {
    flex-direction: column;
    height: 300px;
  }
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${tablet}) {
    flex-direction: column;
    height: 300px;
    width: 100%;
  }
`;

const FooterDivIcons = styled(FooterDiv)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  color: ${branco};
  font-size: 2.5rem;

  .icons {
    color: ${branco};
    margin: 0 30px;
    cursor: pointer;
  }
  .icons:hover {
    color: ${coral};
  }

  @media screen and (max-width: ${tablet}) {
    width: 100%;
  }
`;

const FooterDivText = styled(FooterDiv)`
  width: 50%;

  @media screen and (max-width: ${tablet}) {
    width: 100%;
  }
`;

const Img = styled.img`
  border-radius: 15px;
`;

export default function Footer() {
  return (
    <Foo>
      <FooterDiv>
        <FooterDivText>Copyright © - PladaKJJ</FooterDivText>

        <FooterDivIcons>
          <FiMail className="icons" />
          <BsWhatsapp className="icons" />
          <BsFacebook className="icons" />
          <BsInstagram className="icons" />
        </FooterDivIcons>

        <FooterDivText>
          <a href="https://gustavocrs.tech" target="blank" rel="noreferrer">
            <Img src={BannerGustavocrs} />
          </a>
        </FooterDivText>
      </FooterDiv>
    </Foo>
  );
}
