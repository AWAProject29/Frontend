import React from 'react';
import styles from './modules/Header.module.css';
import logo from './images/logo.png';
import cart from './images/chestclosed.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import useGlobalCounter from './useGlobalCounter'

export default function Header(props) {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(useGlobalCounter);

    
    function changeStatus(statusNumber) {
        setIsUserLoggedIn(statusNumber);
        
        console.log("This is the header statusnumber: ");
        console.log(statusNumber);
        console.log(isUserLoggedIn);
        
    }
    console.log("This is the global variable: ")
    

    let frontPageRoute = <>
    
        <Link to="/"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
    </>



    

    if(isUserLoggedIn == 2) {
        frontPageRoute = <Link to="/ProtectedCustomer"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
    }  else if (isUserLoggedIn == 3) {
        frontPageRoute = <Link to="/ProtectedManager"><img className = { styles.headerLogo } src = { logo } alt = "logo" /></Link>
    }

    return (
        
        <div className = { styles.header }>
            <div className = { styles.headerContainer }>
            { frontPageRoute }
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