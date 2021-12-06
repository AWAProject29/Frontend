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

            const result = await axios.post(Constants.API_ADDRESS + '/loginForJWT', null, { //make the route to be same that you have on server

                auth: {

                    username: event.target.email.value,

                    password: event.target.password.value

                }

            }) 

            console.log(result);

            setTimeout(() => {

                navigate("/ProtectedCustomer", { replace: true });

            }, 1500);

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
                            <input type="text" name="password" />
                        <div className = { styles.buttonContainer }>
                            <button className = { styles.signUpButton } type="submit" >Login</button>
                            <Link to="/LoginManager"> <button>Login as Manager</button> </Link>
                            <Link to ="/signup"> <button className = { styles.signUpButton }>Sign Up</button> </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}