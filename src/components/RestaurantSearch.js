import React from 'react';
import styles from './modules/Header.module.css';
import logo from './images/logo.png';
import cart from './images/chestclosed.png';


export default function Header() {
    return (
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
                <img className = { styles.headerLogo } src = { logo } alt = "logo" />
                <div className = { styles.headerControls }>
                    <button className = { styles.login }>Login</button>
                    <img className = { styles.cart } src = { cart } alt = "cart" />
                </div>
            </div>
        </div>
    )
}