import React from "react";
import './header.scss';
import logoDice from '../../images/diceLogo.png';

const Header = () => {
    return (
        <header className="page-header">
            <h1><span className="headerRol">ROL</span>GANIZADOR</h1>
            <img src={logoDice} alt="Logo Rolganizador" />
        </header>
    );
};

export default Header;