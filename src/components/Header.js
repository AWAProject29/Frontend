import React from 'react';
import styles from './modules/Header.module.css';
import logo from './images/logo.png';
import cart from './images/chestclosed.png';
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
                <Link to="/"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
                <div className = { styles.headerControls }>
                    <Link to="login"><button className = { styles.login }>Login</button></Link>
                    <img className = { styles.cart } src = { cart } alt = "cart" />
                </div>
            </div>
        </div>
    )
}