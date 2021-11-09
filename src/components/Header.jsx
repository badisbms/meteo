import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <img className="header_logo" src="logo_meteo.png" alt="" />
           <h1>Mon app météo</h1>
        </div>
    );
};

export default Header;