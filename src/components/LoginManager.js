import styles from '../components/modules/Login.module.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Constants from '../Constants.json'

export default function LoginManager(props) {

    const navigate = useNavigate();    

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {

            const result = await axios.post(Constants.API_ADDRESS + '/loginForJWTmanager', null, 
            { 

                auth: {

                    username: event.target.email.value,
                    password: event.target.password.value,
                    managerauthentication: event.target.managerauthentication

                }

            }) 

            console.log(result);
            const receivedJWT = result.data.jwt;
            props.login(receivedJWT)

            setTimeout(() => {

                navigate("/ProtectedManager", { replace: true });

            }, 1000);

            } catch (error) {

                console.log(error);

            }

    }


    return (
        <div>
            <div className = { styles.container }>
                <div className = { styles.formContainer } onSubmit={ handleLoginSubmit }> 
                    <form className = { styles.loginFields }>
                        <label>Manager Login</label>
                        <label>Email:</label>
                            <input type="text" name="email" placeholder="your@email.com" />
                        <label>Password:</label>
                            <input type="password" name="password" />
                        <label>managerauthentication:</label>
                            <input type="password" name="managerauthentication" />
                        <div className = { styles.buttonContainer }>
                            <button className = { styles.signUpButton } type="submit" >Login</button>
                            <Link to ="/managersignup"><button>Sign up as Manager</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}