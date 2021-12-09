import React from 'react';
import styles from './modules/Header.module.css';
import logo from './images/logo.png';
import cart from './images/chestclosed.png';
import { Link } from 'react-router-dom'


export default function Header(props) {
    return (
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
                <Link to="/"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
                <div className = { styles.headerControls }>
                    <Link to="SignUp"><button className = { styles.login }>Sign Up</button></Link>
                    <Link to="login"><button className = { styles.login }>Login</button></Link>
                    <Link to="shoppingcart"> <img className = { styles.cart } src = { cart } alt = "cart" /> </Link>
                    <Link to="/"><button  className = { styles.login } onClick={ props.logout }>Logout</button></Link>
                </div>
            </div>
        </div>
    )
}