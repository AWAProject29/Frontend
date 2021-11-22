import React from 'react';
import styles from './components/modules/Login.module.css';
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className = { styles.container }>
                <div className = { styles.formContainer }> 
                    <form className = { styles.loginFields }>
                        <label>Email:</label>
                        <input type="text" name="email" placeholder="your@email.com" />
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </form>
                </div>
                <div className = { styles.buttonContainer }>
                    <button>Login</button>
                    <Link to ="/signup"> <button>Sign Up</button> </Link>
                    <Link to ="/payment"> <button>Payment</button> </Link>
                </div>
            </div>
        </div>
    )
}