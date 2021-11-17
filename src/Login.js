import React from 'react';
import styles from './components/modules/Login.module.css';
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className = { styles.container }>
                <div className = { styles.formContainer }> 
                <form className = { styles.email }>
                    <label>
                      Email:
                      </label>
                      <input type="text" name="email" placeholder="your@email.com" />
                    <label>
                      Password:
                      </label>
                      <input type="text" name="password" />
                </form>
                </div>
                <div className = { styles.buttonContainer }>
                    <button className = { styles.loginButton}>Login</button>
                    <Link to ="/signup"> <button className = { styles.signUpButton }>Sign Up</button> </Link>
                </div>
            </div>
        </div>
    )
}