import React from 'react';
import styles from './modules/Header.module.css';
import logo from './images/logo.png';

export default function Header() {
    return (
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
                <img className = { styles.headerLogo } src = { logo } alt = "logo" />
                <div className = { styles.headerControls }>
                    <button className = { styles.login }>Login</button>
                    <button className = { styles.signUp }>Sign Up</button>
                </div>
            </div>
        </div>
    )
}