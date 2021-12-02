import styles from '../components/modules/Login.module.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Constants from '../Constants.json'

export default function Login() {

    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await axios.post(
                Constants.API_ADDRESS + '/loginForJWT',
                null,
                {
                    auth: {
                        username: event.target.username.value,
                        email: event.target.email.value,
                        password: event.target.password.value
                    }
                }
            );

            console.log(result);
            // const receiwedJWT = result.data.token

            navigate('/', { replace: true });

            } catch (error) {
                console.log(error);
            }
    }   


    return (
        <div>
            <div className = { styles.container }>
                <div className = { styles.formContainer } onSubmit={ handleLoginSubmit }> 
                    <form className = { styles.loginFields }>
                        <label>Email:</label>
                        <input type="text" name="email" placeholder="your@email.com" />
                        <label>Password:</label>
                        <input type="password" name="password" />
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