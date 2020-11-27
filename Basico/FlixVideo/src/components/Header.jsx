import React from "react";
import '../assets/style/components/Header.scss'

const Header = () => (
    <header className="header">
        <img className="header__img" src="./icons/mood50.png" alt="Mood" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img tabindex="0" src="./icons/user.png" alt="user" />
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