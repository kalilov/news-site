import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../../container/img/logo.png'

class Header extends Component {
    render() {
        return (
            <div className="top">
                <div className="content">
                    <div className="container">
                        <div className="top-logo">
                            <img src={logo}/>
                        </div>
                        <ul className="nav">
                            <li className="nav-i">
                                <NavLink className="nav-link" to="/">Main</NavLink>
                                <NavLink className="nav-link" to="/">News</NavLink>
                                <NavLink className="nav-link" to="/">Add</NavLink>
                                <NavLink className="nav-link" to="/">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;