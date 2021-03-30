import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../../container/img/logo.png'
import './Footer.css'
 
const Footer = () => {
    return (
        <div className="foot">
            <div className="container">
                <footer className="footer">
                    <div className="footer-img">
                        <img src={logo}/>
                    </div>
                    <div className="foot-block">
                        <h3 className="footer-title">Меню</h3>
                        <ul className="foot-nav">
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/Main" exact>Main</NavLink>
                            </li>
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/News" exact>News</NavLink>
                            </li>
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/Add" exact>Add</NavLink>
                            </li>
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/Contact" exact>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="foot-block">
                        <h3 className="footer-title">Категории</h3>
                        <ul className="foot-nav">                                                                        
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/News" exact>ДОРОЖНАЯ СЕРИЯ</NavLink>
                            </li>
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/Add" exact>УЛИЧНАЯ СЕРИ</NavLink>
                            </li>
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/Contact" exact>ГОРНАЯ СЕРИЯ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="foot-block">
                        <h3 className="footer-title">Информация</h3>
                        <ul className="foot-nav">                                                        
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/News" exact>О нас</NavLink>
                            </li>
                            <li className="foot-item">
                                <NavLink className="foot-link" to="/Add" exact>Контакты</NavLink>
                            </li>
                         </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;