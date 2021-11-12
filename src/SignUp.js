import React from 'react';
import styles from './components/modules/SignUp.module.css';
import { Link } from 'react-router-dom'

export default function SignUp() {
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
                      <label>
                      Repeat Password:
                      </label>
                      <input type="text" name="password" />
                      <label>
                      First Name:
                      </label>
                      <input type="text" name="name" />
                      <label>
                      Last Name:
                      </label>
                      <input type="text" name="name" />
                      <label>
                      Address
                      </label>
                      <input type="text" name="address" />
                </form>
                </div>
                <div className = { styles.buttonContainer }>
                     <button className = { styles.signUpButton}> Create Account
                     </button>
                     <Link to ="/login"><button className = { styles.signUpButton}>Back To Login</button></Link>
                </div>
            </div>
        </div>
    
    )
}