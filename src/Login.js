import React from 'react';
import styles from './components/modules/Login.module.css';

export default function Login() {
    return (
        <div>
            <div className = { styles.container }>
                <div className = { styles.formContainer }> 
                <form className = { styles.email }>
                    <label>
                      Email:
                      </label>
                      <input type="text" name="email" />
                    <label>
                      Password:
                      </label>
                      <input type="text" name="password" />
                </form>
                </div>
                <div className = { styles.buttonContainer }>
                    <button className = { styles.loginButton}>login</button>
                    <button className = { styles.signUpButton }>register</button>
                </div>
            </div>
        </div>
    )
}