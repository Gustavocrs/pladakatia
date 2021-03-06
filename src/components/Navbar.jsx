import { useState } from "react";
import styled from "styled-components";
import { branco, corPrimaria, corSecundaria } from "./UI/variaveis";
import { barlow, sansserif } from "./UI/variaveis";
import { tablet } from "./UI/variaveis";
import Logo from "../img/Logo_pladakjj.png";
import MenuHamburguer from "./UI/MenuHamburguer";

export const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  background-color: ${corPrimaria};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  font-family: ${(barlow, sansserif)};
  color: ${branco};
  position: fixed;
  top: 0;
  z-index: 5;

  .logo{
    margin: 0 20px;
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 0 10px;
    cursor: pointer;
    text-align: center;
    width: 120px;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
      transition: 500ms;
      background-color: ${corSecundaria};
    }
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
  }



  @media screen and (max-width: ${tablet}) {
    ul {
      position: absolute;
      top: 8vh;
      right: 0;
      width: 100vw;
      height: 92vh;
      background: ${corPrimaria};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateX(100%);

    }


    li {
      margin: 20px 0;
    }

    .mobile-menu {
      display: block;
    }

    .menuOpen {
      transform: translateX(0);
      transition: 500ms;
    }
    .menuClose {
      transform: translateX(100%);
      transition: 500ms;
    }
  }
`;

const Img = styled.img`
  border-radius: 15px;
  margin: 0 0 0 30px;

  @media screen and (max-width: ${tablet}) {
    margin-left: auto auto;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Nav>
      <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuHamburguer />
      </div>
      <Img className="logo" src={Logo} alt="Logo do Plada Katia" />
      <ul className={menuOpen ? "nav-list menuOpen" : "nav-list menuClose"}>
        <li>
          <a href="#principal" onClick={() => setMenuOpen(!menuOpen)}>
            Principal
          </a>
        </li>
        <li>
          <a href="#sobre" onClick={() => setMenuOpen(!menuOpen)}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#terapia" onClick={() => setMenuOpen(!menuOpen)}>
            Terapia
          </a>
        </li>
        <li>
          <a href="#promocao" onClick={() => setMenuOpen(!menuOpen)}>
            Promo????o
          </a>
        </li>
        {/* <li>
          <a href="#contatos" onClick={() => setMenuOpen(!menuOpen)}>
            Contatos
          </a>
        </li> */}
      </ul>
    </Nav>
  );
}
