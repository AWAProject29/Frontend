import React from 'react';
import styles from './modules/Header.module.css';
import logo from './images/logo.png';
import cart from './images/chestclosed.png';
import { Link } from 'react-router-dom'



export default function Header(props) {


    let frontPageRoute = <>
        <Link to="/"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
    </>

    let loginButton = <>
        <Link to="login"><button className = { styles.login }>Login</button></Link>
    </>

    let logOutButton = <>
        <Link to="/"><button  className = { styles.login } onClick={ props.logout } hidden>Logout</button></Link>
    </>

    let shoppingCart = <>
        <Link to="/shoppingcart"> <img className = { styles.cart } src = { cart } alt = "cart" hidden/> </Link>
    </>

    if(props.isUserLoggedIn === true) {
        frontPageRoute = <Link to="/ProtectedCustomer"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
    }
    if (props.isManagerLoggedIn === true) {
        frontPageRoute = <Link to="/ProtectedManager"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
    }
    if (props.isManagerLoggedIn || props.isUserLoggedIn === true) {
        loginButton = <Link to="login"><button className = { styles.login } hidden>Login</button></Link>
    }
    if (props.isManagerLoggedIn || props.isUserLoggedIn === true) {
        logOutButton = <Link to="/"><button  className = { styles.login } onClick={ props.logout }>Logout</button></Link>
    }
  
    if (props.isManagerLoggedIn || props.isUserLoggedIn === true) {
        shoppingCart = <Link to="/shoppingcart"> <img className = { styles.cart } src = { cart } alt = "cart" /> </Link>
    }


    return (
        
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
            { frontPageRoute }
                <div className = { styles.headerControls }>
                      
                    { loginButton }
                    { logOutButton }
                    { shoppingCart }     
                    
                </div>
            </div>
        </div>
    )
}