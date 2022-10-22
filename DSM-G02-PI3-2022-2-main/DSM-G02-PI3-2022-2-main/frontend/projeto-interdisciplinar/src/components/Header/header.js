import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logoo.svg"
import Icone from "../../img/icone.svg"
import "./header.css";

//Header da aplicaçãõ
export default function Header() {
  return (
    
      <div className="nav">
        <nav>
          <ul className="list">
            <img className="logo" src={Logo}/>
           <li>
              <Link className="l1" to="/">ErgoAssess</Link>
            </li>
            <li>
              <Link className="link" to="/">HOME</Link>
            </li>
            <li>
              <Link className="link" to="/Questoes">SOBRE</Link>
            </li>
            <li>
              <Link className="link" to="/Sobre">AVALIAR</Link>
            </li>
            <li>
              <Link className="link" to="/Sobre">GLOSSARIO</Link>
            </li>
            <img className="icone" src={Icone}/>
          </ul>
        </nav>
      </div>
    
  );
}
