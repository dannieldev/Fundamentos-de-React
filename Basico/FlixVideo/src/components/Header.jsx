import React from "react";
import '../assets/style/components/Header.scss'

import logo from '../assets/static/mood50.png';
import usericon from '../assets/static/user.png'

const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Mood" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img tabindex="0" src={usericon} alt="user" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);
export default Header;