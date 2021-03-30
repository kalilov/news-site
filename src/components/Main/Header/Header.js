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
                            <NavLink className="nav-link" to="/Main">Main</NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/News">News</NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/Add">Add</NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </header>
                <div className="header-info">
                    <div className="line"></div>
                    <h1 className="header-info-title">fly high <br/>on your bike</h1>
                    <p className="header-info-slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
        </div>
    );
};

export default Header;