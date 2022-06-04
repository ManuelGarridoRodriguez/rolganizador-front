import React from "react";
import './header.scss';
import logoDice from '../../images/diceLogo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="page-header">
            <Link to="/">
                <h1><span className="headerRol">ROL</span>GANIZADOR</h1>
                <img src={logoDice} alt="Logo Rolganizador" />
            </Link>
        </header>
    );
};

export default Header;