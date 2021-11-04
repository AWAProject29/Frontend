import React from 'react';
import styles from './Header.module.css';
import logo from './images/logo.png';
import about from './images/about.png';

export default function Header() {
    return (
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
                <img className = { styles.headerLogo } src = { logo } alt = "logo" />
                <button><img className = { styles.headerAbout } src = { about } alt = "about" /></button>

            </div>
        </div>
    )
}