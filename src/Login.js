import React from 'react';
import styles from './components/modules/Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {


    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post('http://localhost:4000/jwtlogin',
            null,
            {
                auth: {
                    username: event.target.username.value,
                    password: event.target.password.value
                }
            }
            );
        
            console.log(result);
            const receivedJWT = result.data.token;

        } catch (error) {
            console.error(error);
        }
    }









    return (
        <div>
            <h1>Login</h1>
            <form onSubmit= { handleLoginSubmit }>
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
                    <button type ="submit">Login</button>
                    <Link to ="/signup"> <button className = { styles.signUpButton }>Sign Up</button> </Link>
                    <Link to ="/payment"> <button className = { styles.signUpButton }>Payment</button> </Link>
                    <Link to ="/menu"> <button className = { styles.signUpButton }>Menu</button> </Link>
                </div>
            </div>
            </form>
        </div>
    )
}