import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './modules/SignUp.module.css'

export default function SignUpView(props) {

    const [newEmail, addNewEmail] = useState("");
    const [newPassword, addNewPassword] = useState("");
    const [newFirstName, addNewFirstName] = useState("");
    const [newLastName, addNewLastName] = useState("");
    const [newAddress, addNewAddress] = useState("");
  
    const navigate = useNavigate();

    const addNewCustomerAccount = () => {
      props.addNewCustomerAccount(newEmail, newPassword, newFirstName, newLastName, newAddress);
      navigate('/login', { replace: true });
    }

    return (
        <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                        <form className = { styles.loginFields }>
                            <label>Email:</label>
                            <input type="text" id="email" placeholder="your@email.com" onChange={ (event) => addNewEmail(event.target.value) }/>
                            <label>Password:</label>
                            <input type="password" id="pwd" onChange={ (event) => addNewPassword(event.target.value) }/>
                            <progress id="progress" value="0" max="100">70</progress>
                            <span id="progresslabel"></span>
                            {/* <label>Repeat Password:</label>
                            <input type="password" id="password" onChange={ (event) => this.setState({ newGameName: event.target.value }) }/> */}
                            <label>First Name:</label>
                            <input type="text" id="name" onChange={ (event) => addNewFirstName(event.target.value) }/>
                            <label>Last Name:</label>
                            <input type="text" id="name" onChange={ (event) => addNewLastName(event.target.value) }/>
                            <label>Address</label>
                            <input type="text" id="address" onChange={ (event) => addNewAddress(event.target.value) }/>
                        </form>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <button id="signUpButton" onClick={ addNewCustomerAccount }>Create Account</button>
                        <Link to ="/managersignup"><button>Sign up Manager</button></Link>
                    </div>
                </div>
            </div>
    )
}
