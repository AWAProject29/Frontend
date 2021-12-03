import styles from '../components/modules/Login.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Constants from '../Constants.json'

export default function LoginManager() {

    

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await axios.post(
                Constants.API_ADDRESS + '/LoginforJWTmanager',
                null,
                {
                    auth: {
                        email: event.target.email.value,
                        password: event.target.password.value,
                        managerauthentication: event.target.managerauthentication
                    }
                    
                }
            );
            
            console.log(result);
            
            } catch (error) {
                console.log(error);
            }
    }   


    return (
        <div>
            <div className = { styles.container }>
                <div className = { styles.formContainer } onSubmit={ handleLoginSubmit }> 
                    <form className = { styles.loginFields }>
                        <label>Login Manager</label>
                        <label>Email:</label>
                            <input type="text" name="email" placeholder="your@email.com" />
                        <label>Password:</label>
                            <input type="password" name="password" />
                        <label>managerauthentication:</label>
                            <input type="password" name="managerauthentication" />
                        <div>
                            <button className = { styles.signUpButton } type="submit" >Login</button>
                        </div>
                    </form>
                    
                </div>
                <div className = { styles.buttonContainer }>
                    <button>Login</button>
                    <Link to ="/signup"> <button className = { styles.signUpButton }>Sign Up</button> </Link>
                    <Link to ="/payment"> <button className = { styles.signUpButton }>Payment</button> </Link>
                    <Link to ="/menu"> <button className = { styles.signUpButton }>Menu</button> </Link>
                </div>
            </div>
        </div>
    )
}