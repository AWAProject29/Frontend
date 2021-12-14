import styles from '../components/modules/Login.module.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Constants from '../Constants.json'




export default function Login(props) {

    const navigate = useNavigate();
    

    


    const handleLoginSubmit = async (event) => {

        event.preventDefault();

        try {

            const result = await axios.post(Constants.API_ADDRESS + '/loginForJWTcustomer', null, 
            {

                auth: {
                    username: event.target.email.value,
                    password: event.target.password.value
                }

            }) 
            console.log(event.target.password.value);
            console.log(result);
            console.log(result.data.jwt);
            const receivedJWT = result.data.jwt;

            
            props.login(receivedJWT)
            
            

            setTimeout(() => {

                navigate("/ProtectedCustomer", { replace: true });

            }, 1000);

            } catch (error) {

                console.log(error);

            }

    }


    return (
        <div>
            <div className = { styles.container }>
                
                <div className = { styles.formContainer } > 
                
                    <form onSubmit={ handleLoginSubmit } className = { styles.loginFields }>
                        <label>Email:</label>
                            <input type="text" name="email" placeholder="your@email.com" />
                        <label>Password:</label>
                            <input type="password" name="password" />
                        <div className = { styles.buttonContainer }>
                            <button type="submit">Login</button>
                            <Link to="/signup"><button className = { styles.login }>Sign Up</button></Link>
                            <Link to="/LoginManager"> <button>Login as Manager</button> </Link>                     
                        </div>
                        
                    </form>
                    {/* <Link to={{ pathname: "Header", state: { statusId }}}><button className = { styles.login }>Login</button></Link> */}
                </div>
            </div>
        </div>
    )
}