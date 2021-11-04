import React from 'react'
import style from './Header.css'
import logo from './images/logo.png'
import about from './images/about.png'

function Header() {
    return (
        <div className = { style.header }>
            <div className = { style.headerContainer }>
                <img className = "headerLogo" src = { logo } alt = "logo" />
                <button><img className = "headerAbout" src = { about } alt = "about" /></button>

            </div>
        </div>
    )
}

export default Header