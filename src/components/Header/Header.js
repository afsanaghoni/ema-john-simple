import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/">Order</a>
                <a href="/">Order Review</a>
                <a href="/">manage inventory </a>
                <a href="/">log in</a>
            </div>
        </nav>

    );
};

export default Header;