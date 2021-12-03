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
                        <div>
                            <button className = { styles.signUpButton } type="submit" >Login</button>
                        </div>
                    </form>
                <div>
                    <Link to="/LoginManager"> <button>Login Manager</button> </Link>
                </div>
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