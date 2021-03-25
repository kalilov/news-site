import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../../container/img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="top">
            <div className="container">
                <header className="header">
                    <div className="top-logo">
                        <img className="logo" src={logo}/>
                    </div>
                    <ul className="nav">
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/">Main</NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/">News</NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/">Add</NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/">Contact</NavLink>
                        </li>
                    </ul>
                </header>
                <h1 className="header-info">Всё о велоспорте</h1>
            </div>
        </div>
    );
};

export default Header;